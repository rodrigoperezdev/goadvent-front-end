import { SearchCarousel } from "@/features/search-carousel/components/SearchCarousel";
import { SearchForm } from "@/features/search-carousel/components/SearchForm";

export default function Home() {
  return (
    <section>
      <SearchCarousel />
      <SearchForm />
    </section>
  );
}
