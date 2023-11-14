import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBooks } from './BookSlice';

const EditBook = () => {
  const location = useLocation();

  const id = location.state.id;
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(updateBooks({id, title, author}));
  navigate('/show-books', {replace: true});
}

  return (
    <div>
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
              <label htmlFor='title'>Title : </label>
              <input type='text' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div className='form-field'>
              <label htmlFor='author'>Author : </label>
              <input type='text' id='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
            </div>
            <button type='submit'>Update Book</button>
        </form>
    </div>
  )
}

export default EditBook;