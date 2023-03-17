import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Header';

import Home from './Pages/Home/index.js';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exatc path="/" component={ Home }/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;