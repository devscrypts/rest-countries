"use client";
import React from "react";
import {AppBar, Box, styled, Toolbar, Typography} from "@mui/material";
import ThemeMode from "@/app/components/themeMode";

const Header = () => {
    return (
        <StyledAppBar>
            <Toolbar disableGutters sx={{width: "90%", margin: "auto"}}>
                <Title>Where in the world?</Title>

                <Box sx={{display: "flex", flex: 1}} />

                <ThemeMode />
            </Toolbar>
        </StyledAppBar>
    );
};

const StyledAppBar = styled(AppBar)(({theme}) => ({
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

const Title = styled(Typography)(({theme}) => ({
    ...theme.typography.h6,
    color: theme.palette.text.primary,
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
        ...theme.typography.subtitle1,
        fontWeight: 800
    }
}));

export default Header;
