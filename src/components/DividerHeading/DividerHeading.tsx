import { Box, Divider, Heading } from "@chakra-ui/react";

interface IDividerHeading {
    title: string;
}

export const DividerHeading = ({title}: IDividerHeading) => {
    return (
        <Box margin='3rem auto'>
            <Divider />
            <Heading paddingTop={'0.7rem'} borderTop='4px solid #FDB515' as='h1' w='fit-content'>{title}</Heading>
        </Box>
    )
}