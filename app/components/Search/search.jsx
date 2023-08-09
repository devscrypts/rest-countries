"use client";

import {styled} from "@mui/material";
import {Icon} from "@iconify/react";
import searchIcon from "@iconify/icons-ion/search";

const Search = ({value, setValue}) => {
    return (
        <StyledForm>
            <StyledIcon icon={searchIcon} />
            <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for a country..."
            />
        </StyledForm>
    );
};

const StyledForm = styled("form")(({theme}) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
        marginBottom: 30
    }
}));

const TextField = styled("input")(({theme}) => ({
    border: "none",
    width: "50%",
    boxShadow: theme.shadows[2],
    fontFamily: theme.typography.fontFamily,
    height: 52,
    background: theme.palette.background.paper,
    paddingLeft: theme.spacing(7),
    outline: "none",
    color:
        theme.palette.mode === "light"
            ? theme.palette.grey[500]
            : theme.palette.common.white,
    fontWeight: 500,
    borderRadius: theme.shape.borderRadius,
    "&::placeholder": {
        color:
            theme.palette.mode === "light"
                ? theme.palette.grey[500]
                : theme.palette.common.white
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
        boxShadow: theme.shadows[2]
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    position: "absolute",
    left: 20,
    color:
        theme.palette.mode === "light"
            ? theme.palette.grey[600]
            : theme.palette.common.white,
    fontSize: 20
}));

export default Search;
