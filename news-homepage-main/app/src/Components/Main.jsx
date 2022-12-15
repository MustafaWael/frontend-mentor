import { featuredBlogs } from "../constants";
import { FeaturedBlogs } from "./FeaturedBlogs";

export const Main = ({}) => {
  return (
    <main className="px-4 mt-20">
      <FeaturedBlogs blogs={featuredBlogs} />
    </main>
  );
};
