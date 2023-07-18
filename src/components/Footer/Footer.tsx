import { Box, Divider, HStack, Image, Link, SimpleGrid, Spacer, VStack, Wrap } from "@chakra-ui/react";
import { BsDiscord, BsFillEnvelopeFill, BsGithub, BsInstagram } from "react-icons/bs";
import { IconText } from "../IconText/IconText";
import './Footer.scss'

export const Footer = () => {
    //im sorry responsive footers are hideous
    return (
        <>
            <Divider margin={'2rem 0'} />
            <Box className="xl-only">
                <HStack>
                    <VStack alignItems={'left'}>
                        <SimpleGrid columns={2} spacing={4}>
                            <IconText icon={BsDiscord} title="Discord">Discord Sign-up</IconText>
                            <IconText icon={BsInstagram} title="Instagram">@umcssa</IconText>
                            <IconText icon={BsGithub} title="Email">@umanitobacssa</IconText>
                            <IconText icon={BsFillEnvelopeFill} title="Email">cssa@umanitoba.ca</IconText>
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
                        <IconText icon={BsDiscord} title="Discord">Discord Sign-up</IconText>
                        <IconText icon={BsInstagram} title="Instagram">@umcssa</IconText>
                        <IconText icon={BsGithub} title="Email">@umanitobacssa</IconText>
                        <IconText icon={BsFillEnvelopeFill} title="Email">cssa@umanitoba.ca</IconText>
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
            <VStack className="small-only" spacing={4}>
                <IconText icon={BsDiscord} title="Discord">Discord Sign-up</IconText>
                <IconText icon={BsInstagram} title="Instagram">@umcssa</IconText>
                <IconText icon={BsGithub} title="Email">@umanitobacssa</IconText>
                <IconText icon={BsFillEnvelopeFill} title="Email">cssa@umanitoba.ca</IconText>
                <Box fontSize={'sm'}>© Copyright 2023 Computer Science Students' Association</Box>
                <Box fontSize={'sm'}>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></Box>
                <Link marginTop={'4'} minWidth={'7rem'} margin='0' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    <Image marginTop={'4'} alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                </Link>
            </VStack>
        </>
    )
}