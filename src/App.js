import { Route, BrowserRouter, Routes } from "react-router-dom";

//pages
import FirstScreenIndex from "./Pages/FirstScreen/FirstScreenIndex";

// This is a parent component for CreateAccount/ components
import AccountCreationIndex from "./Pages/CreateAccount/AccountCreationIndex";

//create-account section

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreenIndex />} />
        <Route path="/create-account" element={<AccountCreationIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
