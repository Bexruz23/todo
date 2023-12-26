import {
  Button,
  Group,
  PasswordInput,
  Title,
  Text,
  TextInput,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import Layout from "../../shared/layout/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const history = useNavigate();
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Kiritilgan email xato!",
      password: (value) =>
        value.length < 8 ? "Parol 8 ta belgidan kam bo'lmasligi lozim!" : null,
    },
  });

  return (
    <Layout>
      <Title order={1}>Sign In</Title>

      <Box style={{ paddingTop: "30px" }} maw={340} mx="auto">
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            placeholder="email.example@gmail.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            placeholder="**********"
            {...form.getInputProps("password")}
          />

          <Button
            type="submit"
            onClick={() => {
              history("/signIn");
            }}
            fullWidth
            variant="filled"
            color="lime"
          >
            Sign In
          </Button>
        </form>
      </Box>

      <Group style={{ paddingTop: "30px" }} justify="space-between">
        <Button leftSection={<FcGoogle />} variant="light">
          Google
        </Button>

        <Button rightSection={<FaFacebook />} variant="light">
          Facebook
        </Button>
      </Group>

      <Text ta={"center"} style={{ paddingTop: "30px" }}>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </Text>
    </Layout>
  );
}
