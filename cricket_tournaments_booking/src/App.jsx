import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from './User/Home'
import Aboutus from './User/Pages/Aboutus'
import Team from './User/Pages/Team'
import News from './User/Pages/News'
import Match from './User/Pages/Match'
import Blog from './User/Pages/Blog'
import Contact from './User/Pages/Contact'
import Club from './User/Pages/Club';
import TournamentList from './User/Pages/TournamentList';
import DetalsTournment from './User/Pages/DetalsTournment';
import { ToastifyContainer } from './Message/toastify';
import MoreMatch from './User/Pages/MoreMatch';
function App() {

  return (
    <>
    <ToastifyContainer/>
    <PrimeReactProvider>
    <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Club' element={<Club name="Club"/>} />
              <Route path='/TournamentList/:ClubId' element={<TournamentList name="Tournament"/>} />
              <Route path='/DetalsTournment/:TournmentId' element={<DetalsTournment name="Booking"/>} />
              <Route path='/About' element={[<Aboutus/>]} />
              <Route path='/Team'  element={[<Team name="Our team"/>]} />
              <Route path='/News'  element={[<News name="News"/>]} />
              <Route path='/Match'  element={[<Match name="Match"/>]} />
              <Route path='/Blog'  element={[<Blog name="Blog"/>]} />
              <Route path='/Contact'  element={[<Contact name="Contact"/>]} />
              <Route path='/MoreMatch/:TournamentId'  element={[<MoreMatch name="Match"/>]} />
         </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
     
    </>
     
  )
}

export default App
