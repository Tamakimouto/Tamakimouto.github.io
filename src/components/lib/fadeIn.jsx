import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

const styles = {
    root: {
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.6s ease-out, transform 1.2s ease-out",
        transform: "translateY(50px)",
        willChange: "opacity, visibility",
        "&.isVisible": {
            opacity: 1,
            visibility: "visible",
            transform: "none",
        },
    },
};

const FadeInBox = ({ delay, sx = [], children }) => {
    const [visible, setVisible] = useState(false);
    const boxRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setVisible(entry.isIntersecting);
            });
        });
        observer.observe(boxRef.current);
        return () => observer.unobserve(boxRef.current);
    }, []);

    return (
        <Box
            className={visible ? "isVisible" : ""}
            sx={[
                styles.root,
                { transitionDelay: `${delay ?? 0}ms` },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            ref={boxRef}
        >
            {children}
        </Box>
    );
};

export default FadeInBox;
