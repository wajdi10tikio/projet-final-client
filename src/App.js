import './App.css';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; import Profile from './pages/Profile';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Navbarr from './components/Navbarr';
import NotFound from './pages/NotFound';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import { Logout, setUSER } from './redux/actions/authActions';
import store from './redux/Store';
import jwt_decode from "jwt-decode"
import { useSelector } from 'react-redux';
import { setAuth } from './util/setAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "./components2/NavBar";
import MoviesList from './components2/MoviesList';
import MovieDetails from './components2/MovieDetails';


//if j'ai token je vexu dispatche l setuser bch session matdhi3ech ki na3mlou actualiser

if (window.localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUSER(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000
  // bch ncompariw currentDate b date d'experation eli 3malneha bl decode.exp

  if (decode.exp > currentDate) {
    store.dispatch(Logout())

  }
}


function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  const [movies, setMovies] = useState([])
  const [pageCount, setpageCount] = useState(0)
  //get all movies by axios 

  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  useEffect(() => {
    getAllMovies();
  }, [])

  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies(res.data.results)
      setpageCount(res.data.total_pages)
    }




  }












  return (
    <div className="App nav-style  w-100" >
      <BrowserRouter>
        <div className="nav-style w-100" style={{ height: "100vh" }}>
          <Navbarr user={user} />
          <Routes>
            <Route path='/' element={
              <PrivateRouter user={user}>
                <Profile />
              </PrivateRouter>} />
            {/* sna3na private route avec props user . si user true yemchi l profile si false yemchi l login */}


            {/* ForceRedirect si coneccted yhezek lel profile sinon tarja3 l login (si vous étes connecter vous n'etes pas besoin bch todhherlek page register w login mara o5ra)  */}
            <Route path='/login' element={
              <ForceRedirect user={user}>
                <Login />
              </ForceRedirect>} />


            <Route path='/register' element={
              <ForceRedirect user={user}>
                <Register />
              </ForceRedirect>} />
            <Route path='/admin' element={

              <AdminRouter user={user}>
                <Admin />
              </AdminRouter>} />

            <Route path="/movie/:id" element={<MovieDetails />} />

            <Route path='*' element={<NotFound />} />
            <Route path='/noaccess' element={<NoAccess />} />


            <Route path='/movie' element={
              <PrivateRouter user={user}>
                <NavBar search={search} />
                <Routes>
                  <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />



                </Routes>
              </PrivateRouter>} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
