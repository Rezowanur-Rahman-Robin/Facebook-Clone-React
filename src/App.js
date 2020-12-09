import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widget from './Widget';

// https://facebook-clone-64f84.web.app/

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <>
        <Header/>

         <div className="app__body">
             <Sidebar/>
             <Feed/>
             <Widget/>

          </div>
        </>
      )}
      
           
    </div>
  );
}

export default App;
