import { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

export default function Route() {
  const { username, id } = useContext(UserContext);
  if (username) {
    return "loged in... " + username;
  }
  return <RegisterAndLoginForm />;
}
