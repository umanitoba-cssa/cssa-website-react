import { Box } from "@chakra-ui/react";
import { Footer } from "../../components/Footer/Footer";
import IframeResizer from "iframe-resizer-react"

export const Contact = () => {
    return (
        <Box>
            <IframeResizer
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=C92AT4wzTE6KFJBEaWL3uMetWVcCpo5KtSmErSAZ7GlUM1JYMFNPNURWWENLSzFONE5ZWUlURzNZOC4u&embed=true"
                // Apparently the `width: "1px", minWidth: "100%"` is a workaround for iOS behaviour?
                style={{width: "1px", minWidth: "100%", maxHeight: "100vh"}}
            />
            <Footer/>
        </Box>
    );
}