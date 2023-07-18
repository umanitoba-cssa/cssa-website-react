import { Box, Heading, VStack, AspectRatio, Link, Icon, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";

interface IProfileCard {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
    github?: string;
    website?: string;
    instagram?: string;
}

export const ProfileCard = ({ name, position, image, linkedin, github, website, instagram }: IProfileCard) => {
    const linkedinElem = linkedin ? (<Link href={linkedin}><Icon as={BsLinkedin}></Icon></Link>) : null
    const githubElem = github ? (<Link href={github}><Icon as={BsGithub}></Icon></Link>) : null
    const websiteElem = website ? (<Link href={website}><Icon as={BiLinkAlt}></Icon></Link>) : null
    const instagramElem = instagram ? (<Link href={instagram}><Icon as={BsInstagram}></Icon></Link>) : null

    return (
        <Box border='1px solid #DBD4CC' borderRadius='1rem' overflow={'hidden'} textAlign="center">
            <VStack height='100%' alignItems={'left'}>
                <Box padding={5}>
                    <AspectRatio ratio={1/1} minW="197px" >
                        <Box backgroundImage={image} backgroundSize="cover" backgroundPosition={"center"} borderRadius="50%" />
                    </AspectRatio>
                </Box>
                <Box flexGrow={1} p='0rem 1rem 0.6rem 1rem' margin='0 !important'>
                    <Heading fontSize={'xl'} marginBottom='0.5rem'>{name}</Heading>
                    <Box fontSize='lg'>{position}</Box>
                    <Flex marginTop={'0.5rem'} flexDir={'row'} justifyContent='space-around'>
                        {linkedinElem}
                        {instagramElem}
                        {githubElem}
                        {websiteElem}
                    </Flex>
                </Box>
            </VStack>
        </Box>
    )
}