"use client";

import React from "react";
import {Button, Stack, Typography, useTheme} from "@mui/material";
import {useThemeModeToggle} from "@/app/hooks/useThemeModeToggle";
import {Icon} from "@iconify/react";
import moonOutline from "@iconify/icons-ion/moon-outline";
import moonSharp from "@iconify/icons-ion/moon-sharp";

const ThemeMode = () => {
    const colorMode = useThemeModeToggle();
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";

    return (
        <Button onClick={colorMode.toggleThemeMode}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Icon
                    icon={isLight ? moonOutline : moonSharp}
                    color={theme.palette.text.primary}
                />
                <Typography sx={{color: "text.primary", fontWeight: 600}}>
                    Dark Mode
                </Typography>
            </Stack>
        </Button>
    );
};

export default ThemeMode;
