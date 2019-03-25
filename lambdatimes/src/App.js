import React from 'react';
import TopBar from './components/TopBar';

// High Order Component to manage initial page display
import withAuthenticate from './components/Authentication/withAuthenticate'
import Login from './components/Login/Login'
import Content from './components/Content/Content'

const App = () => {
  //Instantiate HOC
  const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login)  
  return (
    <div className="App">
      <TopBar />
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
