import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCategory from './admin/AddCategory';
import CardEditCategory from './admin/CardEditCategory';
import Dashboard from './admin/Dashboard';
import UpdateCategory from './admin/updateCategory/UpdateCategory';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/editCategory/:idEdit" component={UpdateCategory} />
          <Route path="/edit" component={CardEditCategory} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
