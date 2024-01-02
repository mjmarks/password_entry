import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useContext } from "react";

import { PasswordStateContext } from "../../providers/PasswordProvider";

function VisibilityCheckbox() {
  const { setShowPassword, showPassword } = useContext(PasswordStateContext);

  const VisbilityIcon = showPassword ? Visibility : VisibilityOff;

  return (
    <>
      <VisbilityIcon sx={{ color: "action.active" }} />
      <Checkbox
        id="showPassword"
        checked={showPassword}
        label="Show Password"
        onChange={() => {
          setShowPassword(!showPassword);
        }}
        sx={{ ml: 0.5 }}
        value={showPassword}
        variant="standard"
      />
    </>
  );
}

export default VisibilityCheckbox;
