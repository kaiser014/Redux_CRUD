import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import ViewBooks from '../features/books/ViewBooks';
import AddBook from '../features/books/AddBook';
import Footer from '../layouts/Footer';
import EditBook from '../features/books/EditBook';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/show-books' element={<ViewBooks />}/>
                <Route path='/add-book' element={<AddBook />}/>
                <Route path='/edit-book' element={<EditBook />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
        </main>
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Index;