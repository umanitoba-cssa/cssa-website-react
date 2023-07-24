import { Link, Text } from "@chakra-ui/react"
import { PageLayout } from "../../containers/PageLayout/PageLayout"
import { DividerHeading } from "../../components/DividerHeading/DividerHeading"

export const Sponsors = () => {
    return <PageLayout title="Sponsor Us" image="img/backgrounds/sponsors.jpg">
        <DividerHeading title="Why Sponsor Us?" />
        <Text>
            Our events draw a diverse audience of potential customers, partners,
            and employees who are interested in pursuing a career in computer
            science. By sponsoring our events, your company can showcase its brand,
            products, and services to interested parties. You can also demonstrate
            your commitment to fostering a culture of innovation, learning, and
            community by helping us bring students these opportunities to develop
            their technical skills and connect with one another. You can help build
            the next generation of the computer science workforce by inspiring and
            empowering students to pursue their curiosity for computer science,
            further helping them discover or cultivate their passions in the field.
        </Text>
        <DividerHeading title="Contact Us"/>
        <Text>
            To inquire about sponsorships, please email us at <Link href="mailto:cssa@umanitoba.ca" color={"#fab416"}>cssa@umanitoba.ca</Link>.
        </Text>
    </PageLayout>
}