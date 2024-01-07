import type { FC } from "react";
import { lazy } from "react";

const Announcement = lazy(() => import("@/components/common/Announcement"));
const Footer = lazy(() => import("@/components/common/Footer"));
const Navbar = lazy(() => import("@/components/common/Navbar"));
const FeaturedRestaurents = lazy(
  () => import("@/components/containers/FeaturedRestaurents"),
);
const FeedbackSection = lazy(
  () => import("@/components/containers/FeedbackSection"),
);
const HeroSection = lazy(() => import("@/components/containers/HeroSection"));
const HowItWorksSection = lazy(
  () => import("@/components/containers/HowItWorksSection"),
);
const OrderNow = lazy(() => import("@/components/containers/OrderNow"));
const PopularItemsCarousel = lazy(
  () => import("@/components/containers/PopularItemsCarousel"),
);
const SearchByFood = lazy(() => import("@/components/containers/SearchByFood"));
const SpecialDiscountItems = lazy(
  () => import("@/components/containers/SpecialDiscountItems"),
);

export const Home: FC = () => {

  return (
    <main className="font-primary">
      <Announcement />
      <Navbar />
      <HeroSection />
      <SpecialDiscountItems />
      <HowItWorksSection />
      <PopularItemsCarousel />
      <FeaturedRestaurents />
      <SearchByFood />
      <FeedbackSection />
      <OrderNow />
      <Footer />
    </main>
  );
};

export default Home;
