import * as React from 'react'
import styled, { injectGlobal } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router, Route , Switch } from 'react-router-dom';
import Session from './pages/session'
 import Muro from './pages/Muro'
 

const history = createBrowserHistory();

export default class Test extends React.Component {
    render(){
       return(
        
        <ContentContainer>
          <Router history={history}>
            <Switch>
              <Route path="/"  exact component={Session} />
              <Route path="/" component={Muro} />
           </Switch>
          </Router>
        </ContentContainer>

       )

    }
}

injectGlobal`
  html,
  body,
  body > #root,
  body > #root > div {
    height: 100% !important;
  }
  body {
    margin: 0;
    background-color: #dcedf0;
  }
  * {
    box-sizing: border-box;
    font-family: Helvetica;
    font-size: 15px;
  }

  #app{
    height: 100%;
  }
`;

const ContentContainer = styled.main`
  &&{
    background: #fff;
    margin: auto;
    height: 100%;
    width: 1008px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:1008px;
    flex-direction:column;
    @media(max-Width: 1010px) {
      width:100%;
    }
         
  }
`