import { Box, Flex, VStack, Text, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { UseQueryResult } from "react-query";

// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

type Continent = {
  continent_name: string;
  alias: string;
  decoy: string;
  presentation_banner: string;
};

interface SwiperPresentationProps {
  queryData: Pick<
    UseQueryResult<Continent[], unknown>,
    "data" | "status" | "isFetching"
  >;
}

export function SwiperPresentation({
  queryData: { isFetching, data: continents },
}: SwiperPresentationProps) {
  console.log("continents - comp", continents);

  return (
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
        {/* {isFetching ? (
          <Flex w={"100%"} align={"center"} justify={"center"}>
            <Spinner color="dartText.500" size={"lg"} />
          </Flex>
        ) : ( */}
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
          {continents!.map((continent) => (
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
                    <Box w={"100%"} h={"100%"} background={"black.50"}></Box>
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
          ))}
          {/* <SwiperSlide>2</SwiperSlide> */}
        </Swiper>
        {/* ) */}
        {/* } */}
      </Flex>
    </VStack>
  );
}
