import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home.js";
import Create from "./pages/Create.js";
import UserListedItems from "./pages/UserListedItems.js";
import UserPurchases from "./pages/UserPurchases.js";
import { Web3Provider } from "./contexts/Web3Context";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Web3Provider>
        <Navigation />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/user-listed-items" element={<UserListedItems />} />
            <Route path="/user-purchases" element={<UserPurchases />} />
          </Routes>
        </div>
      </Web3Provider>
    </BrowserRouter>
  );
}

export default App;
