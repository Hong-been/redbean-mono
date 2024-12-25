import { Flex, Heading } from "@radix-ui/themes";
import { AuthButton } from './_components/AuthButton';
import { Header } from './_components/Header';

export default function Home() {
  return (
    <Flex direction="column" p="3" gap={"4"} minHeight={"100vh"}>
      <Header>
        <Flex>
          <AuthButton />
        </Flex>
      </Header>
      <Flex direction="column" flexGrow={"1"} align={"center"} justify="center" gap="4">
        <Heading size="8">쏟아지는 인풋, 흘려보내지 않도록.</Heading>
        <Heading size="3" as='h2'>여기서 당신의 배움을 정리하고, 나만의 성장 스토리를 만들어보세요.</Heading>
        <AuthButton />
      </Flex>
    </Flex>
  );
}
