import React from "react";
import {
    Box,
    Card,
    CardMedia,
    Grid,
    Stack,
    styled,
    Typography
} from "@mui/material";
import Link from "next/link";

const Countries = ({countries}) => {
    return (
        <Container>
            <Grid container spacing={{xs: 5, md: 10}}>
                {countries?.map((country) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
                        <StyledLink href={`/${country.name.common}`}>
                            <StyledCard>
                                <Stack>
                                    <StyledImage
                                        image={country.flags.png}
                                        title={country.name.common}
                                    />
                                </Stack>
                                <Wrapper>
                                    <Title>{country.name.common}</Title>
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
                                        Capital:{" "}
                                        <SubtitleSpan>
                                            {country.capital}
                                        </SubtitleSpan>
                                    </Subtitle>
                                </Wrapper>
                            </StyledCard>
                        </StyledLink>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

const Container = styled(Box)(({theme}) => ({
    padding: theme.spacing(4, 0)
}));

const Wrapper = styled(Box)(({theme}) => ({
    padding: theme.spacing(4, 3, 5)
}));
const StyledCard = styled(Card)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    height: 340
}));

const Title = styled(Typography)(({theme}) => ({
    fontWeight: 800,
    marginBottom: theme.spacing(2)
}));

const Subtitle = styled(Typography)({
    fontSize: 14,
    fontWeight: 600
});

const SubtitleSpan = styled("span")({
    fontWeight: 300
});

const StyledImage = styled(CardMedia)(({theme}) => ({
    width: "100%",
    height: 160,
    [theme.breakpoints.down("md")]: {}
}));

const StyledLink = styled(Link)({
    textDecoration: "none"
});

export default Countries;
