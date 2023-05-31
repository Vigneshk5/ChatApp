import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Route from "./Routes";

function App() {
  axios.defaults.baseURL = "https://chatapi1-uzmt.onrender.com";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Route />
    </UserContextProvider>
  );
}

export default App;
