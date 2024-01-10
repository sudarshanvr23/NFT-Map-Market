import { useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Container, Heading, Stack, Button, Flex } from "@chakra-ui/react";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const Home: NextPage = () => {
  const address = useAddress();

  if(!address) {
    return (
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Heading>Geo Monuments</Heading>
      </div>
    )
  }
  return (
    <Container maxW={"1200px"}>
      <Flex h={"20vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Geo Monuments</Heading>
          <Button as={NextLink} href='/buy'>
            Shop world
          </Button>
        </Stack>
      </Flex>
      <main>
        <MapWithNoSSR />
      </main>
    </Container>
  );
};

export default Home;
