import { Title, Stack, Text, Button } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../shared/layout/Layout";

export default function Welcome() {
  const history = useNavigate();
  return (
    <Layout>
      <Stack align="center">
        <Title order={3}>ToDo Py</Title>
        <Text>
          Stay Organized, Get Things Done: Your Ultimate To-Do List App. A todo
          list app is a digital task management tool designed to help users
          organize and prioritize their daily activities and responsibilities.
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
    </Layout>
  );
}
