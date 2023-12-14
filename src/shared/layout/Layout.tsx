import {
  Container,
  Grid,
  Box,
  Flex,
  Image,

} from "@mantine/core";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <Container
      style={{ paddingLeft: "70px", paddingRight: "70px" }}
      size="md"
      fluid
      bg="gray"
      h="100vh"
    >
      <Flex
        h="100%"
        direction={{
          base: "column",
        }}
        justify={{ sm: "center" }}
      >
        <Grid>
          <Grid.Col span={6}>
            <Image
              fit="cover"
              h="100%"
              w="auto"
              radius="md"
              src="../../../img/Rectangle 1.png"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Box
              style={{
                background: "white",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              w="100%"
              h="100%"
            >
              <Box h="50%" w="50%">
                {children}
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
}
