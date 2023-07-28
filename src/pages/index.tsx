import {
  Box,
  Divider,
  Flex,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { useSortedContinents } from "@/services/hooks/useContinents";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Decoy } from "@/components/Decoy";
import { SwiperPresentation } from "@/components/SwiperPresentation";

// CHECKPOINT
// TODO: : Start build layout
// TODO: : Add responsiviness
// TODO: : Fetch API

// type City = {
//   city_name: string;
//   country: string;
//   iso_code: string;
//   city_image: string;
// };

type Continent = {
  continent_name: string;
  alias: string;
  decoy: string;
  presentation_banner: string;
  // description: string;
  // page_banner: string;
  // amount_countries: string;
  // amount_languages: string;
  // amount_cities_100: string;
  // examples_cities_100: City[];
};

// type PreviewContinent = Pick<
//   Continent,
//   "continent_name" | "alias" | "decoy" | "presentation_banner"
// >;

// interface HomeProps {
//   continents: Continent[];
// }

export default function Home() {
  const { data: continents, status, isFetching } = useSortedContinents();

  console.log("status", status);
  console.log("continents", continents);

  if (status === "error") {
    return <Text>Error in request</Text>;
  }

  if (status === "loading") {
    return (
      <Flex justify={"center"} align={"center"} h={"100vh"}>
        <Spinner color="hightlight.800" size={"lg"} />
      </Flex>
    );
  }

  return (
    <Box w={"100%"} h={"100vh"}>
      <Header />

      <Hero />

      <Decoy />

      <Flex justify={"center"}>
        <Divider borderColor={"darkText.400"} maxW={"90px"} border={"2px"} />
      </Flex>

      <SwiperPresentation
        queryData={{ data: continents, isFetching, status }}
      />
    </Box>
  );
}
