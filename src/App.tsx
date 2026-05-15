import { BrowserRouter, Route, Routes } from "react-router-dom"
import CancellationPage from "./pages/CancellationPage"
import HomePage from "./pages/HomePage"
import SuccessPage from "./pages/SuccessPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancellationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
