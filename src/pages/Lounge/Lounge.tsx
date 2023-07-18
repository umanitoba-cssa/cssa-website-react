import { AspectRatio, Box, Divider, Heading, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { PageLayout } from "../../containers/PageLayout/PageLayout";

interface ICanteenItem {
    Items: string;
    ["Sale Price"]: string;
    Category: string;
}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

export const Lounge = () => {
    const { readString } = usePapaParse();

    const [menu, setMenu] = useState<Record<string, ICanteenItem[]>>();

    // this grabs the canteen csv export and groups together the categories
    // using the papaparse library and above utility function.
    // the important bit: column order must be Items, Sale Price, Category
    useEffect(() => {
        fetch('/data/canteen.csv')
            .then(response => response.text())
            .then(text => {
                readString(text, {
                    worker: true,
                    header: true,
                    complete: (results) => {
                        console.log(results.data)
                        const grouped = groupBy(results.data as ICanteenItem[], (item: ICanteenItem) => item.Category);
                        setMenu(grouped);
                    }
                });
            })
            .catch(error => console.error(error));
    }, [readString]);

    const menuItems = menu && Object.keys(menu).map((category, index) => {
        const items = menu[category].map((item, index) => {
            return (
                <Tr key={item.Items}>
                    <Td>{item.Items}</Td>
                    <Td isNumeric>{item["Sale Price"]}</Td>
                </Tr>
            )
        });

        return (
            <Box key={category} marginBottom='2rem'>
                <Heading as='h2' fontSize={'3xl'}>{category}</Heading>
                <Divider marginBottom={'1rem'} marginTop={'1rem'}/>
                <Table size={'sm'} variant='striped' colorScheme='blue' key={category}>
                    <Tbody key={category}>
                        {items}
                    </Tbody>
                </Table>
            </Box>
        )
    });

    return (
        <PageLayout title="Lounge" image="/img/backgrounds/lounge.jpg">
            <DividerHeading title="Lounge location" />
            <Text marginBottom={3}>You can find our lounge at EITC E1-586.</Text>
            <AspectRatio ratio={16 / 9} marginBottom={3}>
                <iframe src="https://www.youtube-nocookie.com/embed/Eek6S5fP5sg?mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </AspectRatio>
            <DividerHeading title="Lounge canteen menu" />
            {menuItems}
        </PageLayout>
    );
}