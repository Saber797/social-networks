import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Sett/Settings';
import { FreindsContainer } from './components/Freinds/FreindsContainer';
import UsersContainer from './components/Users/UsersContainer';
const App = () => {
  
  
  return (
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-dialog'>
          <Routes>
            <Route path='/Dialogs' element={   <DialogsContainer/>} />
            <Route path='/Profile' element={  <Profile  />}/>
            <Route path='/News' element={ <News/>}/>
            <Route path='/Music' element={ <Music/>}/>
            <Route path='/Freinds' element={ <FreindsContainer />}/>
            <Route path='/Users' element={ <UsersContainer/>}/>
            <Route path='/Settings' element={ <Settings/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
