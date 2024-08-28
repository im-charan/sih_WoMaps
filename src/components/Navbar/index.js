import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/tracking" >
                        Tracking
                    </NavLink>
                    <NavLink to="/sitautions" activeStyle>
                        Situations
                    </NavLink>
                    <NavLink to="/report" activeStyle>
                        Report
                    </NavLink>
                    <NavLink to="/sos" activeStyle>
                        SoS
                    </NavLink>
                    <NavLink to="/settings" activeStyle>
                        Settings
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
