import { Box } from "@mui/material";
import ukioeBg1 from "assets/ukioefg.png";
import ukioeBg2 from "assets/ukioefg2.png";
import ukioeBg3 from "assets/ukioefg3.png";
import ukioeBg4 from "assets/ukioefg4.png";
import ukioeBg5 from "assets/ukioefg5.png";
import ukioeBg6 from "assets/ukioefg6.png";

const styles = {
    root: {
        maxHeight: "60vw",
        overflowX: "visible",
        zIndex: 2,
    },
    rootLayer: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        position: "relative",
    },
    bglayer: {
        backgroundPosition: "top",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        position: "absolute",
        "&.sky": {
            backgroundImage: `url(${ukioeBg6})`,
        },
        "&.mountain": {
            backgroundImage: `url(${ukioeBg5})`,
            backgroundPosition: "top left",
        },
        "&.fog": (theme) => ({
            backgroundImage: `url(${ukioeBg4})`,
            backgroundPosition: "bottom right",
            "& h2": {
                textAlign: "right",
                marginTop: "12vw",
                fontSize: "18vw",
                fontFamily: "Roboto",
                mixBlendMode: "overlay",
                marginBottom: 0,
                marginRight: "12px",
                [theme.breakpoints.up("xxl")]: {
                    marginTop: "6vw",
                },
            },
            [theme.breakpoints.up("xxl")]: {
                backgroundPosition: "center right",
            },
        }),
        "&.sea": (theme) => ({
            backgroundImage: `url(${ukioeBg3})`,
            backgroundPosition: "bottom right",
            "& h4": {
                fontSize: "2vw",
                fontFamily: "Roboto",
                mixBlendMode: "overlay",
                maxWidth: "50vw",
                marginLeft: "auto",
                textAlign: "right",
                marginTop: "35vw",
                marginRight: "24px",
            },
            [theme.breakpoints.up("xxl")]: {
                backgroundPosition: "center right",
            },
        }),
        "&.town": {
            backgroundImage: `url(${ukioeBg2})`,
            backgroundPosition: "bottom left",
            bottom: -100,
        },
        "&.hill": {
            backgroundImage: `url(${ukioeBg1})`,
            backgroundPosition: "bottom right",
        },
    },
};

// TO DO apply math min

const Blurb = (props) => {
    return (
        <Box
            sx={[styles.root, styles.bglayer, styles.rootLayer]}
            className="sky"
        >
            <Box
                sx={styles.bglayer}
                className="mountain"
                style={{ transform: `translateY(-${props.scrolled / 2}px)` }}
            ></Box>
            <Box
                sx={styles.bglayer}
                className="fog"
                style={{ transform: `translateY(-${props.scrolled / 4}px)` }}
            >
                <h2>ABOUT</h2>
            </Box>
            <Box
                sx={styles.bglayer}
                className="sea"
                style={{ transform: `translateY(-${props.scrolled / 8}px)` }}
            >
                <h4>
                    A Frontend focused Software Engineer with years of
                    experience in HTML, CSS, JS, and React.
                </h4>
            </Box>
            <Box
                sx={styles.bglayer}
                className="town"
                style={{
                    transform: `translateY(-${Math.min(
                        props.scrolled / 20,
                        80
                    )}px)`,
                }}
            ></Box>
            <Box sx={styles.bglayer} className="hill"></Box>
        </Box>
    );
};

export default Blurb;
