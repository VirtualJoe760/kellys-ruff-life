import AboutCta from "./components/AboutCta";
import VariableHero from "./components/VariableHero";
import TidyCalEmbed from "./components/TidyCalEmbed";

export default function Home() {
  return (
    <div>
      <VariableHero 
        backgroundImage="/images/puppies/puppy1.png"
        heroContext="Welcome to Kelly's Ruff Life!"
        description="Premium Dog Walking & Sitting Services!"
        alignment="left"
      />
      <AboutCta />
      <section id="book-appointment" className="w-full py-12">
        <h2 className="text-4xl font-bold text-center mb-6">Book an Appointment</h2>
        <TidyCalEmbed />
      </section>
    </div>
  );
}
