import { Box, Heading } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
const LoginScreen = () => {
  return (
    <Box>
      <Box
        width={["90%", "90%", "30%"]}
        height={"max-content"}
        ml={"auto"}
        mr={"auto"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        bgColor={"#7D7C7C"}
        rounded={5}
        mt={10}
        color={"black"}
      >
        <Heading
          as="h1"
          fontSize="5rem"
          letterSpacing={5}
          fontFamily="'Long Cang', cursive"
        >
          LOGIN
        </Heading>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginScreen;
