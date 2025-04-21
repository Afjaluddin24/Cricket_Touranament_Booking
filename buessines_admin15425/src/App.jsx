import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Registration from "./Business/Registration"
import Dashboard from "./Business/Page/Dashboard"
import Login from "./Business/Login"
import Profile from "./Business/Profile"
import TeamsLimet from "./Business/Page/TeamsLimet"
import Tournament from "./Business/Page/Tournament";
import { ToastifyContainer } from "./Message/toastify";
import BookigDetals from "./Business/Page/BookigDetals";
import ManageTournament from "./Business/Page/ManageTournament";
import MatchSchedule from "./Business/Page/MatchSchedule";
import Match from "./Business/Page/Match";


function App() {
  return (
   <>
    <ToastifyContainer/>
    <PrimeReactProvider>
    <BrowserRouter>
      <Routes>
        
         <Route path="/Registration" element={<Registration/>} />
         <Route path="/" element={<Login/>} />
         <Route path="/Profile" element={<Profile name="Profile"/>} />
         <Route path="/Dashboard" element={<Dashboard/>} />
         <Route path="/PlayTeams" element={<TeamsLimet name="Teams"/>} />
         <Route path="/Tournament" element={<Tournament name="New Tournament"/>} />
         <Route path="/Booking" element={<BookigDetals name="Booking"/>} />
         <Route path="/ManageTournament" element={<ManageTournament name="Manage Tournament"/>} />
         <Route path="/MatchSchedule" element={<MatchSchedule name="Tournament Match Schedule"/>} />
         <Route path="/Match" element={<Match name="Match"/>} />

      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
   </>
  )
}

export default App
