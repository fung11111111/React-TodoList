import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import TodoList from './Components/TodoList/index';
import NotFoundPage from './Components/NotFoundPage';
import DoneListConatiner from './Containers/DoneListContainer';
import Navitation from './Components/Navigation';
import { Typography } from 'antd';
import { Layout } from 'antd';

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
      <BrowserRouter>
        <Sider className="slide-manue"><Navitation /></Sider>
        <Layout>
          <Title level={3}>Hello, todolist</Title>
          <Content className="main-content">
            <Switch>
              <Route exact path="/" component={TodoList}></Route>
              <Route exact path="/done" component={DoneListConatiner}></Route>
              <Route exact path="/notFound" component={NotFoundPage}></Route>
              <Redirect to="/notFound" ></Redirect>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
