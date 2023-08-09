"use client";

import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Box, Button, styled, Typography} from "@mui/material";
import {useState} from "react";
import {Icon} from "@iconify/react";
import navArrowDown from "@iconify/icons-iconoir/nav-arrow-down";
import navArrowUp from "@iconify/icons-iconoir/nav-arrow-up";

const regions = [
    {name: "Africa", value: "Africa"},
    {name: "America", value: "Americas"},
    {name: "Asia", value: "Asia"},
    {
        name: "Europe",
        value: "Europe"
    },
    {name: "Oceania", value: "Oceania"}
];

const Filter = ({value, setValue}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Box sx={{position: "relative"}}>
            <StyledButton variant="contained" onClick={handleClick}>
                <StyledTypography>Filter by Region</StyledTypography>
                <StyledIcon icon={open ? navArrowDown : navArrowUp} />
            </StyledButton>
            <FilterBox open={open}>
                <RadioGroup
                    name="use-radio-group"
                    defaultValue={value}
                    onChange={handleChange}>
                    {regions.map((region, i) => (
                        <StyledFormControlLabel
                            key={i}
                            value={region.value}
                            label={region.name}
                            control={<Radio sx={{display: "none"}} />}
                        />
                    ))}
                </RadioGroup>
            </FilterBox>
        </Box>
    );
};

const FilterBox = styled(Box, {shouldForwardProp: (props) => props !== "open"})(
    ({theme, open}) => ({
        display: "none",
        position: "absolute",
        ...(open && {
            display: "flex",
            background: theme.palette.background.paper,
            width: 200,
            marginTop: theme.spacing(0.5),
            padding: theme.spacing(2, 0),
            paddingLeft: theme.spacing(3),
            boxShadow: theme.shadows[2],
            borderRadius: theme.shape.borderRadius
        })
    })
);

const StyledButton = styled(Button)(({theme}) => ({
    "&.MuiButton-contained": {
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        width: 200,
        height: 52,
        color: theme.palette.text.primary,
        display: "flex",
        textTransform: "none",
        justifyContent: "space-between",
        paddingLeft: theme.spacing(3),
        borderRadius: theme.shape.borderRadius
    }
}));

const StyledTypography = styled(Typography)({
    fontSize: 14
});

const StyledFormControlLabel = styled(FormControlLabel)(({theme}) => ({
    padding: 0,
    margin: 0,
    "&:not(:first-of-type)": {
        marginTop: 10
    },
    "& .MuiFormControlLabel-label": {
        fontSize: 14,
        color: theme.palette.text.primary
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    color: theme.palette.text.primary,
    fontSize: 20
}));
export default Filter;
