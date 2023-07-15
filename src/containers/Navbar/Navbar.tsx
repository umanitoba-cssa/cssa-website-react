import { Box, Container, Heading, Image } from "@chakra-ui/react";
import "./Navbar.scss";
import { NavbarButton } from "./NavbarButton";

export const Navbar = () => {
    return (
        <>
            <Box className="navbar" width="100%" backgroundColor='#020D1F'  color={'white'}>
                <Container maxW={"container.xl"} display='flex' flexDir='column' justifyContent={'center'} height={'100%'}>
                    <Box display='flex' flexDir='row'>
                        <Image height={'8rem'} src='/img/logo.png' alt="logo"/>
                        <Box marginLeft={'3rem'} display='flex' flexDir={'column'} justifyContent={'center'} >
                            <Heading marginBottom={'1rem'}>Computer Science Students' Association</Heading>
                            <Box display='flex' flexDir='row'>
                                <NavbarButton to='/' label="Home" />
                                <NavbarButton to='/team' label="Team" />
                                <NavbarButton to='/resources' label="Resources" />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box >
        </>
    )
}