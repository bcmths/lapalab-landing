import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Academic from "@/components/Academic";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Specialties />
      <Academic />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;