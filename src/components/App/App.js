import { Route, Routes, Navigate } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
    return (
        <div className='page'>
          <Routes>
           <Route path="/" 
             element={<>
               <Header />
               <Main />
               <Footer />
             </> }>
           </Route> 
           <Route path="/movies"
             element={<>
               <Header />
               <Movies />
               <Footer />
             </>}></Route>
            <Route path="/saved-movies"
              element={<>
                <Header />
                <SavedMovies />
                <Footer />
              </>}>
            </Route>
            <Route path="/profile"
              element={<>
                <Header />
                <Profile />
              </>}>
            </Route>
            <Route path="/signin"
              element={<>
                <Login />
              </>}>
            </Route>
            <Route path="/signup"
              element={<>
                <Register />
              </>}>
            </Route>
            <Route path="*"
              element={<>
                <PageNotFound />
              </>}>
            </Route>
            <Route element={<Navigate to="/" />} />
           </Routes>
          </div> 
      
    )
}

export default App