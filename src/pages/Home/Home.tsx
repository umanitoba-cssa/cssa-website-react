import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { IconText } from "../../components/IconText/IconText";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { Teaser } from "../../components/Teaser/Teaser";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { EventCard } from "../../components/EventCard/EventCard";

interface IEventData {
    title: string;
    image: string;
    time: string;
    location: string;
    to?: string;
    description: string;
}

export const Home = () => {
    const [events, setEvents] = useState<IEventData[]>([]);

    useEffect(() => {
        fetch('/data/events.json')
            .then(response => response.json())
            .then(json => setEvents(json))
            .catch(error => console.error(error));
    }, []);

    const eventCards = events.map((event, index) => {
        return (
            <EventCard key={index} title={event.title} image={event.image} time={event.time} location={event.location} to={event.to}>
                {event.description}
            </EventCard>
        );
    });


    return (
        <PageLayout title="Home" image="/img/backgrounds/home.jpg">
            <Text>
                The Computer Science Students’ Association (CSSA) is the
                official voice and community for computer science students
                at our university. We represent the interests and concerns
                of CS students to the CS department, the faculty of science,
                and the university administration. We also organize events
                and activities for CS students to network, learn, and have
                fun. Join us and be part of a vibrant and diverse CS
                community!
            </Text>
            <DividerHeading title='What we do' />
            <Teaser title="Advocacy" image="/img/teasers/advocacy.jpg">
                <Text>
                    The CSSA is the official voice of computer science students
                    at our university. We advocate for the interests and
                    concerns of CS students to the CS department, the faculty of
                    science, and the university administration. We work to
                    ensure that CS students have a high-quality education and a
                    positive academic experience. We also strive to improve the
                    CS field and society by promoting diversity, inclusion, and
                    equity in computing.
                </Text>
            </Teaser>
            <Teaser title="Community" image="/img/teasers/community.jpg">
                <Text>
                    The CSSA is a community of computer science students who
                    love technology and learning. We help CS students connect
                    with each other and with the CS field. We celebrate the
                    diversity and achievements of our CS community. We also
                    organize events and activities for CS students to network,
                    learn, and have fun. Come join us and visit our CS lounge!
                </Text>
            </Teaser>
            <Teaser title="Support" image="/img/teasers/support.jpg">
                <Text>
                    The CSSA will empower the computer science student community
                    with representation, resources, and opportunities to enhance
                    their academic journey and their careers in the field of
                    computing.
                </Text>
            </Teaser>
            <DividerHeading title='Events' />
            {/* This should be dynamic! Hook up to GCalendar or something. Will look into it.*/}
            <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={10} justifyContent='center'>
                {eventCards}
            </SimpleGrid>
        </PageLayout>
    );
}