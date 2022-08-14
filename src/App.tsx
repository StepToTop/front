import { Switch, Route } from '@modern-js/runtime/router';
import routes from '@/routes/base';

import './App.css';

const App = () => (
  <Switch>
    {routes.map(routeItem => (
      <Route exact={true} path={routeItem.path} key={routeItem.path}>
        {/* < /> */}
        {/* {cloneElement(<>{routeItem.component}</>)} */}
        <routeItem.component />
      </Route>
    ))}
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
