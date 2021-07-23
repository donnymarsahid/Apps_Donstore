import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import CardEditCategory from './admin/CardEditCategory';
import Dashboard from './admin/Dashboard';
import UpdateCategory from './admin/updateCategory/UpdateCategory';
import Login from './login/Login';
import NoMatch from './404/NoMatch';
import User from './users/User';
// Collections
import AddCollections from './admin/Collections/AddCollections';
import CardEditCollections from './admin/updateCollections/CardEditCollections';
import UpdateCollections from './admin/updateCollections/UpdateCollections';
import ItemsCollections from './admin/ItemsCollections';
import ItemsCategory from './admin/ItemsCategory';
import ComSoon from './soon/ComSoon';
import ScrollToTop from './ScrollTop/ScrollTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/editCategory/:idEdit" component={UpdateCategory} />
          <Route path="/edit" component={CardEditCategory} />
          {/* Collections */}
          <Route path="/addCollections" component={AddCollections} />
          <Route path="/editCollect" component={CardEditCollections} />
          <Route path="/editCollections/:idEdit" component={UpdateCollections} />
          <Route path="/itemsCollections" component={ItemsCollections} />
          {/* Category */}
          <Route path="/itemsCategory" component={ItemsCategory} />
          <Route path="/comingsoon" component={ComSoon} />
          <Route path="*">
            <NoMatch />
          </Route>
          {/* ComSoon */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
