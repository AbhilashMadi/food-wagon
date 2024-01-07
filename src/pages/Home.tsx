import Announcement from "@/components/common/Announcement";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import FeaturedRestaurents from "@/components/containers/FeaturedRestaurents";
import FeedbackSection from "@/components/containers/FeedbackSection";
import HeroSection from "@/components/containers/HeroSection";
import HowItWorksSection from "@/components/containers/HowItWorksSection";
import OrderNow from "@/components/containers/OrderNow";
import PopularItemsCarousel from "@/components/containers/PopularItemsCarousel";
import SearchByFood from "@/components/containers/SearchByFood";
import SpecialDiscountItems from "@/components/containers/SpecialDiscountItems";
import type { FC } from "react";

export const Component: FC = () => {

  return <main>
    <Announcement/>
    <Navbar/>
    <HeroSection/>
    <SpecialDiscountItems/>
    <HowItWorksSection/>
    <PopularItemsCarousel/>
    <FeaturedRestaurents/>
    <SearchByFood/>
    <FeedbackSection/>
    <OrderNow/>
    <Footer/>
  </main>;
};

Component.displayName = "Home";
