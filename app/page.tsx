import {
  Header,
  Hero,
  TrustBar,
  BenefitsSection,
  ProductsSection,
  TestimonialsSection,
  PromoSection,
  AboutSection,
  CategoriesSection,
  LocationSection,
  ContactSection,
  Footer,
} from "@/components/organisms";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BenefitsSection />
        <ProductsSection />
        <TestimonialsSection />
        <PromoSection />
        <AboutSection />
        <CategoriesSection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
