import { HStack, VStack, Text } from "@chakra-ui/react";

import Image from "next/image";
import ClassicalBuildingIcon from "public/classical_building.svg";
import CocktailIcon from "public/cocktail.svg";
import EarthSvgIcon from "public/earth.svg";
import ModernBuildingIcon from "public/modern_building.svg";
import SurfIcon from "public/surf.svg";

export function Decoy() {
  return (
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
  );
}
