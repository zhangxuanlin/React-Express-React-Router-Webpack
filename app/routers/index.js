import Home from '../containers/Home';
import About from '../containers/About';
import Info from '../containers/Info';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    }, {
        path: '/about',
        component: About,
    }, {
        path: '/info',
        component: Info,
    },
];
export default routes;
