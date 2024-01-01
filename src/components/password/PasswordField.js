import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useContext } from "react";

import { PasswordStateContext } from "../../data/providers/PasswordProvider";

function PasswordField() {
  const { password, showPassword, setPassword } =
    useContext(PasswordStateContext);

  return (
    <>
      <Password sx={{ color: "action.active" }} />
      <TextField
        id="password"
        label="Password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
        sx={{ ml: 2 }}
        type={showPassword ? "text" : "password"}
        value={password}
        variant="standard"
      />
    </>
  );
}

export default PasswordField;
