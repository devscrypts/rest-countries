// Theme color config
import {common} from "@mui/material/colors";
import {alpha} from "@mui/material";

const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "hsl(0, 0%, 52%)",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    500_8: alpha("#919EAB", 0.08),
    500_12: alpha("#919EAB", 0.12),
    500_16: alpha("#919EAB", 0.16),
    500_24: alpha("#919EAB", 0.24),
    500_32: alpha("#919EAB", 0.32),
    500_48: alpha("#919EAB", 0.48),
    500_56: alpha("#919EAB", 0.56),
    500_80: alpha("#919EAB", 0.8)
};

const NEUTRAL = {
    magnolia: "hsl(217, 100%, 97%)",
    alabaster: "hsl(231, 100%, 99%)"
};
const PRIMARY = {
    dark: "hsl(213, 96%, 18%)",
    main: "hsl(243, 100%, 62%)",
    light: "hsl(228, 100%, 84%)",
    lighter: "hsl(206, 94%, 87%)",
    contrastText: "#fff"
};

const SECONDARY = {
    main: "hsl(354, 84%, 57%)",
    contrastText: "#fff"
};
const ERROR = {
    main: "hsl(0, 87%, 67%)",
    contrastText: "#fff"
};

const COMMON = {
    common: {black: "#000", white: "#fff"},
    primary: {...PRIMARY},
    secondary: {...SECONDARY},
    error: {...ERROR},
    grey: GREY,
    neutral: {...NEUTRAL}
};

const palette = {
    light: {
        ...COMMON,
        text: {
            primary: "hsl(200, 15%, 8%)",
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "hsl(0, 0%, 98%)",
            neutral: GREY[200]
        },
        action: {active: GREY[600], ...COMMON.action}
    },
    dark: {
        ...COMMON,
        text: {primary: "#fff", secondary: GREY[500], disabled: GREY[600]},
        background: {
            paper: "hsl(209, 23%, 22%)",
            default: "hsl(207, 26%, 17%)",
            neutral: GREY[500_16]
        },
        action: {active: GREY[500], ...COMMON.action}
    }
};

export default palette;
