import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import TodoList from './Components/TodoList/index';
import NotFoundPage from './Components/NotFoundPage';
import DoneListConatiner from './Containers/DoneListContainer';
import Navitation from './Components/Navigation';
import { Typography } from 'antd';
import { Layout } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
      <BrowserRouter>
        <Sider className="slide-manue"><Navitation /></Sider>
        <Layout>
          <Header><Title level={3}>Hello, todolist</Title></Header>
          <Content className="main-content">
            <Switch>
              <Route exact path="/" component={TodoList}></Route>
              <Route exact path="/done" component={DoneListConatiner}></Route>
              <Route exact path="/notFound" component={NotFoundPage}></Route>
              <Redirect to="/notFound" ></Redirect>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </BrowserRouter>
      </Layout>
    </div>
  );
}
/* <Navitation/>
      <header className="App-header">
      
      <BrowserRouter>
    
  <Switch>
  <Route exact path = "/" component={TodoList}></Route>
  <Route exact path = "/done" component={DoneListConatiner}></Route>
  <Route exact path = "/notFound" component={NotFoundPage}></Route>
  <Redirect to="/notFound" ></Redirect>
  </Switch>
  </BrowserRouter>
</header> */
export default App;
