'use client'
import {useContext} from "react";
import {ThemeModeContext} from "@/app/theme";

export const useThemeModeToggle = () => useContext(ThemeModeContext);