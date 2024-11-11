import React from 'react';
import './PostList.css';

const PostList = ({ posts, setPosts, addArchive }) => {
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleArchive = (post) => {
    addArchive(post);
    handleDelete(post.id);
  };

  return (
    <div className="posts">
      <h2>Записи</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <p>Категория: <strong>{post.category}</strong></p>
          <p>Автор: <strong>{post.author}</strong></p>
          <p>Содержание: {post.content}</p>
          <button className="delete" onClick={() => handleDelete(post.id)}>Удалить</button>
          <button className="archive" onClick={() => handleArchive(post)}>Архив</button>
        </article>
      ))}
    </div>
  );
};

export default PostList;
