import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from '../src/pages/HomePage.jsx'
import CreatePage from '../src/pages/CreatePage.jsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
