
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Dashbord from './Admin/Page/Dashbord'
import Video from './Admin/Page/Video'
import Imgnavigation from './Admin/Page/Imgnavigation'
import Login from './Admin/Login';

function App() {

  return (
    <PrimeReactProvider>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={[<Login/>]} />

          <Route path="/Home" element={[<Dashbord/>]} />
          <Route path="/Video" element={[<Video name="Video" />]} />
          <Route path="/Imgnavigation" element={[<Imgnavigation name="Img Navigation" />]} />
       </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
