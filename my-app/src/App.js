import React, { useState } from 'react';
import './App.css';
import BlockHeader from './BlockHeader';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [archives, setArchives] = useState([]);

  const handlePostCreate = (post) => {
    setPosts([...posts, post]);
  };

  const addArchive = (post) => {
    setArchives([...archives, post]);
  };

  return (
    <div className="App">
      <BlockHeader />
      <main>
        <PostList posts={posts} setPosts={setPosts} addArchive={addArchive} />
        <PostForm onPostCreate={handlePostCreate} archives={archives} />
      </main>
    </div>
  );
}

export default App;
