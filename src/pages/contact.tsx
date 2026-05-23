// Contact.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";

import { Button } from "@/components/Button/Index";
// ── Zod Schema ──
const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	phone: z.string().optional(),
	message: z.string().min(1, "Message is required"),
	karaoke: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Styled Wrapper ──
const ContactWrapper = styled.section`
	max-width: 85%;
	margin: 30px auto;
	background-color: transparent;

	/* ── Inner Layout ── */
	& .contact__inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
		background-color: var(--neutral-200);
		border-radius: 10px;
		padding: 3rem;

		@media (max-width: 1024px) {
			grid-template-columns: 1fr;
			gap: 2.5rem;
			padding: 2rem;
		}
	}

	/* ── Copy ── */
	& .contact__copy {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: sticky;
		top: 2rem;

		@media (max-width: 768px) {
			position: static;
		}
	}

	& .contact__heading {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		color: var(--neutral-1000);
		line-height: 1.2;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	& .contact__intro {
		font-family: "Montserrat", sans-serif;
		font-size: 1rem;
		line-height: 1.75;
		color: var(--neutral-800);
		font-style: italic;
	}

	& .contact__body {
		font-family: "Montserrat", sans-serif;
		font-size: 0.95rem;
		line-height: 1.75;
		color: var(--neutral-700);
	}

	/* ── Form Wrapper ── */
	& .contact__formWrapper {
		background-color: var(--neutral-100);
		border-radius: 8px;
		padding: 2.5rem;
		border: 1px solid var(--neutral-300);

		@media (max-width: 1024px) {
			padding: 1.5rem;
		}
	}

	/* ── Form ── */
	& .contact__form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* ── Field ── */
	& .contact__field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	/* ── Label ── */
	& .contact__label {
		font-family: "Gotu", sans-serif;
		font-size: 0.85rem;
		letter-spacing: 0.05em;
		color: var(--neutral-900);
		text-transform: uppercase;
	}

	& .contact__required {
		color: var(--primary-500);
	}

	& .contact__optional {
		font-family: "Montserrat", sans-serif;
		font-size: 0.75rem;
		color: var(--neutral-600);
		text-transform: none;
		letter-spacing: 0;
	}

	/* ── Input & Textarea ── */
	& .contact__input,
	& .contact__textarea {
		font-family: "Montserrat", sans-serif;
		font-size: 0.9rem;
		color: var(--neutral-900);
		background-color: var(--neutral-200);
		border: 1px solid var(--neutral-400);
		border-radius: 6px;
		padding: 0.75rem 1rem;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
		width: 100%;
		outline: none;

		&::placeholder {
			color: var(--neutral-500);
		}

		&:focus {
			border-color: var(--primary-400);
			box-shadow: 0 0 0 3px var(--primary-100);
		}
	}

	& .contact__textarea {
		resize: vertical;
		min-height: 120px;
	}

	/* ── Error Modifier ── */
	& .contact__input--error,
	& .contact__textarea--error {
		border-color: var(--accent-500);

		&:focus {
			border-color: var(--accent-600);
			box-shadow: 0 0 0 3px var(--accent-100);
		}
	}

	& .contact__errorMessage {
		font-family: "Montserrat", sans-serif;
		font-size: 0.78rem;
		color: var(--accent-600);
		margin-top: 0.15rem;
	}

	/* ── Submit ── */
	& .contact__submitWrapper {
		display: flex;
		justify-content: flex-end;
		padding-top: 0.5rem;
	}

	/* ── Success Message ── */
	& .contact__successMessage {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1.25rem;
		padding: 2rem;
		min-height: 300px;
	}

	& .contact__successIcon {
		font-size: 3rem;
	}

	& .contact__successHeading {
		font-size: 1.5rem;
		color: var(--neutral-1000);
		letter-spacing: 0.03em;
	}

	& .contact__successBody {
		font-family: "Montserrat", sans-serif;
		font-size: 0.95rem;
		line-height: 1.75;
		color: var(--neutral-700);
		max-width: 320px;
	}
`;

// ── Component ──
const Contact = () => {
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema)
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			const res = await fetch("/.netlify/functions/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});

			if (!res.ok) {
				throw new Error("Failed to send message");
			}

			setSubmitted(true);
			reset();
		} catch (error) {
			console.error(error);
			alert("Something went wrong. Please try again.");
		}
	};

	return (
		<ContactWrapper className="section contact" id="contact">
			<div className="contact__inner">
				{/* ── Left: Copy ── */}
				<div className="contact__copy">
					<h2 className="contact__heading">
						Let&apos;s Work Together
					</h2>
					<p className="contact__intro">
						Building something great is always more fun with the
						right person (slash creative director slash hype squad
						slash karaoke partner) in your corner.
					</p>
					<p className="contact__body">
						Got a brand that needs a voice? Building one from
						scratch? Here&apos;s how it works: we start with a
						creative consult, I put together a plan that&apos;s
						custom built for you, then we get to work!
					</p>
					<p className="contact__body">
						Just looking to add a creative lead to your team? Send
						me details about your project and timing, and I&apos;ll
						be in touch!
					</p>
				</div>

				{/* ── Right: Form or Success ── */}
				<div className="contact__formWrapper">
					{submitted ? (
						<div className="contact__successMessage">
							<span className="contact__successIcon">✌️</span>
							<h3 className="contact__successHeading">
								Message sent!
							</h3>
							<p className="contact__successBody">
								Thanks for reaching out! I&apos;ll be in touch
								soon to start building something great together.
							</p>
							<Button
								variant="primary"
								onClick={() => setSubmitted(false)}
							>
								Send another message
							</Button>
						</div>
					) : (
						<form
							className="contact__form"
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							{/* Name */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="name"
								>
									Name{" "}
									<span className="contact__required">*</span>
								</label>
								<input
									id="name"
									type="text"
									className={`contact__input${errors.name ? " contact__input--error" : ""}`}
									placeholder="Your name"
									{...register("name")}
								/>
								{errors.name && (
									<p className="contact__errorMessage">
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="email"
								>
									Email{" "}
									<span className="contact__required">*</span>
								</label>
								<input
									id="email"
									type="email"
									className={`contact__input${errors.email ? " contact__input--error" : ""}`}
									placeholder="your@email.com"
									{...register("email")}
								/>
								{errors.email && (
									<p className="contact__errorMessage">
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Phone */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="phone"
								>
									Phone
									<span className="contact__optional">
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="phone"
									type="tel"
									className="contact__input"
									placeholder="Your phone number"
									{...register("phone")}
								/>
							</div>

							{/* Message */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="message"
								>
									What&apos;s on your mind?{" "}
									<span className="contact__required">*</span>
								</label>
								<textarea
									id="message"
									className={`contact__textarea${errors.message ? " contact__textarea--error" : ""}`}
									placeholder="Tell me about your brand, project or idea..."
									rows={5}
									{...register("message")}
								/>
								{errors.message && (
									<p className="contact__errorMessage">
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Karaoke */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="karaoke"
								>
									What&apos;s your favorite karaoke song?
									<span className="contact__optional">
										{" "}
										(optional)
									</span>
								</label>
								<input
									id="karaoke"
									type="text"
									className="contact__input"
									placeholder="Don't be shy..."
									{...register("karaoke")}
								/>
							</div>

							{/* Submit */}
							<div className="contact__submitWrapper">
								<Button
									variant="primary"
									disabled={isSubmitting}
								>
									{isSubmitting
										? "Sending..."
										: "Get in touch"}
								</Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</ContactWrapper>
	);
};

export default Contact;
