import { Box } from "@chakra-ui/react";
import { NavLink } from "../../containers/Router/NavLink"
import './NavbarButton.scss'

interface INavbarButton {
    to: string;
    label: string;
}

export const NavbarButton = ({to, label}: INavbarButton) => {
    return (
        <Box className="navbar-button-wrapper">
            <NavLink to={to}>
                <Box fontSize={30} className="navbar-button" height={'100%'} display='flex' flexDir={'column'} justifyContent={'center'}>
                    {label}
                </Box>
            </NavLink>
        </Box>
    )
}