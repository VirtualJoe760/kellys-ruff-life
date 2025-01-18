"use client";

import React from "react";
import VariableHero from "@/components/VariableHero";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <VariableHero
        backgroundImage="/images/puppies/puppy3.png"
        heroContext="Kelly's Services"
        description="Professional and reliable care for your furry friends."
        alignment="center"
      />

      {/* Services Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-6xl text-heading font-bold mb-6">Services Offered</h2>
        <hr className="my-5" />

        <div className="mb-8">
          <h3 className="text-4xl text-heading font-semibold mb-4">Dog Sitting</h3>
          <p className="text-xl mb-2">
            Kelly provides overnight dog sitting services to ensure your pets feel safe and loved while you’re away. 
          </p>
          <p className="text-xl font-bold">Rate: $150 per night</p>
        </div>

        <div className="mb-8">
          <h3 className="text-4xl text-heading font-semibold mb-4">Dog Walking</h3>
          <p className="text-xl mb-2">
            Choose from two excellent options to keep your dog active and happy:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-xl mb-2">
              <strong>Power Paw Hour Walk:</strong> A brisk, fun walk for $75.
            </li>
            <li className="text-xl mb-2">
              <strong>Two-Hour Hike:</strong> Includes pick-up and drop-off at your house for $150.
            </li>
          </ul>
        </div>

        <p className="mb-4 text-xl">
          Whether your dog needs a calming overnight stay or an exciting adventure, Kelly is here to provide exceptional care. 
          Contact today to book the perfect service for your furry friend.
        </p>

        <div className="text-center mt-10">
          <Link 
            href="/#book-appointment" 
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-800"
          >
            Book an Appointment
          </Link>
        </div>

        <hr className="mt-20" />
      </section>
    </div>
  );
};

export default ServicesPage;
