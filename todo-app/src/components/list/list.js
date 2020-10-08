import React from 'react';
import './list.css';
import Task from '../task/task';
import { connect } from 'react-redux';

const List = ({data, sort, sortByText, sortByDate, filterByText, filterByDate}) => {
  let allTasks = [...data];

  if (filterByText) {
    allTasks = allTasks.filter(task => task.text.toLowerCase().includes(filterByText))
  }

  if (filterByDate) {
    allTasks = allTasks.filter(task => task.date.includes(filterByDate))
  }

  if (sort) {
    if (sort === "sortByText") {
      let direction = sortByText === true ? [1,-1] : [-1,1];
      const sortingTasksByText = (a, b) => {
        if (a.text.toLowerCase() > b.text.toLowerCase()) return direction[0];
        if (a.text.toLowerCase() === b.text.toLowerCase()) return 0; 
        if (a.text.toLowerCase() < b.text.toLowerCase()) return direction[1];  
      }

      allTasks.sort(sortingTasksByText)

    } 
    if (sort === "sortByDate") {
      let direction = sortByDate === true ? [1,-1] : [-1,1];
      const sortingTasksByDate = (a, b) => {
        if (+new Date(a.date) > +new Date(b.date)) return direction[0];
        if (+new Date(a.date) === +new Date(b.date)) return 0; 
        if (+new Date(a.date) < +new Date(b.date)) return direction[1];  
      }
      allTasks.sort(sortingTasksByDate)
    }
  }
  
  const items = allTasks.map((item) => {
    const { id, done, text, date } = item;
    return ( 
      <li key={id} className="task-wrapper">
        <Task 
          id = {id}
          done = {done}
          text = {text}
          date = {date}
        />
      </li>
    )
  })
  
  return <ul className="list">{ items }</ul>
}

const mapStateToProps = ({data, sort, sortByText, sortByDate, filterByText, filterByDate}) => {
  return {
    data,
    sort, 
    sortByText,
    sortByDate,
    filterByText, 
    filterByDate
  };
};

export default connect(mapStateToProps)(List);