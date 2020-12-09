import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import './App.css';
import TodoList from './Components/TodoList';
import DoneList from './Components/DoneList';
import NotFoundPage from './Components/NotFoundPage';
import DoneListConatiner from './Containers/DoneListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <ul>
          <li>
            <Link  to="/">Go to list page</Link>
          </li>
          <li>
            <Link  to="/done">Go to done page</Link>
          </li>
        </ul>
        <Route exact path = "/" component={TodoList}></Route>
        <Route exact path = "/done" component={DoneListConatiner}></Route>
        <Route exact path = "/notFound" component={NotFoundPage}></Route>
        <Redirect to="/notFound" ></Redirect>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
