import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { goToLoginPage } from "../routes/coordinator";

const Header = () => {
  const context = useContext(GlobalContext)
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("cookenu-token")
    context.setIsAuth(false)
    goToLoginPage(navigate)
    
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
