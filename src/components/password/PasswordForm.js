/** @jsxImportSource @emotion/react */
import { Box, Button } from "@mui/material";
import { css } from "@emotion/react";
import { useContext } from "react";

import ConfirmPasswordField from "./ConfirmPasswordField";
import PasswordCriteria from "./PasswordCriteria";
import PasswordField from "./PasswordField";
import ValidationMessage from "./ValidationMessage";
import VisibilityCheckbox from "./VisibilityCheckbox";

import { PasswordStateContext } from "../../providers/PasswordProvider";

const formStyles = css`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

function PasswordForm() {
  const { setValidationMessage } = useContext(PasswordStateContext);

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
      }}
    >
      <PasswordCriteria />
      <form
        css={formStyles}
        onSubmit={(e) => {
          e.preventDefault();
          setValidationMessage();
        }}
      >
        <Box
          sx={{
            alignItems: "flex-end",
            display: "flex",
            marginTop: "16px",
          }}
        >
          <PasswordField />
        </Box>
        <Box
          sx={{
            alignItems: "flex-end",
            display: "flex",
            marginTop: "16px",
          }}
        >
          <ConfirmPasswordField />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <VisibilityCheckbox />
        </Box>
        <Button sx={{ mt: 2 }} type="submit" variant="outlined">
          Submit
        </Button>
      </form>
      <Box
        sx={{
          height: "19px",
          marginTop: "16px",
        }}
      >
        <ValidationMessage />
      </Box>
    </Box>
  );
}

export default PasswordForm;
