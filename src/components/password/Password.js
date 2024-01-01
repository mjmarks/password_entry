import PasswordForm from "./PasswordForm";

import PasswordProvider from "../../data/providers/PasswordProvider";

function Password() {
  return (
    <PasswordProvider>
      <PasswordForm />
    </PasswordProvider>
  );
}

export default Password;
