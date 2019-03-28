import React from 'react';
import TopBar from './components/TopBar'
import AppContainer from './AppContainer'
// High Order Component to manage initial page display
import withAuthenticate from './components/Authentication/withAuthenticate'
import Login from './components/Login/Login'
import Content from './components/Content/Content'

const App = () => {
  //Instantiate HOC
  const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login)  
  return (
    <AppContainer>
      <TopBar />
      <ComponentFromWithAuthenticate />
    </AppContainer>
  );
}

export default App;
