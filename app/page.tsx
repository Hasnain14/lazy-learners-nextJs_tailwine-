import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/Hero";
import MainBody from "./components/mainBody/MainBody";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
}
