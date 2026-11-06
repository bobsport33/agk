import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Button } from "@/components/Button/Index";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  topic: z.enum(["creative", "books"], { message: "Choose an inquiry type" }),
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  karaoke: z.string().optional()
});
type ContactFormData = z.infer<typeof contactSchema>;
type Topic = ContactFormData["topic"];

const Page = styled.section`
  background: var(--surface-hero); color: var(--text-body);
  padding: var(--section-space) var(--page-gutter);
  .contact__content { max-width: var(--content-max); margin-inline: auto; }
  h1 { margin-bottom: var(--space-7); }
  .contact__grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--layout-gap); align-items: start; }
  .contact__intro { max-width: 40ch; font-size: var(--font-size-lead); }
  .contact__copy p + p { margin-top: var(--paragraph-gap); }
  .contact__portrait { width: 200px; height: 240px; object-fit: cover; margin-top: var(--space-6); }
  form { min-width: 0; }
  .contact__topics { display: flex; gap: var(--space-3); margin: 0 0 var(--space-5); padding: 0; border: 0; }
  .contact__topics legend { font-weight: var(--weight-medium); margin-bottom: var(--space-3); font-size: var(--font-size-small); }
  .contact__topic { position: relative; flex: 1; }
  .contact__topic input { position: absolute; opacity: 0; width: 1px; height: 1px; }
  .contact__topic label { display: block; border: 1px solid currentColor; padding: var(--control-padding-block) var(--control-padding-inline); min-height: var(--control-height); cursor: pointer; font-size: var(--font-size-small); line-height: var(--leading-body); }
  .contact__topic input:checked + label { background: var(--color-ink); color: var(--color-coral); }
  .contact__topic input:focus-visible + label { outline: var(--focus-width) solid var(--color-ink); outline-offset: var(--focus-offset); }
  .contact__topic label:hover { text-decoration: underline; }
  .contact__field label { display: block; margin: var(--space-5) 0 var(--space-2); font-size: var(--font-size-small); font-weight: var(--weight-medium); }
  .contact__required { font-weight: var(--weight-heading); }
  .contact__optional { font-weight: var(--weight-body); }
  input[type='text'], input[type='email'], input[type='tel'], textarea { display: block; width: 100%; min-height: var(--tap-target); padding: var(--space-3) 0; border: 0; border-bottom: 1px solid currentColor; border-radius: 0; background: transparent; color: inherit; }
  textarea { min-height: 110px; resize: vertical; }
  input::placeholder, textarea::placeholder { color: var(--text-muted); }
  [aria-invalid='true'] { border-bottom: 2px solid var(--status-error); }
  .contact__error { color: var(--status-error); font-size: var(--font-size-small); margin-top: var(--space-2); }
  .contact__requestError { border-left: 3px solid var(--status-error); padding: var(--space-3) var(--space-4); margin-top: var(--space-5); }
  .contact__submit { display: flex; justify-content: flex-end; margin-top: var(--space-5); }
  .contact__success { border-top: 1px solid currentColor; padding-top: var(--space-5); display: grid; gap: var(--space-5); }
  @media (max-width: 1024px) { .contact__grid { grid-template-columns: 1fr; } .contact__copy { max-width: 65ch; } }
  @media (max-width: 640px) { .contact__portrait { width: 150px; height: 180px; } .contact__topics { flex-direction: column; } }
`;
const Contact = () => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [requestError, setRequestError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, setValue, control, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), defaultValues: { topic: "creative", name: "", email: "", phone: "", message: "", karaoke: "" }
  });

  const currentTopic = useWatch({ control, name: "topic" });

  useEffect(() => {
    if (!router.isReady) return;
    const queryTopic = Array.isArray(router.query.topic) ? router.query.topic[0] : router.query.topic;
    setValue("topic", queryTopic === "books" ? "books" : "creative", { shouldValidate: true });
  }, [router.isReady, router.query.topic, router.asPath, setValue]);

  const chooseTopic = (topic: Topic) => {
    setValue("topic", topic, { shouldValidate: true, shouldDirty: true });
    setRequestError("");
    void router.push({ pathname: "/contact", query: { ...router.query, topic } }, undefined, { shallow: true, scroll: false });
  };

  const onSubmit = async (data: ContactFormData) => {
    setRequestError("");
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("The message could not be sent. Please try again.");
      setSubmitted(true);
      reset({ ...data, name: "", email: "", phone: "", message: "", karaoke: "" });
      window.setTimeout(() => successRef.current?.focus(), 0);
    } catch {
      setRequestError("Something went wrong while sending your message. Please try again. Your message is still here.");
    }
  };

  return <Page className="contact-screen" id="contact"><div className="contact__content">
    <h1 className="type-contact-hero">Let&apos;s talk.</h1>
    <div className="contact__grid">
      <div className="contact__copy">
        <p className="contact__intro">Building something great is always more fun with the right person (slash creative director slash hype squad slash karaoke partner) in your corner.</p>
        <p>Got a brand that needs a voice? Building one from scratch? We can start with a creative consult, make a plan, then get to work.</p>
        <p>Just looking to add a creative lead to your team? Send me a few details and I&apos;ll be in touch.</p>
        <Image className="contact__portrait" src="/assets/playbook/portrait.png" alt="Anastasia Guletsky" width={190} height={230} />
      </div>
      <div>
        {submitted ? <div className="contact__success" ref={successRef} tabIndex={-1} role="status" aria-live="polite">
          <h2>Message sent!</h2><p>Thanks for reaching out! I&apos;ll be in touch soon to start building something great together.</p>
          <Button type="button" onClick={() => { setSubmitted(false); setRequestError(""); }}>Send another message</Button>
        </div> : <form onSubmit={(event) => void handleSubmit(onSubmit)(event)} noValidate>
          <fieldset className="contact__topics"><legend>What are you reaching out about? <span className="contact__required">*</span></legend>
            {(["creative", "books"] as const).map(topic => <div className="contact__topic" key={topic}>
              <input type="radio" id={`topic-${topic}`} value={topic} {...register("topic")} checked={currentTopic === topic} onChange={() => chooseTopic(topic)} aria-describedby={errors.topic ? "topic-error" : undefined} />
              <label htmlFor={`topic-${topic}`}>{topic === "creative" ? "Creative work" : "Books, schools, libraries & events"}</label>
            </div>)}
          </fieldset>
          {errors.topic && <p className="contact__error" id="topic-error">{errors.topic.message}</p>}
          <div className="contact__field"><label htmlFor="name">Name <span className="contact__required">*</span></label><input id="name" type="text" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />{errors.name && <p className="contact__error" id="name-error">{errors.name.message}</p>}</div>
          <div className="contact__field"><label htmlFor="email">Email <span className="contact__required">*</span></label><input id="email" type="email" autoComplete="email" placeholder="your@email.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />{errors.email && <p className="contact__error" id="email-error">{errors.email.message}</p>}</div>
          <div className="contact__field"><label htmlFor="phone">Phone <span className="contact__optional">(optional)</span></label><input id="phone" type="tel" autoComplete="tel" placeholder="Your phone number" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />{errors.phone && <p className="contact__error" id="phone-error">{errors.phone.message}</p>}</div>
          <div className="contact__field"><label htmlFor="message">What&apos;s on your mind? <span className="contact__required">*</span></label><textarea id="message" placeholder="Tell me about your brand, project or idea..." aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />{errors.message && <p className="contact__error" id="message-error">{errors.message.message}</p>}</div>
          <div className="contact__field"><label htmlFor="karaoke">What&apos;s your favorite karaoke song? <span className="contact__optional">(optional)</span></label><input id="karaoke" type="text" placeholder="Don't be shy..." aria-invalid={!!errors.karaoke} aria-describedby={errors.karaoke ? "karaoke-error" : undefined} {...register("karaoke")} />{errors.karaoke && <p className="contact__error" id="karaoke-error">{errors.karaoke.message}</p>}</div>
          {requestError && <p className="contact__requestError" role="alert">{requestError}</p>}
          <div className="contact__submit"><Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Get in touch"}</Button></div>
        </form>}
      </div>
    </div>
  </div></Page>;
};
export default Contact;
