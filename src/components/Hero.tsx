import { Flex, Text } from "@chakra-ui/react";

import Image from "next/image";
import AirplaneIcon from "public/airplane.svg";

export function Hero() {
  return (
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
  );
}
