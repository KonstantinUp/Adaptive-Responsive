import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import MaterialCheckbox from '../components/Tasks/Filter/Checkbox';
import Search from '../components/Tasks/Filter/Search';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Category from '../components/Categories/CategoryList/CategoryList';
import ToDoList from '../components/Tasks/ToDoList/ToDoList';
import {Route} from "react-router-dom";

class App extends React.Component {



  render() {
    return (
      <div className="wrapper-body">
          <div className="wrapper-header">
              <Header checkbox ={<MaterialCheckbox   />} search ={<Search {...this.props} />}/>
          </div>
          <div className="ProgressBar">
              <ProgressBar/>
          </div>
          <div className="wrapper-main">
              <Category/>
             <Route path ='/category/:id' component ={ToDoList}  />
          </div>
      </div>
    );
  }
}

export default App;
