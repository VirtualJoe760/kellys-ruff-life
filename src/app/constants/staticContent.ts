

// INSIGHTS SECTION
export const insightsCategoriesContent = {
  heading: "Explore Real Estate Insights & Advice",
  description:
    "Stay informed and confident throughout your real estate journey. From market trends to practical tips, discover expert insights tailored to your needs.",
  categories: [
    {
      id: 1,
      title: "Articles",
      href: "/insights/articles",
      imageUrl:
        "/misc/back-yard_00001_.png",
      altText: "An open book with charts representing knowledge and insights.",
      description:
        "Explore in-depth articles covering economics, market statistics, trends, and insights that go beyond the Coachella Valley.",
    },
    {
      id: 2,
      title: "Market Insights",
      href: "/insights/market-insights",
      imageUrl:
        "/misc/front-yard_00001_.png",
      altText: "Graphs and charts showcasing Coachella Valley market trends.",
      description:
        "Discover insights focused on the Coachella Valley market, including housing trends, neighborhood highlights, and local statistics.",
    },
    {
      id: 3,
      title: "Real Estate Tips",
      href: "/insights/real-estate-tips",
      imageUrl:
        "/misc/bathroom_00001_.png",
      altText: "A real estate agent reviewing a home buying guide.",
      description:
        "Practical tips and advice on navigating real estate transactions, from buying and selling to maximizing your investment.",
    },
  ],
};

// CATEGORIES CONTENT

// SECTION BLOG PAGE CONTENT

export const categoriesPageContent = {
  title: (section: string) => `${section.replace('-', ' ')}`,
  description: (section: string) =>
    `I'm dedicated to more than just helping you buy or sell properties. I strive to provide valuable insights and expert advice through our blog. Whether you're navigating the real estate market, staying informed on local trends, or seeking tips for property investment, our ${section.replace('-', ' ')} insights are tailored to empower you with the knowledge to make confident decisions for your real estate journey.`,
};
