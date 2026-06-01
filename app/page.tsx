import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { BrandManifesto } from "@/sections/brand-manifesto";
import { BrandPhilosophy } from "@/sections/brand-philosophy";
import { ContactShowroom } from "@/sections/contact-showroom";
import { CraftsmanshipStory } from "@/sections/craftsmanship-story";
import { FeaturedCampaign } from "@/sections/featured-campaign";
import { FeaturedFrames } from "@/sections/featured-frames";
import { FloatingNavbar } from "@/sections/floating-navbar";
import { HeroSection } from "@/sections/hero-section";
import { HorizontalGallery } from "@/sections/horizontal-gallery";
import { JournalPreview } from "@/sections/journal-preview";
import { SignatureCollections } from "@/sections/signature-collections";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider />
      <FloatingNavbar />
      <main>
        <HeroSection />
        <BrandPhilosophy />
        <FeaturedFrames />
        <SignatureCollections />
        <CraftsmanshipStory />
        <HorizontalGallery />
        <BrandManifesto />
        <FeaturedCampaign />
        <JournalPreview />
        <ContactShowroom />
      </main>
    </>
  );
}
