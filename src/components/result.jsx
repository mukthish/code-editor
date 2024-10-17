import { useContext, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    height: 50vh;
`;

const Result = function () {
    const [src, setSrc] = useState("");
    const { html, css, js } = useContext(DataContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                frameBorder={0}
            />
        </Container>
    );
};

export default Result;
