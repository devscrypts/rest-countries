import {CircularProgress, Stack} from "@mui/material";

const LoadingSkeleton = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{height: "100vh", bgcolor: "background.default"}}>
            <CircularProgress size={80} color="secondary" />
        </Stack>
    );
};

export default LoadingSkeleton;
