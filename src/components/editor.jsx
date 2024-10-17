import { Box, styled } from "@mui/material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";

const Container = styled(Box)`
    // height: 100vh;
    width: 100 vw;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`;

const Editor = function ({ value, onChange }) {
    const handleChange = function (editor, data, value) {
        onChange(value);
    };
    return (
        <Container>
            <ControlledEditor
                className="controlled-editor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: "material",
                    lineNumbers: true,
                }}
            />
        </Container>
    );
};

export default Editor;
