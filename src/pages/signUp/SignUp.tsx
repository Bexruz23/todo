import { Text, Title } from "@mantine/core";
import Layout from "../../shared/layout/Layout";
import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Button, Box } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const history = useNavigate();
  const form = useForm({
    validateInputOnChange: ["name", "last_name", "password", "confirmPassword"],
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      age: 0,
      password: "",
      confirmPassword: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      last_name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value < 8 ? "You must be at least 18 to register" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <Layout>
      <Title order={1}>Sign up</Title>
      <Box maw={340} mx="auto">
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            mt="sm"
            placeholder="First name"
            {...form.getInputProps("name")}
          />
          <TextInput
            mt="sm"
            placeholder="Last name"
            {...form.getInputProps("last_name")}
          />
          <TextInput
            mt="sm"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mt="sm"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            mt="sm"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
          <Button
            mt="sm"
            type="submit"
            onClick={() => {
              history("");
            }}
            fullWidth
            variant="filled"
            color="lime"
          >
            Sign In
          </Button>

          <Text ta={"center"} style={{ paddingTop: "30px" }}>
            Don't have an account? <Link to="/signIn">Sign In</Link>
          </Text>
        </form>
      </Box>
    </Layout>
  );
}
