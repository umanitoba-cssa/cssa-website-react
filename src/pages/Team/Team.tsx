import { Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DividerHeading } from "../../components/DividerHeading/DividerHeading";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { Text } from "@chakra-ui/react"


interface IProfile {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
    github?: string;
    website?: string;
    instagram?: string;
}

interface ITeam {
    execs: IProfile[];
}

    const iframeStyles = {
        minHeight: '1500px',
        border: '1px solid gray'
    } as any;

export const Team = () => {
    const [team, setTeam] = useState<ITeam | undefined>();

    useEffect(() => {
        fetch('/data/team.json')
            .then(response => response.json())
            .then(json => setTeam(json))
            .catch(error => console.error(error));
    }, []);

    const teamCards = team?.execs.map((profile, index) => {
        return (
            <ProfileCard
                key={profile.name} 
                name={profile.name}
                position={profile.position}
                image={profile.image}
                linkedin={profile.linkedin}
                github={profile.github}
                website={profile.website}
                instagram={profile.instagram}
            />
        );
    });

    return (
        <PageLayout title="Team" image="/img/backgrounds/team.png">
            <DividerHeading title="Executive Team"/>
            <Wrap justify={'center'} spacing={5}>
                {teamCards}
            </Wrap>

            <DividerHeading title="Councillor applications"/>
                <Text>
                    Volunteer for the CSSA using our form!
                </Text>
                <iframe title="Google Form" style={iframeStyles} width='100%' src="https://docs.google.com/forms/d/e/1FAIpQLSc1rSmphVcWbrER0zmroJHql6n7w5hpLSIDRHCZ6fSTMSqetA/viewform?embedded=true">Loading…</iframe>
        </PageLayout>
    );
}