import React from 'react';
import './app.css';
import Header from '../header/header';
import List from '../list/list';
import AddTaskForm from '../add-task-form/addTaskForm';
import Tools from '../tools/tools';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class App extends React.Component {

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.props.state));
  }

  render() {
    return (
      <div id="common-wrapper" className="common-wrapper">
        <Header />
        <AddTaskForm />
        <Tools />      
        <List />
      </div>  
    )
  }

}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps, actions)(App);