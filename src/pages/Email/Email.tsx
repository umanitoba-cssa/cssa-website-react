import React from "react";
// import { table, td, td } from "@chakra-ui/react";
// import { Navbar } from '../../components/Navbar/Navbar';

// export default function Email() {
export function Email() {
    return (
        <div>
        {/* <Navbar /> */}
        <table>
            <tr>
                <td style={{ borderRight: "2px solid whitesmoke", paddingRight: "1rem"}}>
                    <a href="https://https://umanitobacssa.ca/" style={{display:"inline-block;text-align:center"}}>
                        <img src="/img/logo.png" style={{display:"inline", width:"100px" }} alt="logo"/>
                    </a>
                </td>
                <td style={{paddingLeft:"1rem", lineHeight:"1.1"}}>
                    <h3 style={{fontWeight:"bold", fontSize: "1.5rem"}}>Your Name</h3>
                    <p style={{fontStyle: "italic"}}>Your Title</p>
                    <table style={{fontSize:"14px", lineHeight: "1.1"}}>
                        <tr>
                            {/* <td style={{ fontWeight: "bold" }}>Mobile</td> */}
                            <td style={{textAlign:"right"}}>
                                <a href="tel:+1(555)123-4567">
                                    {/* +1 (555) 123-4567 */}
                                </a><br />
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:"bold"}}>Email</td>
                            <td style={{textAlign:"right"}}><a href="mailto:cssa@umanitoba.ca">cssa@umanitoba.ca</a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:"bold",paddingRight:"8px"}}>Website</td>
                            <td style={{textAlign:"right"}}><a href="https://umanitobacssa.ca/">https://umanitobacssa.ca/</a></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td style={{paddingRight:"10px"}}><a href="https://www.instagram.com/cusecofficial/">
                                {/* <img style={{width:"20px"}} alt="instagram" src="/email/instagram.png" /> */}
                                </a></td>
                            <td style={{paddingRight:"10px"}}><a href="https://www.linkedin.com/company/cusec/">
                                {/* <img style={{width:"20px"}} alt="linkedin" src="/email/linkedin.png" /> */}
                                </a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </div>
        );
    }