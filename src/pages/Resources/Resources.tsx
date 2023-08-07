import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { useEffect, useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Tab, Tabs, TabPanel, TabPanels, TabList, Text, Heading, Link, SimpleGrid, HStack } from "@chakra-ui/react"
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";
import { LinkIcon } from "@chakra-ui/icons";

interface IPlaylist {
    title: string;
    creator: string;
    playlistId: string;
    uniqueName: string;
}

interface IPlaylistCollection {
    category: string;
    playlists: IPlaylist[];
}

interface ICoursePlaylists {
    collection: IPlaylistCollection[];
}

interface IResource {
    title: string;
    desc: string;
    url: string;
}

interface IResourceList {
    resources: IResource[];
}

interface IArchive {
    title: string;
    date: string;
    url: string;
    filename: string;
}

interface IArchiveList {
    archives: IArchive[];
}

export const Resources = () => {
    const [courses, setCourseTabs] = useState<ICoursePlaylists | undefined>();
    useEffect(() => {
        fetch('/data/playlists.json')
            .then(response => response.json())
            .then(json => setCourseTabs(json))
            .catch(error => console.error(error));
    }, []);

    const courseTabs = courses?.collection.map((category, index) => {
        return (<Tab maxW='40vw' key={index}>{category.category}</Tab>)
    })
    const courseTabPanels = courses?.collection.map((category, tabIndex) => {
        const playlistCollections = category.playlists.map((playlist, plIndex) => {
            return (
                <AccordionItem
                    key={plIndex}
                    marginY={5}
                    border='1px solid #DBD4CC' 
                    borderRadius='1rem'
                >
                    <AccordionButton
                        gap={2}
                        paddingY={5}
                    >
                        <AccordionIcon/>
                        <Heading fontSize={'2xl'}>{playlist.title}</Heading>
                        <Box fontSize={'md'}>(by {playlist.creator})</Box>
                    </AccordionButton>
                    <AccordionPanel>
                        <YouTubePlaylist
                            apiKey={process.env.REACT_APP_YOUTUBE_API_KEY ?? ""}
                            playlistId={playlist.playlistId}
                            uniqueName={playlist.uniqueName}
                        />
                    </AccordionPanel>
                </AccordionItem>
            )
        });

        return (
            <TabPanel key={tabIndex}>
                <Accordion
                    allowToggle={true}
                >
                    {playlistCollections}
                </Accordion>
            </TabPanel>
        )
    });

    const [resourceList, setResourceList] = useState<IResourceList | undefined>();

    useEffect(() => {
        fetch('/data/degreeLinks.json')
            .then(response => response.json())
            .then(json => setResourceList(json))
            .catch(error => console.error(error));
    }, []);

    const resourceBoxes = resourceList?.resources.map((link, index) => {
        return (
            <ResourceCard key={index} title={link.title} desc={link.desc} url={link.url} />
        )
    });

    const [archiveList, setArchiveList] = useState<IArchiveList | undefined>();

    useEffect(() => {
        fetch('/data/archiveLinks.json')
            .then(response => response.json())
            .then(json => setArchiveList(json))
            .catch(error => console.error(error));
    }, []);

    const archiveItems = archiveList?.archives.map(item => {
        const dateText = new Date(item.date).toLocaleString('en-US', {dateStyle: 'long'})
        const transcriptUrl = `data/transcripts/${item.filename}.txt`
        return(
            <Box fontSize={'sm'}>
                <li>
                    <HStack>
                        <Heading fontSize={'md'}>{item.title} ({dateText})</Heading>
                        <LinkIcon/>
                        <Link href={item.url} isExternal>YouTube</Link>
                        <LinkIcon/>
                        <Link href={transcriptUrl} isExternal>View Transcript </Link>
                    </HStack>
                </li>
            </Box>
        )
    })

    return (
        <PageLayout title="Resources" image="/img/backgrounds/resources.png">
            <DividerHeading title="Degree Resources"/>
                <Text>
                    Questions about courses, programs, or Computer Science Co-op? Try these!
                </Text>
                <SimpleGrid gap={2} margin={5} >
                    {resourceBoxes}
                </SimpleGrid>
            <DividerHeading title="Course Help"/>
                <Text>
                    YouTube lectures and course resources from University of Manitoba professors.
                    <br/>
                    <Link href="mailto:cssa@umanitoba.ca" color={"#fab416"}>See one that we missed? Send us an email!</Link>
                </Text>

                <Tabs marginTop={5}>
                    <Box overflow='auto'>
                        <TabList w='max-content' minW='100%'>
                            {courseTabs}
                        </TabList>
                    </Box>
                    <TabPanels>
                        {courseTabPanels}
                    </TabPanels>
                </Tabs>
                
            <DividerHeading title="Meeting archives" />
                <Text>
                    Find recordings and transcripts of our general meetings.
                </Text>
                <SimpleGrid gap={2} margin={5}>
                    {archiveItems}
                </SimpleGrid>
        </PageLayout>
    );
}