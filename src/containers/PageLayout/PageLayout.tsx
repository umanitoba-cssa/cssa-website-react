import { Box, Container, Divider, Heading, HStack, Image, Link, SimpleGrid, Spacer, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react"
import { BsDiscord, BsFillEnvelopeFill, BsGithub, BsInstagram } from "react-icons/bs";
import { Footer } from "../../components/Footer/Footer";
import { IconText } from "../../components/IconText/IconText";
import './PageLayout.scss'

interface IPageLayout {
    title: string;
    children?: React.ReactNode;
    image: string;
}

export const PageLayout = observer(({title, children, image}: IPageLayout) => {
    return (
        <Box className="pagelayout">
            <Box className="desktop-only">
                <Box width="100%" height={"500px"} backgroundImage={image} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundPosition={"center"}>
                    <Box width={"100%"} height={"100%"} backgroundColor={"rgba(0,0,0,0.3)"}>
                        <Container paddingTop={"3rem"} maxW={"container.xl"}>
                            <Heading fontSize={"6xl"} borderLeft={"4px solid #FDB515"} padding={"2rem"}>{title}</Heading>
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Box className="mobile-only">
                <Heading fontSize={"3xl"} padding={"10px"}>{title}</Heading>
                <Box width="100%" height={"10rem"} backgroundImage={image} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundPosition={"center"}></Box>
            </Box>

            <Container maxW={"container.xl"} padding="2rem 0">
                {children}
                <Footer/>
            </Container>
            
        </Box>
    )
})