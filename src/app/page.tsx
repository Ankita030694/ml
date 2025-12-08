import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import OurStory2 from "@/components/OurStory2";
import FollowSection from "@/components/FollowSection";
import CTA from "@/components/CTA";
import ImageGallery from "@/components/ImageGallery";
import Reviews from "@/components/Reviews";
import Testimonial from "@/components/Testimonial";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full overflow-hidden relative">
        <Navbar />
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/mlhero.mp4" type="video/mp4" />
        </video>
      </div>
      <OurStory />

      <OurStory2 />
      <Instagram />

      <Footer />
    </>
  );
}
