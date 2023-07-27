import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

type Continent = {
  continent_name: string;
  alias: string;
  decoy: string;
  presentation_banner: string;
};

export async function getContinents(sortedAttr = false): Promise<Continent[]> {
  const { data } = await api.get<Continent[]>("continents", {
    params: { sortedAttr },
  });

  console.log("data -++", data);

  return data;
}

export function useSortedContinents() {
  return useQuery(["sortedContinents"], () => getContinents(true), {
    staleTime: 1000 * 5,
  });
}
