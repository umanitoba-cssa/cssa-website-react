import { PageLayout } from "../../containers/PageLayout/PageLayout";

export const Contact = () => {
    const iframeStyles = {
        minHeight: '1500px',
        border: '1px solid gray'
    } as any;


    return (
        <PageLayout title={"Contact Us"} image={"/img/backgrounds/contact.jpg"}>
            <iframe title='Contact us form' style={iframeStyles} width='100%' src="https://forms.office.com/Pages/ResponsePage.aspx?id=C92AT4wzTE6KFJBEaWL3uMetWVcCpo5KtSmErSAZ7GlUM1JYMFNPNURWWENLSzFONE5ZWUlURzNZOC4u&embed=true"/>
        </PageLayout>
    );
}