
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from './Admin/Page/Dashbord'
import Video from './Admin/Page/Video'

function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={[<Dashbord/>]} />
          <Route path="/Video" element={[<Video name="Video" />]} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
