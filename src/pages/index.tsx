import { Box, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import AirplaneIcon from "public/airplane.svg";
import ClassicalBuildingIcon from "public/classical_building.svg";
import CocktailIcon from "public/cocktail.svg";
import EarthSvgIcon from "public/earth.svg";
import Logo from "public/logo.svg";
import ModernBuildingIcon from "public/modern_building.svg";
import SurfIcon from "public/surf.svg";
import { api } from "@/services/api";
import { useState } from "react";
import Link from "next/link";
import { color } from "framer-motion";

// CHECKPOINT
// TODO: : Start build layout
// TODO: : Add responsiviness
// TODO: : Fetch API

export default function Home() {
  const [continents, setContinents] = useState([]);
  async function getContinents() {
    const {
      data: { continents },
    } = await api.get("continents", {
      // params: { sortedAttr: true },
    });

    return continents;
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

        <Flex w={"80vw"} h={"450px"} mt={"52px"}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{}}
            pagination={{ clickable: true }}
            spaceBetween={50}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* {continents?.map((continent) => (
              <SwiperSlide key={continent.alias}>
                {continent.continent_name}
              </SwiperSlide>
            ))} */}
            <SwiperSlide>
              <Link href={"google.com"}>
                <VStack
                  h={"100%"}
                  justify={"center"}
                  bgImage={"url('background_at_night.png')"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  bgPosition={"center"}
                >
                  <Text
                    fontWeight={"bold"}
                    fontSize={48}
                    color={"lightText.900"}
                  >
                    Europa
                  </Text>
                  <Text fontSize={24} color={"lightText.900"}>
                    O continente mais antigo
                  </Text>
                </VStack>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"google.com"}>
                <VStack
                  h={"100%"}
                  justify={"center"}
                  bgImage={"url('background_at_night.png')"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                >
                  <Text
                    fontWeight={"bold"}
                    fontSize={48}
                    color={"lightText.900"}
                  >
                    Europa
                  </Text>
                  <Text fontSize={24} color={"lightText.900"}>
                    O continente mais antigo
                  </Text>
                </VStack>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"google.com"}>
                <VStack
                  h={"100%"}
                  justify={"center"}
                  bgImage={"url('background_at_night.png')"}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                >
                  <Text
                    fontWeight={"bold"}
                    fontSize={48}
                    color={"lightText.900"}
                  >
                    Europa
                  </Text>
                  <Text fontSize={24} color={"lightText.900"}>
                    O continente mais antigo
                  </Text>
                </VStack>
              </Link>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </VStack>
    </Box>
  );
}
