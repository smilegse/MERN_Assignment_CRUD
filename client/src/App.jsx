import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from '../src/pages/HomePage.jsx'
import CreatePage from '../src/pages/CreatePage.jsx'
import UpdatePage from "./pages/UpdatePage.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/update/:id" element={<UpdatePage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
