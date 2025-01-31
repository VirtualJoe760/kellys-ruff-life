"use client";

import React from "react";
import VariableHero from "@/app/components/VariableHero";
import siteConfig from "@/app/constants/siteConfig";

const AboutPage = () => {
  const { aboutPage } = siteConfig;

  return (
    <div>
      {/* Hero Section */}
      <VariableHero
        backgroundImage={aboutPage.hero.backgroundImage}
        heroContext={aboutPage.hero.heroContext}
        description={aboutPage.hero.description}
        alignment="center" // Ensure alignment matches the expected type
      />

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-6xl font-bold mb-6">{aboutPage.title}</h2>
        <hr className="my-5" />
        <p className="mb-4 text-xl">{aboutPage.aboutParagraphOne}</p>
        <p className="mb-4 text-xl">{aboutPage.aboutParagraphTwo}</p>
        <p className="mb-4 text-xl">{aboutPage.aboutParagraphThree}</p>
        <p className="mb-4 text-xl">{aboutPage.aboutParagraphFour}</p>
        <p className="mb-4 text-xl">{aboutPage.aboutParagraphFive}</p>
        <hr className="mt-20" />
      </section>
    </div>
  );
};

export default AboutPage;
