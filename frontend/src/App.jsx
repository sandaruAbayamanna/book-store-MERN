import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


const App = () => {


  return (
   
     <Routes>
      {/* if there is user in localstorage navigate to home */}
      <Route path='/login' element={<Login />}/>

      
      <>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </>
      
    </Routes> 

  
  );
};

export default App;