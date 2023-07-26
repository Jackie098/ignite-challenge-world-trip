import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { api } from "@/services/api";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import Logo from "public/logo.svg";
import EarthSvgIcon from "public/earth.svg";
import ClassicalBuildingIcon from "public/classical_building.svg";
import ModernBuildingIcon from "public/modern_building.svg";
import SurfIcon from "public/surf.svg";
import CocktailIcon from "public/cocktail.svg";
import AirplaneIcon from "public/airplane.svg";
import BackgroundBanner from "public/background_at_night.png";

// CHECKPOINT
// TODO: : Start build layout
// TODO: : Add responsiviness
// TODO: : Fetch API

export default function Home() {
  // async function getContinents() {
  //   const { data } = await api.get("continents/america_do_sul", {
  //     // params: { sortedAttr: true },
  //   });

  //   console.log("data", data);
  // }

  // getContinents();

  return (
    <Box w={"100%"} h={"100vh"}>
      <Flex
        w={"100vw"}
        h={100}
        // background={"black"}
        alignItems={"center"}
        justify={"center"}
      >
        <Image src={Logo} alt="Logo" width={180} height={45} />
      </Flex>

      <Flex bgColor={"blue.900"} h={"100%"} maxH={348} justify={"space-around"}>
        <Flex bgColor={"red.500"} flexDir={"column"} gap={"20px"} maxW={524}>
          <Text color={"white.900"} fontSize={36} fontWeight={600}>
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text textColor={""} fontSize={20}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image
          src={AirplaneIcon}
          alt="Yellow plane between clouds"
          width={415}
          height={270}
        />
      </Flex>

      <HStack>
        <VStack>
          <Image src={CocktailIcon} alt="Um drink com limão" />
          <Text>vida noturna</Text>
        </VStack>
        <VStack>
          <Image src={SurfIcon} alt="Uma prancha de surf e o sol de fundo" />
          <Text>praia</Text>
        </VStack>
        <VStack>
          <Image src={ModernBuildingIcon} alt="Um prédio moderno e alto" />
          <Text>moderno</Text>
        </VStack>
        <VStack>
          <Image src={ClassicalBuildingIcon} alt="Uma construção clássica" />
          <Text>clássico</Text>
        </VStack>
        <VStack>
          <Image src={EarthSvgIcon} alt="O planeta Terra" />
          <Text>e mais...</Text>
        </VStack>
      </HStack>

      <VStack>
        <Box>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>

        {/* Swiper */}
      </VStack>
    </Box>
  );
}
