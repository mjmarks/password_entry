import PasswordForm from "./PasswordForm";

import PasswordProvider from "../../providers/PasswordProvider";

function Password() {
  return (
    <PasswordProvider>
      <PasswordForm />
    </PasswordProvider>
  );
}

export default Password;
