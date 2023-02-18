import { Box } from "@mui/material";
import { keyframes } from "@mui/material";
import FadeInBox from "components/lib/fadeIn";
import background from "assets/bg.jpg";
import foregroundTopCloud from "assets/foregroundTopCloud.png";
import foregroundTopFlower from "assets/foregroundTopFlower.png";
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

const initExpand = keyframes`
    0% {
        opacity: 0;
        min-height: 0px;
        max-height: 140px;
    }
    30% {
        opacity: 1;
        min-height: 0px;
        max-height: 140px;
    }
    40% {
        opacity: 1;
        min-height: 0px;
        max-height: 140px;
    }
    100% {
        opacity: 1;
        min-height: 80vh;
        max-height: 80vh;
    }
`;

const initCloud = keyframes`
    0% {
        transform: translateX(-80vw);
    }
    100% {
        transform: translateX(0);
    }
`;

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
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    splash: (theme) => ({
        position: "absolute",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        zIndex: 2,
        backgroundPositionX: "left",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("md")]: {
            backgroundSize: "115vw",
        },
    }),
    cloudSplash: {
        backgroundImage: `url(${foregroundTopCloud}), url(${foregroundBot})`,
        backgroundPositionY: "top, bottom",
        animation: `${initCloud} 1.8s ease-out`,
    },
    flowerSplash: {
        backgroundImage: `url(${foregroundTopFlower})`,
        backgroundPositionY: "top",
    },
    content: {
        backgroundImage: `url(${paperTopLeft}), url(${paperTopRight}), url(${paperTop}),
           url(${paperBotLeft}), url(${paperBotRight}), url(${paperBot}),
           url(${paperMidLeft}), url(${paperMidRight}), url(${paperMid})`,
        backgroundPositionX:
            "left, right, center, left, right, center, left, right, center",
        backgroundPositionY: "top, top, top, bottom, bottom, bottom",
        backgroundRepeat:
            "no-repeat, no-repeat, repeat-x, no-repeat, no-repeat, repeat-x, repeat-y, repeat-y, repeat",
        minWidth: "60vw",
        minHeight: "80vh",
        padding: "20px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Otsutome",
        color: "#583f15",
        animation: `${initExpand} 0.8s ease-in-out`,
        "& .nameBox": {
            fontSize: 70,
            marginTop: "50px",
            marginBottom: "20px",
            textAlign: "center",
            "& .symb": {
                fontSize: 100,
            },
            "& .last": {
                marginTop: -2,
                display: "block",
            },
        },
        "& h3": {
            fontSize: 35,
            marginTop: 0,
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

const Home = (props) => (
    <Box sx={styles.root}>
        <Box sx={[styles.splash, styles.cloudSplash]}></Box>
        <Box
            sx={[styles.splash, styles.flowerSplash]}
            style={{ transform: `translateY(${props.scrolled / 2}px)` }}
        ></Box>
        <Box
            sx={styles.content}
            style={{ transform: `translateY(-${props.scrolled / 2}px)` }}
        >
            <FadeInBox sx={styles.portraitWrapper} delay={1200}>
                <img src={portrait} />
            </FadeInBox>
            <FadeInBox delay={1500}>
                <Box className="nameBox">
                    <span className="first">Anthony</span>
                    <br /> <span className="symb">郑</span> <br />
                    <span className="last"> Zheng</span>
                </Box>
            </FadeInBox>
            <FadeInBox delay={1800}>
                <h3>The best guy ever. And Web Developer.</h3>
            </FadeInBox>
        </Box>
    </Box>
);

export default Home;
