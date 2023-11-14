import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBooks } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const {v4: uuidv4} = require("uuid");

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const book = {id: uuidv4(), title, author};
    dispatch(addBooks(book));
    navigate('/show-books', {replace: true});
  }
  return (
    <div>
        <h2>Add Book</h2>
        <form onSubmit={handleSubmitButton}>
          <div className='form-field'>
            <label htmlFor='title'>Title : </label>
            <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
          </div>
          <div className='form-field'>
            <label htmlFor='author'>Author : </label>
            <input type='text' id='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
          </div>
          <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default AddBook;

// CRUD -> Create Done Here