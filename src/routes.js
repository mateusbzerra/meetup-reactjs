import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/posts/:id" component={Post}></Route>
        <Route path="/novo/post" component={NewPost}></Route>
      </Switch>
    </BrowserRouter>
  );
}
