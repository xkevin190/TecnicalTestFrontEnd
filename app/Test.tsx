import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router';
import Session from './pages/session';
import Muro from './pages/Muro';
import { ApplicationState } from './store/root';
import { connect } from 'react-redux';

type PropsFromState = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: ApplicationState) => ({
  currentUser: state.session.currentUser,
  router: state.router,
});

class Test extends React.Component<PropsFromState> {
  render() {
    const { currentUser, router } = this.props;
    if (currentUser && router.location.pathname !== '/dasboard') {
      return <Redirect to="/dasboard" />;
    }
    return (
      <ContentContainer>
        <Switch>
          <Route path="/" exact component={Session} />
          <Route path="/dasboard" component={Muro} />
        </Switch>
      </ContentContainer>
    );
  }
}
export default connect(mapStateToProps)(Test);

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
  && {
    background: #fff;
    margin: auto;
    height: 100%;
    width: 1008px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1008px;
    flex-direction: column;
    @media (max-width: 1010px) {
      width: 100%;
    }
  }
`;
