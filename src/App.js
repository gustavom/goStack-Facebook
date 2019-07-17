import React from 'react';
import './assets/scss/styles.scss';
import Header from './components/header/Header'
import PostList from './components/postList/PostList'

function App(){
  return (
      <>
        <Header />
        <PostList />
      </>
    );
};

export default App;