import React from 'react';
import {
  HashRouter, Route, Switch, Link,
} from 'react-router-dom';
import MessageList from './MessageList';
import Message from './Message';

const App = () => (
  <HashRouter>
    <div className="App">
      <header className="header-container">
        <Link to="/messages/">Inbox</Link>
      </header>
      <Switch>
        <Route path="/" exact component={MessageList} />
        <Route path="/messages/" exact component={MessageList} />
        <Route path="/messages/:id" component={Message} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
