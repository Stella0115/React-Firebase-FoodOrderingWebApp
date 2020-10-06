import React from "react";
import styled from 'styled-components';
import {foodRed} from "../Styles/colors";
import {Title} from "../Styles/title";

const NavbarStyled = styled.div`
    background-color: ${foodRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 2px black;
`


const UserStatus = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 30px;
`

const LoginButton = styled.span`
    cursor: pointer;
`


export function Navbar({login, loggedIn, logout}){
    return <NavbarStyled>
        <Logo>
            Welcome to PizzaHut <span role="img" aria-label="sushi">🍕</span>
        </Logo>
        <UserStatus>
            {loggedIn !== 'loading'?
                (
                    <>
                    👤 {loggedIn ? "Logged In." : ""}
                       {loggedIn? (
                               <LoginButton onClick={logout}> Log Out </LoginButton>
                           ) : (<LoginButton onClick={login}> Log In / Sign up</LoginButton>
                           )}
                    </>
                ) : (
                    "loading..."
                )}
        </UserStatus>
    </NavbarStyled>

}