import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CreateEmployee from "./pages/CreateEmployee";
import ShowEmployees from "./pages/ShowEmployees";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<CreateEmployee />}></Route>
        <Route path="/employee-list" element={<ShowEmployees />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
