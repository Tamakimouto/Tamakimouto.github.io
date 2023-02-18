import { useEffect } from "react";
import { Box } from "@mui/material";
import anime from "animejs";
import { ReactComponent as LoadingText } from "assets/loading.svg";

const styles = {
    root: {
        backgroundColor: "#1b3853",
        backgroundImage:
            "linear-gradient(to bottom, #080808, #0d0d0d, transparent)",
        height: "100vh",
        maxHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            height: 300,
        },
    },
};

const Loader = ({ complete }) => {
    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => complete(),
        });

        loader
            .add({
                targets: "#logo path",
                delay: 300,
                duration: 5000,
                easing: "easeInOutQuad",
                strokeDashoffset: [anime.setDashoffset, 0],
            })
            .add({
                targets: "#logo",
                delay: 800,
                duration: 300,
                easing: "easeInOutQuart",
                opacity: 0,
                scale: 0.1,
            })
            .add({
                targets: ".loader",
                duration: 200,
                easing: "easeInOutQuart",
                opacity: 0,
                zIndex: -1,
            });
    };

    return (
        <Box sx={styles.root} className="loader">
            <LoadingText />
        </Box>
    );
};

export default Loader;
