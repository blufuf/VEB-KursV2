import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostCreate, archives }) => {
  const [formInput, setFormInput] = useState({ title: '', category: '', author: '', content: '' });

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.title && formInput.category && formInput.author && formInput.content) {
      onPostCreate({ ...formInput, id: Date.now() });
      setFormInput({ title: '', category: '', author: '', content: '' });
    }
  };

  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <h2>Создать запись</h2>
        <label>
          Автор <input type="text" name="author" value={formInput.author} onChange={handleInputChange} />
        </label>
        <label>
          Заголовок <input type="text" name="title" value={formInput.title} onChange={handleInputChange} />
        </label>
        <label>
          Категория <input type="text" name="category" value={formInput.category} onChange={handleInputChange} />
        </label>
        <label>
          Содержание <textarea name="content" value={formInput.content} onChange={handleInputChange}></textarea>
        </label>
        <button type="submit">Создать</button>
        <div>
          <h2>Архив</h2>
          <ul>
            {archives.map((post, index) => (
              <li key={index}>{post.title}</li>
            ))}
          </ul>
        </div>
      </form>
    </aside>
  );
};

export default PostForm;
