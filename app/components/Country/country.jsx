"use client";
import React from "react";
import {
    Box,
    Button,
    Card,
    Grid,
    Stack,
    styled,
    Typography
} from "@mui/material";
import {Icon} from "@iconify/react";
import arrowBackOutline from "@iconify/icons-ion/arrow-back-outline";
import {getLanguages, getCurrencies, getNativeName} from "@/app/utils";
import {Page, Container} from "@/app/components";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Country = ({country, borderCountries}) => {
    const router = useRouter();

    return (
        <StyledPage>
            <Container>
                <StyledButton
                    variant="contained"
                    size="large"
                    onClick={() => router.back()}>
                    <StyledIcon icon={arrowBackOutline} />
                    <StyledTypography>Back</StyledTypography>
                </StyledButton>
                <Grid container spacing={{xs: 2, md: 5, lg: 15}}>
                    <Grid item xs={12} md={6}>
                        <StyledImage
                            src={country.flags.svg}
                            alt={country.name.common}
                            height={400}
                            width={500}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{py: 4}}>
                            <Title>{country.name.common}</Title>
                            <Stack
                                direction={{xs: "column", md: "row"}}
                                justifyContent="space-between"
                                spacing={{xs: 4, md: 0}}>
                                <Stack>
                                    <Subtitle>
                                        Native Name:{" "}
                                        <SubtitleSpan>
                                            {getNativeName(
                                                country.name.nativeName
                                            )}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Population:{" "}
                                        <SubtitleSpan>
                                            {country.population.toLocaleString(
                                                "en-US"
                                            )}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Region:{" "}
                                        <SubtitleSpan>
                                            {country.region}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Subregion:{" "}
                                        <SubtitleSpan>
                                            {country.subregion}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Capital:{" "}
                                        <SubtitleSpan>
                                            {country.capital}
                                        </SubtitleSpan>
                                    </Subtitle>
                                </Stack>
                                <Stack>
                                    <Subtitle>
                                        Top level domain:{" "}
                                        <SubtitleSpan>
                                            {country.tld}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Currencies:{" "}
                                        <SubtitleSpan>
                                            {getCurrencies(country.currencies)}
                                        </SubtitleSpan>
                                    </Subtitle>
                                    <Subtitle>
                                        Language:{" "}
                                        <SubtitleSpan>
                                            {getLanguages(country.languages)}
                                        </SubtitleSpan>
                                    </Subtitle>
                                </Stack>
                            </Stack>
                            <Stack
                                direction={{xs: "column", md: "row"}}
                                alignItems={{xs: "flex-start", md: "center"}}
                                sx={{pt: {xs: 4, md: 7}}}>
                                <Subtitle sx={{mb: {xs: 2, md: 0}}}>
                                    Border countries:{" "}
                                </Subtitle>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{ml: {xs: 0, md: 2}}}
                                    useFlexGap
                                    flexWrap="wrap">
                                    {borderCountries?.map((o, i) => (
                                        <StyledCard key={i}>
                                            <SubtitleSpan>{o}</SubtitleSpan>
                                        </StyledCard>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledPage>
    );
};
const StyledPage = styled(Page)(({theme}) => ({
    width: "100%",
    height: "100vh",
    background: theme.palette.background.default,
    [theme.breakpoints.down("md")]: {
        height: "100%"
    }
}));

const StyledButton = styled(Button)(({theme}) => ({
    "&.MuiButton-contained": {
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        color: theme.palette.text.primary,
        width: 130,
        display: "flex",
        textTransform: "none",
        borderRadius: theme.shape.borderRadius,
        marginBottom: 80
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    color: theme.palette.text.primary,
    fontSize: 20,
    marginRight: 6
}));
const StyledTypography = styled(Typography)({
    fontSize: 14
});

const Title = styled(Typography)(({theme}) => ({
    ...theme.typography.h4,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary
}));

const Subtitle = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: 15,
    textTransform: "capitalise",
    padding: theme.spacing(1, 0, 0),
    color: theme.palette.text.primary
}));

const SubtitleSpan = styled("span")({
    fontWeight: 300
});

const StyledImage = styled(Image)({
    height: "100%",
    width: "100%"
});

const StyledCard = styled(Card)(({theme}) => ({
    padding: theme.spacing(1),
    width: "max-content",
    height: "fit-content"
}));

export default Country;
