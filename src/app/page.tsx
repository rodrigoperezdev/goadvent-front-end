import { CategoryCarousel } from "@/features/category-carousel/components/CategoryCarousel";
import { SearchCarousel } from "@/features/search-carousel/components/SearchCarousel";
import { SearchForm } from "@/features/search-carousel/components/SearchForm";
import { TopDestinations } from "@/features/top-destinations/components/TopDestinations";
import { TrendingCarousel } from "@/features/trending-carousel/components/TrendingCarousel";

export default function Home() {
  return (
    <section>
      <SearchCarousel />
      <SearchForm />
      <CategoryCarousel />
      <TrendingCarousel />
      <TopDestinations />
    </section>
  );
}
