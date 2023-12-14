import {
  Container,
  Grid,
  Box,
  Flex,
  Image,
  Title,
  Stack,
  Text,
  Button,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

export default function Welcome() {
  const history = useNavigate();
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
                <Stack align="center">
                  <Title order={3}>ToDo Py</Title>
                  <Text>
                    Stay Organized, Get Things Done: Your Ultimate To-Do List
                    App. A todo list app is a digital task management tool
                    designed to help users organize and prioritize their daily
                    activities and responsibilities.
                  </Text>
                  <Button
                    onClick={() => {
                      history("/signUp");
                    }}
                    fullWidth
                    variant="filled"
                    color="lime"
                  >
                    Get Started
                  </Button>
                  <Text>
                    Already have an account? <Link to="/signIn">Sign In</Link>
                  </Text>
                </Stack>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
}
