import * as React from "react";
import logo from "./icons/logo.svg";
import { MainMenu, MainMenuButton } from "@epam/loveship";

export const AppHeader = () => {
    return (
        <MainMenu appLogoUrl={ logo }>
            <MainMenuButton caption='Home' link={ { pathname: '/' } } priority={ 1 } estimatedWidth={ 72 } />
            <MainMenuButton caption='Analytics' link={ { pathname: '/analytics' } } priority={ 2 } estimatedWidth={ 72 } />
        </MainMenu>
    )
}