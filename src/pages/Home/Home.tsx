import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { Teaser } from "../../components/Teaser/Teaser";
import { PageLayout } from "../../containers/PageLayout/PageLayout";

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
                    The CSSA hosts a variety of events throughout the year for 
                    CS students to connect, learn, and have fun. Some of our 
                    events include gamejams, coding competitions, workshops, 
                    social nights, and more. Whether you want to showcase your 
                    skills, meet new friends, or explore new opportunities, 
                    there is an event for you. Check out our social media for 
                    the latest updates on our events and how to join them!
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
                <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                    
                </SimpleGrid>
            </PageLayout>
        );
    }
}