import React from "react";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import ProduceShowContainer from './containers/ProduceShowContainer';

const App = props => {
    return(
        <Router history={browserHistory}>
        <Route path='/produce/:id' component={ProduceShowContainer} />
        </Router>
    )
}

export default App;