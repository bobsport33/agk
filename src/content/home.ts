/** Approved homepage copy from AGK Website Copy.txt and the reviewed HTML mockup. */
export const homeCopy = {
  hero: {
    name: "ANASTASIA GULETSKY KELLY",
    roles: ["creative director", "author", "friend"],
    intro: "Hello! I’m Anastasia, and I’m obsessed with a good story.",
    paths: [
      { key: "portfolio", description: "I’ve told them for many brands.", label: "Check out my portfolio", href: "/creative-work" },
      { key: "books", description: "And now, I write them for kids.", label: "Browse the bookshelf", href: "/books" }
    ]
  },
  portfolio: {
    title: "my creative work",
    description: "From starting as a humble copy scribe to becoming a creative leader who can still get you 50 taglines by noon, I’ve become the voice of many of the brands we all know. And bonus: I run my own creative studio now too. Check out my favorite campaigns from Harley-Davidson, Converse, the City of Chicago and more.",
    label: "View portfolio",
    href: "/creative-work"
  },
  books: {
    title: "my books",
    description: "Same storyteller, but now I have a new client: kids.",
    label: "Learn more",
    href: "/books"
  },
  about: {
    title: "i’m anastasia",
    description: "But you know that by now. What you probably don’t know is that I know how to make deep dish pizza. Or that the word “synergy” makes me die a little inside. I really can’t get into my life story in one web module, because who wants to read that much (“...said the writer”). So here are five more fun facts to hold you over:",
    facts: [
      "15+ years of advertising world, or something ad-like",
      "I started my own business this year",
      "lorum ipsum",
      "I’m obsessed with dachshunds. Especially mine, Benny.",
      "When I was in 2nd grade, I wrote the original Star Wars Episode 7: “R2-D2 Strikes Back.”"
    ],
    outro: "But the best way to get to know me is to get in touch! Which is extra convenient because we’re at the end of the page where you’ll find…"
  },
  contact: {
    title: "get in touch",
    description: "About teaming up on a creative gig, learning about my next book project, or sharing your favorite intro at a cocktail party. I’m all ears!",
    label: "contact me",
    href: "/contact"
  }
} as const;
