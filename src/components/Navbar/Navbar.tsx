import { Box, Container, Flex, Heading, Icon, Image, Spacer } from "@chakra-ui/react";
import "./Navbar.scss";
import { NavbarButton } from "./NavbarButton";
import { FaBars } from "react-icons/fa";
import React from "react";
import { Routes } from "../../utils/Routes";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    
    const navbarButtons = Routes.map((page) => {
        return (
            <Box key={page.path} onClick={() => {setMenuOpen(false);}}>
                <NavbarButton key={page.title} to={page.path} label={page.title} />
            </Box>
        )
    });

    return (
        <>
            <Box className="desktop-only navbar" width="100%" backgroundColor='#020D1F'  color={'white'}>
                <Container maxW={"container.xl"} display='flex' flexDir='column' justifyContent={'center'} height={'100%'}>
                    <Box display='flex' flexDir='row'>
                        <Image height={'8rem'} src='/img/logo.png' alt="logo"/>
                        <Box marginLeft={'3rem'} display='flex' flexDir={'column'} justifyContent={'center'} >
                            <Heading marginBottom={'1rem'}>Computer Science Students' Association</Heading>
                            <Box display='flex' flexDir='row'>
                                {navbarButtons}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box className="mobile-only navbar" width="100%" backgroundColor='#020D1F' color={'white'}>
                <Flex flexDir='column' justifyContent={'center'}>
                    <Flex flexDir='row' padding="0.5rem" alignItems='center'>
                        <Box height={'4rem'}/>
                    </Flex>
                </Flex>
            </Box>
            <Box position="fixed" top={0} zIndex={100} className="mobile-only navbar" width="100%" backgroundColor='#020D1F'  color={'white'}>
                <Flex flexDir='column' justifyContent={'center'}>
                    <Flex flexDir='row' padding="0.5rem" alignItems='center'>
                        <Image height={'4rem'} src='/img/logo.png' alt="logo"/>
                        <Spacer/>
                        <Icon as={FaBars} w={8} h={8} onClick={() => setMenuOpen(!menuOpen)} />
                    </Flex>
                    <Box className={"navbar-buttons " + (menuOpen ? "show" : "")}>
                        <Flex flexDir='column' alignItems='center' paddingBottom={'1rem'}>{navbarButtons}</Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}