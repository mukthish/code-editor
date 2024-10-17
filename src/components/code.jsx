import { useContext, useState } from "react";
import Editor from "./editor";
import { Box, styled, Tabs, Tab } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import PropTypes from "prop-types";

// Styled component
const Container = styled(Box)`
    border-bottom: 1px solid #2f2f2f;
    height: auto;
`;

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div id={index} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Code = function () {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="black"
                indicatorColor="secondary"
            >
                <Tab label="HTML" id="0" />
                <Tab label="CSS" id="1" />
                <Tab label="JavaScript" id="2" />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Editor value={html} onChange={setHtml} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Editor value={css} onChange={setCss} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Editor value={js} onChange={setJs} />
            </CustomTabPanel>
        </Container>
    );
};

export default Code;
