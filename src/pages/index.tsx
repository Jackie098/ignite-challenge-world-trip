import { Box, Divider, Flex, Spinner, Text } from "@chakra-ui/react";

import { useSortedContinents } from "@/services/hooks/useContinents";

import { Decoy } from "@/components/Decoy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SwiperPresentation } from "@/components/SwiperPresentation";

// CHECKPOINT
// TODO: : Start build layout
// TODO: : Add responsiviness
// TODO: : Fetch API

// type Continent = {
//   continent_name: string;
//   alias: string;
//   decoy: string;
//   presentation_banner: string;
// };

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
