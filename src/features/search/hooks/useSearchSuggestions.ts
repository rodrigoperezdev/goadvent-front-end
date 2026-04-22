import { useFirestore } from "@/shared/hooks/useFirestore";
import { useMemo } from "react";

interface CatalogItem {
  name: string;
}

export const useSearchSuggestions = () => {
  const { data: activitiesCatalog, loading: loadingActivities } =
    useFirestore<CatalogItem>("activities_catalog");
  const { data: destinationsCatalog, loading: loadingDestinations } =
    useFirestore<CatalogItem>("destinations_catalog");

  const isLoading = loadingActivities || loadingDestinations;

  const compoundSearchSuggestions = useMemo(() => {
    if (isLoading) return [];
    return [
      ...activitiesCatalog.map((item) => item.name.toLowerCase()),
      ...destinationsCatalog.map((item) => item.name.toLowerCase()),
    ];
  }, [activitiesCatalog, destinationsCatalog, isLoading]);

  const getFilteredSuggestions = useMemo(() => {
    return (searchValue: string) =>
      compoundSearchSuggestions
        .filter((name) => name.startsWith(searchValue.toLowerCase()))
        .slice(0, 4);
  }, [compoundSearchSuggestions]);

  return { getFilteredSuggestions, isLoading };
};
