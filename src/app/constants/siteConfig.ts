const siteConfig = {
  brandName: "Kelly's Ruff Life",
  logoUrl: "/paw.png",
  hero: {
    title: "Kelly's Ruff Life | Dog Walking & Sitting",
    subtitle: "Kelly's Ruff Life is a Dog Walking & Sitting service based out of Indian Wells, CA. Your dog will be well exercised, happy & satisfied.",
  },
  contact: {
    email: "Kelly@kellysrufflife.com",
    phone: "760-696-1131",
  },
  colors: {
    activeText: "#4A4A4A", // Off-black gray
    defaultText: "#000000", // Black
    hoverText: "#007BFF", // Blue
    backgroundColor: "#fff", // White
  },
  text: {
    navigation: [
      { name: "About", href: "/about" },
      { name: "Info", href: "/info" },
      { name: "Services", href: "/services" },
      { name: "Book Appointment", href: "/#book-appointment" },
    ],
    navLinkTextSize: "16px", // Default size for navigation links
  },
  footer: {
    mainNavigation: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/info" },
      { name: "Services", href: "/services" },
      { name: "Book Appointment", href: "/#book-appointment" },
    ],
    socialNavigation: [
      {
        name: "Facebook",
        href: "https://www.facebook.com",
        iconSrc: "/svg/facebook.svg",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com",
        iconSrc: "/svg/linkedin.svg",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com",
        iconSrc: "/svg/youtube.svg",
      },
    ],
    copyright: "Kelly Ruff | Kelly's Ruff Life | Certified Vet Technician | Animal Lover",
    cta: {
      text: "Website by Dream Big Joe.",
      href: "https://dreambigjoe.com",
    },
  },
  aboutPage: {
    hero: {
      backgroundImage: "/images/about.jpg",
      heroContext: "Meet The Team",
      description: "Kelly & Joey can take perfect care of your dog.",
      alignment: "center",
    },
    title: "Meet Kelly Ruff",
    aboutParagraphOne:
      "Born and raised in Hawaii on the island of Oahu, Kelly Ruff grew up with a deep appreciation for animals and their well-being. From a young age, she cared for dogs, cats, and guinea pigs, fostering a lifelong passion for animal care that would define her career.",
    aboutParagraphTwo:
      "As a young adult, Kelly pursued her love for animals by working in veterinary medicine, starting her first job at 21. Her dedication led her to Denver, CO, where she attended the Bel-Rea Institute of Animal Technology, graduating at the top of her class. Specializing in Emergency Surgery and Anesthesia, she worked at a 24-hour Emergency Veterinary Hospital, honing her skills in high-pressure, lifesaving scenarios.",
    aboutParagraphThree:
      "Today, Kelly continues her journey in animal care with a fresh perspective, focusing on innovative and compassionate ways to improve the lives of pets and their owners. Her extensive experience and expertise allow her to provide exceptional care and understanding to animals in need.",
    aboutParagraphFour:
      "Outside of her career, Kelly enjoys pilates, hiking, and working at Toscana and The Vintage Club. She cherishes her time with her boyfriend, Joey, and their beloved Chi-Weenie dog, Pretzel. Kelly is proud to call Palm Desert, CA, home and remains dedicated to making a positive impact in the community."
  },    
  blogPage: {
    hero: {
      backgroundImage: "/images/puppies/puppy2.png",
      heroContext: " ",
      description: " ",
    },
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },  
};

export default siteConfig;
