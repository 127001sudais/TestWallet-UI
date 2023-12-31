import { Route, BrowserRouter, Routes } from "react-router-dom";

//pages
import FirstScreenIndex from "./Pages/FirstScreen/FirstScreenIndex";
// This is a parent component for CreateAccount/ components
import AccountCreationIndex from "./Pages/CreateAccount/AccountCreationIndex";
import HomeIndex from "./Pages/Home/HomeIndex";
import RecoverAccountIndex from "./Pages/RecoverAccount/RecoverAccountIndex";
import My12WordsIndex from "./Pages/My12Words/My12WordsIndex";
import AboutIndex from "./Pages/About/AboutIndex";
import ChangePinIndex from "./Pages/ChangePin/ChangePinIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreenIndex />} />
        <Route path="/create-account" element={<AccountCreationIndex />} />
        <Route path="/recover-account" element={<RecoverAccountIndex />} />
        <Route path="/home" element={<HomeIndex />} />
        <Route path="/my-12-words" element={<My12WordsIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/change-pin" element={<ChangePinIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
