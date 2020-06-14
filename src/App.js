import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from "./auth";
import  * as pages from './pages';
import { Navbar } from './components';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
        <Global/>
        <Main>
            <Container>
                <Navbar/>
                <Switch>
                    <Route path='/game' component={pages.Game}/>
                    <Route path='/highScores' component={pages.HighScores}/>
                    <Route path='/gameOver' component={pages.GameOver}/>
                    <Route path='/' component={pages.Home}/>
                </Switch>
            </Container>
        </Main>
    </Router>
  );
}

export default App;
