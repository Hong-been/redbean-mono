import { Button, Flex, Heading, Link } from "@radix-ui/themes";

export default function Auth() {
  return (
    <Flex direction="column" p="3" gap={"4"} minHeight={"100vh"}>
      <Flex direction="column" flexGrow={"1"} align={"center"} justify="center" gap="4">
        <Heading>Sign up to Snow Step</Heading>
        <Link href='http://localhost:3000/auth/google'>
          <Button>Google Login</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
