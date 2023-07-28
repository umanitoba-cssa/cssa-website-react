import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { Teaser } from "../../components/Teaser/Teaser";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { EventCard } from "../../components/EventCard/EventCard";

interface IEventData {
    title: string;
    image: string;
    start: string;
    end: string;
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

    const eventCards = events.filter((event) => {
        return new Date(event.end) > new Date();
    }).map((event, index) => {
        return (
            <EventCard key={index} title={event.title} image={event.image} time={event.start} location={event.location} to={event.to}>
                {event.description}
            </EventCard>
        );
    });

    return (
        <PageLayout title="Home" image="/img/backgrounds/home.jpg">
            <Text>
                The Computer Science Students’ Association (CSSA) is the
                official voice and community for computer science students
                at the University of Manitoba. We represent the interests and concerns
                of computer science students to the Computer Science department, the Faculty of Science,
                university administration and any outside organizations. We organize events
                and activities for students to network, learn, and have
                fun. Join us and be part of a vibrant and diverse computer science
                community!
            </Text>
            <DividerHeading title='What we do' />
            <Teaser title="Advocacy" image="/img/teasers/advocacy2.jpg">
                <Text>
                    The CSSA is the official voice of computer science students
                    at the University of Manitoba. We advocate for the interests and
                    concerns of computer science students to the Department of Computer Science, the Faculty of
                    Science, and the university administration. We work to
                    ensure that computer science students have a high-quality education and a
                    positive academic experience. We strive to improve the
                    field by promoting diversity, inclusion, and
                    equity in computing.
                </Text>
            </Teaser>
            <Teaser title="Community" image="/img/teasers/community.jpg">
                <Text>
                    We are a community of computer science students who
                    love technology and learning. We help students connect
                    with each other and the industry. We celebrate the
                    diversity and achievements of our community. We also
                    organize events and activities for computer science students to network,
                    where they can build relationships that last 
                    beyond their university career. Come join us and visit the
                    computer science lounge!
                </Text>
            </Teaser>
            <Teaser title="Support" image="/img/teasers/support.jpg">
                <Text>
                    Through representation, resources, and opportunities, the 
                    CSSA will empower the computer science student community 
                    to enhance their academic journey and their careers in the field of 
                    computing. We help computer science students with their academic 
                    challenges and questions, and also help students with 
                    their career plans and choices. We have resources and people 
                    who can assist students with their needs and interests.
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