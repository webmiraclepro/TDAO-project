import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArticleCard } from "./ArticleCard";

function LatestArticles() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full">
      <h2>Latest Articles</h2>
      <Carousel responsive={responsive}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </Carousel>
    </div>
  );
}

export default LatestArticles;
