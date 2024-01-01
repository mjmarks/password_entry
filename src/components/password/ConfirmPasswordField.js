import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useContext } from "react";

import { PasswordStateContext } from "../../providers/PasswordProvider";

function ConfirmPasswordField() {
  const { confirmPassword, setConfirmPassword, showPassword } =
    useContext(PasswordStateContext);

  return (
    <>
      <Password sx={{ color: "action.active" }} />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        required
        sx={{ ml: 2 }}
        type={showPassword ? "text" : "password"}
        value={confirmPassword}
        variant="standard"
      />
    </>
  );
}

export default ConfirmPasswordField;
