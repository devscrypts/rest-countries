"use client";

import {useEffect} from "react";
import {Button, Stack, Typography} from "@mui/material";

function Error({error, reset}) {
    useEffect(() => {
        console.error(error.message);
    }, [error]);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{height: "100vh", bgcolor: "background.default"}}>
            <Typography color="text.primary">Something went wrong!</Typography>
            <Button
                size="large"
                color="secondary"
                variant="contained"
                sx={{mt: 2}}
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }>
                Try again
            </Button>
        </Stack>
    );
}
export default Error;
