import BlogGridWithFilter from "../../components/NavbarPages/LearningCenter/BlogGrid";
import InfoSection from "../../components/NavbarPages/LearningCenter/InfoSection";
import ReviewsSlider from "../../components/NavbarPages/LearningCenter/ReviewsSlider";
import WhyRepaireze from "../../components/NavbarPages/LearningCenter/WhyRepaireze";

function LearningCenter() {
  return (
    <>
      <InfoSection />
      <BlogGridWithFilter />
      <WhyRepaireze />
      <ReviewsSlider />
    </>
  );
}

export default LearningCenter;
