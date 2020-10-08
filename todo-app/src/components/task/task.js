import React from 'react';
import './task.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const Task = ({id, done, text, date, doneMethod, deleteMethod, data}) => {

  let btnClassName = 'margin-for-button';
  let disabled = false;

  let task = 'current-task';
  if (done) {
    btnClassName += ' done';
    disabled = true;
    task += ' task-done';
  }

  const createDoneTask = (id, data) => {
    const newData = data.map((item) => {
      if (item.id === id) { 
        return {
          ...item,
          done: true
        } 
      }
      return item;
    });
    doneMethod(newData)
  }

  const deletedTask = (id, data) => {
    const newData = data.filter(item => item.id !== id);
    deleteMethod(newData)
  }

  return (
    <div id={id} className={task}>
      <div className="task-description">
        <span>{text}</span>
        <span>{date}</span>
      </div>
      <div className="buttons">
        <button className={btnClassName} disabled={disabled} onClick={() => {createDoneTask(id, data)}}>DONE</button>
        <button className={btnClassName} onClick={() => {deletedTask(id, data)}}>DELETE</button>
      </div> 
    </div>
  )

}

const mapStateToProps = ({data}) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Task);
