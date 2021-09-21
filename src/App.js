import {Route, Switch } from 'react-router-dom'

import Heading from './components/Heading';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { GlobalProvider  } from './context/GlobalContext';

import './App.css';


console.log(GlobalProvider )

function App() {
  return (
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
        <GlobalProvider >
          <Heading />
          <Switch>
            <Route path='/' component={TaskList} exact />   
            <Route path='/add' component={TaskForm} exact />
            <Route path='/edit/:id' component={TaskForm} exact />        
        </Switch>
        </GlobalProvider >
      </div> 
    </div>
  );
}

export default App;
