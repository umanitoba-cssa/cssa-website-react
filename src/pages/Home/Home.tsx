import { Divider, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { IconText } from "../../components/IconText/IconText";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { Teaser } from "../../components/Teaser/Teaser";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { BsInstagram, BsDiscord, BsFillEnvelopeFill } from "react-icons/bs";
import { EventCard } from "../../components/EventCard/EventCard";

export default class Overview extends React.Component {
    render() {
        return (
            <PageLayout title="Home" image="/img/backgrounds/home.jpg">
                <p>
                    The Computer Science Students’ Association (CSSA) is the 
                    official voice and community for computer science students 
                    at our university. We represent the interests and concerns 
                    of CS students to the CS department, the faculty of science,
                    and the university administration. We also organize events 
                    and activities for CS students to network, learn, and have 
                    fun. Join us and be part of a vibrant and diverse CS 
                    community!
                </p>
                <DividerHeading title='What we do'/>
                <Teaser title="Advocacy" image="/img/teasers/advocacy.jpg">
                    The CSSA is the official voice of computer science students 
                    at our university. We advocate for the interests and 
                    concerns of CS students to the CS department, the faculty of 
                    science, and the university administration. We work to 
                    ensure that CS students have a high-quality education and a 
                    positive academic experience. We also strive to improve the 
                    CS field and society by promoting diversity, inclusion, and 
                    equity in computing.
                </Teaser>
                <Teaser title="Community" image="/img/teasers/community.jpg">
                    The CSSA is a community of computer science students who 
                    love technology and learning. We help CS students connect 
                    with each other and with the CS field. We celebrate the 
                    diversity and achievements of our CS community. We also 
                    organize events and activities for CS students to network, 
                    learn, and have fun. Come join us and visit our CS lounge!
                </Teaser>
                <Teaser title="Support" image="/img/teasers/support.jpg">
                    The CSSA will empower the computer science student community 
                    with representation, resources, and opportunities to enhance 
                    their academic journey and their careers in the field of 
                    computing.
                </Teaser>
                <DividerHeading title='Events'/>
                {/* This should be dynamic! Hook up to GCalendar or something. Will look into it.*/}
                <SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4}} spacing={10} justifyContent='center'>
                    <EventCard title="CSSA Movie Night" image="/img/events/movienight.jpg" time="July 20, 5:00PM" location="Elizabeth Dafoe 160">
                        Join us for a movie night! Vote for the movie you want 
                        to watch on our Discord server.
                    </EventCard>
                    <EventCard title="CSSA General Meeting" image="/img/events/gm.jpg" time="August 3, 6:00PM" location="TBA">
                        Join us for our first general meeting of the year where 
                        we will discuss our constitution rewrite and upcoming 
                        events!
                    </EventCard>
                    <EventCard title="CSSA Annual General Meeting" image="/img/events/agm.jpg" time="September 14, 6:00PM" location="TBA">
                        Join us for our official Annual General Meeting where we
                        will vote on changes to our constitution and discuss
                        upcoming plans for the CSSA!
                    </EventCard>
                    <EventCard title="CSSA Capture the Flag" image="/img/events/ctf.jpg" time="September 30, 11:00AM" location="TBA">
                        Hack away in a high stakes game of Capture the Flag!
                        Compete in teams to solve challenges and win prizes!
                        Join us for our Mixer event to find a team!
                    </EventCard>
                </SimpleGrid>
            </PageLayout>
        );
    }
}