"use client";

import React, {useState} from "react";
import {Box, Stack, styled} from "@mui/material";
import Search from "@/app/components/Search";
import Filter from "@/app/components/Filter";
import Countries from "@/app/components/Countries";
import {filter, sortBy} from "lodash/collection";

const Index = ({data}) => {
    const [searchValue, setSearchValue] = useState("");
    const [filterValue, setFilterValue] = useState("");

    const sortedData = sortBy(data, [
        function (o) {
            return o.name.common;
        }
    ]);

    const filteredData = filter(sortedData, function (o) {
        return o.region.includes(filterValue);
    });

    const countries = filter(filteredData, function (o) {
        return o.name.common.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <Page>
            <Container>
                <Stack
                    direction={{xs: "column", md: "row"}}
                    justifyContent="space-between">
                    <Search value={searchValue} setValue={setSearchValue} />
                    <Filter value={filterValue} setValue={setFilterValue} />
                </Stack>
                <Countries countries={countries} />
            </Container>
        </Page>
    );
};

export const Page = styled(Box)(({theme}) => ({
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    background: theme.palette.background.default
}));

export const Container = styled(Box)({
    width: "90%",
    margin: "auto",
    paddingTop: 100
});

export default Index;
