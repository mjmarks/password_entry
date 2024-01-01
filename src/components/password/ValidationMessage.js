/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";

import { PasswordStateContext } from "../../providers/PasswordProvider";

function ValidationMessage() {
  const { validationMessage } = useContext(PasswordStateContext);

  return (
    <span
      css={css`
        color: ${/successfully/.test(validationMessage)
          ? "#2e7d32"
          : "#e91e63"};
      `}
    >
      {validationMessage}
    </span>
  );
}

export default ValidationMessage;
