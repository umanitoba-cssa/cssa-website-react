import { Box, Divider, HStack, Image, Link, SimpleGrid, Spacer, VStack, Wrap } from "@chakra-ui/react";
import { BsDiscord, BsFillEnvelopeFill, BsGithub, BsInstagram } from "react-icons/bs";
import { IconText } from "../IconText/IconText";
import './Footer.scss'

export const Footer = () => {
    //im sorry responsive footers are hideous
    const socials = [
        (<IconText key='discord' to="https://forms.office.com/r/MV7BBDBRE0" icon={BsDiscord}>Discord Sign-up</IconText>),
        (<IconText key='instagram' to="https://instagram.com/umanitobacssa" icon={BsInstagram}>@umanitobacssa</IconText>),
        (<IconText key='email' to="mailto:cssa@cs.umanitoba.ca" icon={BsFillEnvelopeFill}>cssa@cs.umanitoba.ca</IconText>),
        (<IconText key='github' to="https://github.com/umanitoba-cssa" icon={BsGithub}>@umanitoba-cssa</IconText>)
    ]
    return (
        <>
            <Divider margin={'2rem 0'} />
            <Box className="xl-only">
                <HStack>
                    <VStack alignItems={'left'}>
                        <SimpleGrid columns={2} spacing={4}>
                            {socials}
                        </SimpleGrid>
                    </VStack>
                    <Spacer />
                    <VStack alignItems={'right'}>
                        <HStack>
                            <Box fontSize={'sm'}>© Copyright 2023 Computer Science Students' Association</Box>
                            <Spacer />
                            <Link margin='0' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                <Image alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                            </Link>
                        </HStack>
                        <Box fontSize={'sm'}>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></Box>
                    </VStack>
                </HStack>
            </Box>
            <Box className="medium-only">
                <VStack alignItems={'center'}>
                    <Wrap spacing={4} justify='center'>
                        {socials}
                    </Wrap>
                    <HStack paddingTop={'1rem'}>
                        <Box fontSize={'sm'}>© Copyright 2023 Computer Science Students' Association</Box>
                        <Spacer />
                        <Link margin='0' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            <Image alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                        </Link>
                    </HStack>
                    <Box textAlign={'center'} fontSize={'sm'}>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></Box>
                </VStack>
            </Box>
            <Box className="small-only">
                <VStack spacing={4} alignItems='left'>
                    {socials}
                    <Box fontSize={'sm'}>© Copyright 2023 Computer Science Students' Association</Box>
                    <Box fontSize={'sm'}>This work is licensed under a <Link rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</Link></Box>
                    <Link marginTop={'4'} minWidth={'7rem'} margin='0' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                        <Image marginTop={'4'} alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                    </Link>
                </VStack>
            </Box>
        </>
    )
}