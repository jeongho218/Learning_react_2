import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const SignUp = loadable(() => import('@pages/SignUp'));
const LogIn = loadable(() => import('@pages/LogIn'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>

    // react-router-dom 5버전 때 사용하던 방법
    // <Switch>
    //   <Redirect exact path="/" to="/login" />
    //   <Route path="/login" component={LogIn} />
    //   <Route path="/signup" component={SignUp} />
    // </Switch>
  );
};

export default App;
