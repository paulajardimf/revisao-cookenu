import React from "react";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("cookenu-token");
    goToLoginPage(navigate);
  };

  return (
    <Flex
      h={20}
      justifyContent={"end"}
      alignItems={"center"}
      bg={"gray.400"}
      paddingInline={8}
    >
      <Button onClick={logout} colorScheme="red" textColor="white">
        Deslogar
      </Button>
    </Flex>
  );
};

export default Header;
