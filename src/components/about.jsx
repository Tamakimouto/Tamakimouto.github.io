import { Box } from "@mui/material";

const styles = {
    root: {
        position: "relative",
        zIndex: 3,
        minHeight: "60vh",
        backgroundColor: "white",
    },
};

const About = (props) => {
    return <Box sx={styles.root}>I'm literally just the best guy</Box>;
};

export default About;
