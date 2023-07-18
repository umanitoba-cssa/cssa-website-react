import { Box, Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IIconCard {
    icon: any;
    to?: string;
}

export const IconText = ({ icon, to, children }: PropsWithChildren<IIconCard>) => {
    const content = (
        <HStack alignItems={'center'} justifyContent='middle'>
            <Icon w={8} h={10} as={icon} />
            <Box fontSize='lg' margin={0}>{children}</Box>
        </HStack>
    )

    return to ? (
        <Link href={to}>
            {content}
        </Link>
    ) : (
        <Box>
            {content}
        </Box>
    )
}