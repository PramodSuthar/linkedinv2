import { useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Widgets from './Components/Widgets/Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
