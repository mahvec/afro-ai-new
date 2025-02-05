import AboutTwo from "./components/about";
import AboutAfro from "./components/about-afro";
import Hero from "./components/hero";
import Trusted from "./components/trusted";

export default function AboutUs() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Trusted />
      <AboutAfro />
      <AboutTwo />
    </div>
  );
}
