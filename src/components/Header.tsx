import { Flex } from "@chakra-ui/react";
import Image from "next/image";

import Logo from "public/logo.svg";

export function Header() {
  return (
    <Flex w={"100vw"} h={100} alignItems={"center"} justify={"center"}>
      <Image src={Logo} alt="Logo" width={180} height={45} />
    </Flex>
  );
}
