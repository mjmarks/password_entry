/** @jsxImportSource @emotion/react */
import { CheckCircle, Pending } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useContext } from "react";

import { PasswordStateContext } from "../../providers/PasswordProvider";

const listStyles = {
  container: css`
    list-style-type: none;
    margin: 0;
    padding: 0;
  `,
  item: css`
    align-items: center;
    display: flex;
  `,
  itemChildren: css`
    margin-left: 16px;
  `,
};

function ListItem({ check, children }) {
  return (
    <li css={listStyles.item}>
      {check ? <CheckCircle color="success" /> : <Pending color="action" />}
      <span css={listStyles.itemChildren}>{children}</span>
    </li>
  );
}

function PasswordCriteria() {
  const {
    hasLowercase,
    hasMinLength,
    hasNumber,
    hasSpecialChar,
    hasUppercase,
    passwordsMatch,
  } = useContext(PasswordStateContext);
  return (
    <ul css={listStyles.container}>
      <ListItem check={hasMinLength}>
        Password has a min length of 6 characters
      </ListItem>
      <ListItem check={hasUppercase}>
        Password has at least 1 uppercase character
      </ListItem>
      <ListItem check={hasLowercase}>
        Password has at least 1 lowercase character
      </ListItem>
      <ListItem check={hasNumber}>Password has at least 1 number</ListItem>
      <ListItem check={hasSpecialChar}>
        Password has at least 1 special character
      </ListItem>
      <ListItem check={passwordsMatch}>Passwords match</ListItem>
    </ul>
  );
}

export default PasswordCriteria;
