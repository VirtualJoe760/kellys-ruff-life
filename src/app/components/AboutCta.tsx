"use client";

import { HomeIcon, ChatBubbleBottomCenterIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const cards = [
  {
    name: "Learn About Kelly",
    description:
      "Hi I'm Kelly and I Love Animals. I'm a Certified Vet Tech and professional Dog Walker & Dog Sitter!",
    icon: HomeIcon,
    href: "/about",
    image: "/images/misc/puppy_00001_.png",
  },
  {
    name: "Info",
    description:
      "Guide your audience through their journey, making every step seamless and rewarding.",
    icon: ChatBubbleBottomCenterIcon,
    href: "/info",
    image: "/images/misc/puppy_00002_.png",
  },
  {
    name: "Services",
    description:
      "Help your audience navigate their goals, maximize value, and achieve stress-free results.",
    icon: GlobeAmericasIcon,
    href: "/services",
    image: "/images/misc/puppy_00003_.png",
  },
];

export default function AboutCta() {
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold text-heading mb-8">Get to Know Us</h2>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="relative flex flex-col gap-y-4 rounded-xl p-6 ring-1 ring-gray-200 group hover:shadow-lg transition"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <card.icon className="h-8 w-8 text-heading" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-blue-300">{card.name}</h3>
                <p className="mt-2 text-lg text-blue-300">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-4 inline-block text-heading hover:text-indigo-300 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
