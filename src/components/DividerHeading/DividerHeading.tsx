import { Box, Divider, Heading } from "@chakra-ui/react";

interface INavbarButton {
    title: string;
}

export const DividerHeading = ({title}: INavbarButton) => {
    return (
        <Box marginTop='3rem'>
            <Divider />
            <Heading paddingTop={'0.7rem'} borderTop='4px solid #FDB515' as='h1' w='fit-content'>{title}</Heading>
        </Box>
    )
}