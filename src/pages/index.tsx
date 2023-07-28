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

// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { useSortedContinents } from "@/services/hooks/useContinents";
import Link from "next/link";
import AirplaneIcon from "public/airplane.svg";
import ClassicalBuildingIcon from "public/classical_building.svg";
import CocktailIcon from "public/cocktail.svg";
import EarthSvgIcon from "public/earth.svg";
import Logo from "public/logo.svg";
import ModernBuildingIcon from "public/modern_building.svg";
import SurfIcon from "public/surf.svg";

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
      <Flex w={"100vw"} h={100} alignItems={"center"} justify={"center"}>
        <Image src={Logo} alt="Logo" width={180} height={45} />
      </Flex>

      <Flex
        bgImage="url('background_at_night.png')"
        bgSize={"cover"}
        h={"100%"}
        maxH={335}
        justify={"space-around"}
      >
        <Flex
          flexDir={"column"}
          gap={"20px"}
          maxW={524}
          justify={"center"}
          mt={10}
        >
          <Text color={"lightText.900"} fontSize={36} fontWeight={600}>
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text textColor={"lightInfo.900"} fontSize={20}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Flex h={"100%"} mt={"55px"} transform={"rotate(3deg)"}>
          <Image
            src={AirplaneIcon}
            alt="Yellow plane between clouds"
            width={415}
            height={270}
          />
        </Flex>
      </Flex>

      <HStack h={"100%"} maxH={145} justify={"space-evenly"} m={"80px 40px"}>
        <VStack gap={"24px"}>
          <Image src={CocktailIcon} alt="Um drink com limão" />
          <Text fontWeight={600} color={"darkText.500"}>
            vida noturna
          </Text>
        </VStack>
        <VStack gap={"24px"}>
          <Image src={SurfIcon} alt="Uma prancha de surf e o sol de fundo" />
          <Text fontWeight={600} color={"darkText.500"}>
            praia
          </Text>
        </VStack>
        <VStack gap={"24px"}>
          <Image src={ModernBuildingIcon} alt="Um prédio moderno e alto" />
          <Text fontWeight={600} color={"darkText.500"}>
            moderno
          </Text>
        </VStack>
        <VStack gap={"24px"}>
          <Image src={ClassicalBuildingIcon} alt="Uma construção clássica" />
          <Text fontWeight={600} color={"darkText.500"}>
            clássico
          </Text>
        </VStack>
        <VStack gap={"24px"}>
          <Image src={EarthSvgIcon} alt="O planeta Terra" />
          <Text fontWeight={600} color={"darkText.500"}>
            e mais...
          </Text>
        </VStack>
      </HStack>

      <Flex justify={"center"}>
        <Divider borderColor={"darkText.400"} maxW={"90px"} border={"2px"} />
      </Flex>

      <VStack mt={"52px"}>
        <Box color={"darkText.500"} fontSize={"36px"}>
          <Text textAlign={"center"} fontWeight={500}>
            Vamos nessa?
          </Text>
          <Text textAlign={"center"} fontWeight={500}>
            Então escolha seu continente
          </Text>
        </Box>

        <Flex w={"80vw"} h={"450px"} mt={"52px"} mb={"48px"}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{}}
            pagination={{ clickable: true }}
            spaceBetween={50}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {isFetching ? (
              <Spinner color="hightlight.800" size={"lg"} />
            ) : (
              continents.map((continent) => (
                <SwiperSlide key={continent.alias}>
                  <Box h={"100%"} background={"blackAlpha.900"}>
                    <Link href={continent.alias}>
                      <VStack
                        h={"100%"}
                        justify={"center"}
                        bgImage={`url(${continent.presentation_banner})`}
                        bgRepeat={"no-repeat"}
                        bgSize={"cover"}
                        bgPosition={"center"}
                      >
                        <Box
                          w={"100%"}
                          h={"100%"}
                          background={"black.50"}
                        ></Box>
                        <Box position={"absolute"} zIndex={20}>
                          <Text
                            fontWeight={"bold"}
                            fontSize={48}
                            color={"lightText.900"}
                            align={"center"}
                          >
                            {continent.continent_name}
                          </Text>
                          <Text
                            fontSize={24}
                            color={"lightText.900"}
                            align={"center"}
                          >
                            {continent.decoy}
                          </Text>
                        </Box>
                      </VStack>
                    </Link>
                  </Box>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </Flex>
      </VStack>
    </Box>
  );
}
