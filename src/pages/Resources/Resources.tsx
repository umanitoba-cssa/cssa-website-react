import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import { useEffect, useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Tab, Tabs, TabPanel, TabPanels, TabList, Text, Heading, Link, SimpleGrid } from "@chakra-ui/react"
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";

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

export const Resources = () => {
    const [courses, setCourseTabs] = useState<ICoursePlaylists | undefined>();
    useEffect(() => {
        fetch('/data/playlists.json')
            .then(response => response.json())
            .then(json => setCourseTabs(json))
            .catch(error => console.error(error));
    }, []);

    const courseTabs = courses?.collection.map((category, index) => {
        return (<Tab key={index}>{category.category}</Tab>)
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

    return (
        <PageLayout title="Resources" image="/img/backgrounds/resources.png">
            <DividerHeading title="Degree Resources"/>
                <Text>
                    Questions about courses, programs, or co-op? Try these!
                </Text>
                <SimpleGrid gap={2} margin={5} >
                    {resourceBoxes}
                </SimpleGrid>
            <DividerHeading title="Course Help"/>
                <Text>
                    YouTube lectures and course resources from UofM profs.
                    <br/>
                    <Link href="mailto:cssa@umanitoba.ca" color={"#fab416"}>See one that we missed? Send us an email!</Link>
                </Text>

                <Tabs marginTop={5}>
                    <TabList>
                        {courseTabs}
                    </TabList>
                    <TabPanels>
                        {courseTabPanels}
                    </TabPanels>
                </Tabs>
        </PageLayout>
    );
}