import React from 'react';
import './addTaskForm.css';
import DateMaker from '../date-maker/dateMaker';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class AddTaskForm extends React.Component {

  handleChange = (e) => {
    e.target.className = 'input-for-task';
  }

  createTask = (text, date) => {
    return {
      id: +Date.now().toString(),
      done: false,
      text: text,
      date: date
    }
  }

  submitMethodWrapper = (e) => {
    e.preventDefault();
    const input = e.target[0];
    const datePickerInput = e.target[1];
    const text = input.value;
    const date = datePickerInput.value;
    if (!text.length || !date) {
      if (!text.length) {
        input.className = 'input-for-task background-color-red';               
      } 
      if (!date) {
        datePickerInput.className = 'input-for-date background-color-red';
      }
      return;
    }
    const newData = this.props.data.slice(0);
    const newTask = this.createTask(text, date);
    newData.push(newTask)

    this.props.submitMethod(newData)
  }

  render() {
    return (
      <form className="form" 
        onSubmit={this.submitMethodWrapper}>
        <input type="text" placeholder="What do u gonna do?" className="input-for-task" onChange={this.handleChange}></input>
        <DateMaker />
        <button className="add-task-button" type="type">Add</button>
      </form>
    )
  }
};

const mapStateToProps = ({data}) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(AddTaskForm);