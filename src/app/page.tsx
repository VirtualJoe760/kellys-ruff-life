import AboutCta from "./components/AboutCta";
import VariableHero from "./components/VariableHero";


export default function Home() {
  return (
    <div>
      <VariableHero 
      backgroundImage="/images/variable-hero-default.jpg"
      heroContext="Your new website"
      description="You can write anything here"
      alignment="left"
      />
      <AboutCta />
    </div>
  );
}
