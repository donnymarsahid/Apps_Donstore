import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import CardEditCategory from './admin/CardEditCategory';
import Dashboard from './admin/Dashboard';
import UpdateCategory from './admin/updateCategory/UpdateCategory';
import Login from './login/Login';
import NoMatch from './404/NoMatch';
import User from './users/User';
import AddBrand from './admin/leading brand/AddBrand';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/editCategory/:idEdit" component={UpdateCategory} />
          <Route path="/edit" component={CardEditCategory} />
          {/* Leading Brand */}
          <Route path="/addBrand" component={AddBrand} />

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
