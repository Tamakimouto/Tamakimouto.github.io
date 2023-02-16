import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import background from "assets/bg.jpg";
import foregroundTop from "assets/foregroundTop.png";
import foregroundBot from "assets/foregroundBot.png";
import paperTopLeft from "assets/paperTopLeft.png";
import paperTopRight from "assets/paperTopRight.png";
import paperTop from "assets/paperTop.png";
import paperMidLeft from "assets/paperMidLeft.png";
import paperMidRight from "assets/paperMidRight.png";
import paperMid from "assets/paperMid.png";
import paperBotLeft from "assets/paperBotLeft.png";
import paperBotRight from "assets/paperBotRight.png";
import paperBot from "assets/paperBot.png";
import portrait from "assets/ukioe1.jpg";

const styles = {
    root: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    cloudSplash: (theme) => ({
        position: "absolute",
        backgroundImage: `url(${foregroundTop}), url(${foregroundBot})`,
        backgroundPositionX: "left",
        backgroundPositionY: "top, bottom",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        zIndex: 2,
        [theme.breakpoints.down("md")]: {
            backgroundSize: "70vw",
        },
    }),
    content: {
        backgroundImage: `url(${paperTopLeft}), url(${paperTopRight}), url(${paperTop}),
           url(${paperBotLeft}), url(${paperBotRight}), url(${paperBot}),
           url(${paperMidLeft}), url(${paperMidRight}), url(${paperMid})`,
        backgroundPositionX:
            "left, right, center, left, right, center, left, right, center",
        backgroundPositionY: "top, top, top, bottom, bottom, bottom",
        backgroundRepeat:
            "no-repeat, no-repeat, repeat-x, no-repeat, no-repeat, repeat-x, repeat-y, repeat-y, repeat",
        minWidth: "80vw",
        minHeight: "80vh",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Otsutome",
        color: "#583f15",
        "& h1": {
            fontSize: 50,
        },
    },
    portraitWrapper: {
        display: "flex",
        "& img": {
            borderRadius: "50%",
            height: 200,
            width: 200,
            objectFit: "cover",
        },
    },
};

const Home = (props) => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", updateScrolled);

        return () => window.removeEventListener("scroll", updateScrolled);
    }, []);

    const updateScrolled = () => {
        setScrolled(window.scrollY);
    };

    return (
        <Box sx={styles.root}>
            <Box sx={styles.cloudSplash}></Box>
            <Box
                sx={styles.content}
                style={{ transform: `translateY(${scrolled / 4}px)` }}
            >
                <Box sx={styles.portraitWrapper}>
                    <img src={portrait} />
                </Box>
                <h1>Anthony Zheng</h1>
                <h3>The best guy ever. And Web Developer.</h3>
            </Box>
        </Box>
    );
};

export default Home;
