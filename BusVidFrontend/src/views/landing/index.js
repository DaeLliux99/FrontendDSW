import React from "react";
import {
  Flex,
  Container,
  Button,
  Box,
  Stack,
  VStack,
  Link
} from "@chakra-ui/react"
import SignInView from "../SignInView";
import useModalButton from '../../hooks/useModalButton';

const LandingPage = () => { 
  const {buttonClicked ,handleModalOpen, isOpen, onClose} = useModalButton();
  const linkImagen = "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80')"
  return (
    <Container 
      bgImg={linkImagen} 
      bgRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center center center center"
      maxW="1000px"
      maxH="668px"
    >
      <Box 
        height="640px" 
        width="1000px" 
        marginLeft="auto" 
        marginRight="auto"
      > 
        <Box height="100px" width="300px" marginRight= "auto" marginLeft="auto" paddingTop="45%">
          <Stack padding = "2px">
            <Button>Compra tus boletos aqui!</Button>
            <Link
              padding = "15px"
              onClick = {handleModalOpen} 
              textAlign="center" 
              fontSize = "13px"
            >¿Eres empleado? Ingresa aqui</Link>
            {buttonClicked ? <SignInView isOpen={isOpen} onClose={onClose}/> : null}
          </Stack> 
        </Box>
      </Box>
    </Container>
)};
export default LandingPage;
