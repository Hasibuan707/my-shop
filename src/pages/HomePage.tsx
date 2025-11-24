import BannerEcommerce from "../components/BannerEcommerce";
import MakeupCarousel from "../components/MakeupCarousel";
import ProductsCarousel from "../components/ProductCarousel";

function HomePage() {
  return (
    <>
      <BannerEcommerce />
      <MakeupCarousel />
      <ProductsCarousel />
    </>
  );
}

export default HomePage;
