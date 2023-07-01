import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" />
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Navigate to="home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
