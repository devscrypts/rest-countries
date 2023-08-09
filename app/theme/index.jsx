'use client';
import React, {useState, createContext, useMemo} from "react";
import {
    createTheme
} from "@mui/material/styles";
import palette from "./palette";
import {typography} from "./typography";
import {breakpoints} from "./breakpoints";
import Button from "./overrides/button";
import {CssBaseline, ThemeProvider} from "@mui/material";

export const ThemeModeContext = createContext({
    toggleThemeMode: () => {
    }
})

const ThemeConfig = ({children}) => {

    const [mode, setMode] = useState('light');

    const colorMode = useMemo(() => ({
        toggleThemeMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }),[])

    const themeOptions = useMemo(
        () => ({
            palette: mode === "light"
                ? {...palette.light, mode}
                : {...palette.dark, mode},
            typography,
            breakpoints
        }),
        [mode]
    );

    const theme = createTheme(themeOptions);
    theme.components = Button(theme);

    return (
        <ThemeModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

export default ThemeConfig;
