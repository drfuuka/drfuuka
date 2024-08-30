import AboutMeSection from "./_section/about-me-section";
import FooterSection from "./_section/footer-section";
import HeroSection from "./_section/hero-section";
import MyWorksSection from "./_section/my-works-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />

      <div className="px-6 md:px-3 lg:px-64 ">
        <hr className="dark:opacity-10" />
      </div>

      {/* <MyWorksSection /> */}
      <FooterSection />
    </>
  );
}
