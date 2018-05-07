import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrimaryLayout from '../../layout';
import routes from '../../routers';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

const App = () => (
    <BrowserRouter>
        <PrimaryLayout>
            <Switch>
                { 
                    routes.map((route, i) => (
                        <RouteWithSubRoutes key={String(i)} {...route} />
                    ))
                }
            </Switch>
        </PrimaryLayout>
    </BrowserRouter>
);

export default App;
