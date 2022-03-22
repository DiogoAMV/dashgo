import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        flexDir="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>
        <Button size="lg" type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
