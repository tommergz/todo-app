import React from 'react';
import './tools.css';
import DateMaker from '../date-maker/dateMaker';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class Tools extends React.Component {

  filterByTextMethodWrapper = (e) => {
    let newValue = e.target.value;
    this.props.filterByTextMethod(newValue)
  }

  filterByDateMethodWrapper = (e) => {
    e.preventDefault();
    let newValue = e.target[0].value;
    this.props.filterByDateMethod(newValue)
  }

  render() {
    const {sortByTextMethod, sortByDateMethod, resetDateFilter, sort, sortByText, sortByDate, filterByText, filterByDate} = this.props;
    let textSortSign = "•";
    let dateSortSign = "•";
    const sortingByIncreasingSign = "▼";
    const sortingByDescendingSign  = "▲";
    if (sort === "sortByText") {
      textSortSign = sortByText ? sortingByIncreasingSign : sortingByDescendingSign;
      dateSortSign = "•";
    } 
    if (sort === "sortByDate") {
      dateSortSign = sortByDate ? sortingByIncreasingSign : sortingByDescendingSign;
      textSortSign = "•";
    }
    return (
      <div className="tools">
        <div className="sort">
          <button className="sort-button sort-by-text" onClick={() => {sortByTextMethod(sortByText)}}>SORT BY TEXT {textSortSign}</button>
          <button className="sort-button" onClick={() => {sortByDateMethod(sortByDate)}}>SORT BY DATE {dateSortSign}</button>
        </div>
        <div className="filter">
          <span>Filter by text</span>
          <input id="filter-by-text" className="input-button" onChange = {this.filterByTextMethodWrapper} value={filterByText}></input>
          <span>Filter by date</span>
          <form className="filter-form" onSubmit={this.filterByDateMethodWrapper}>
            <div id="date-input-wrapper" className="date-input">
              <DateMaker filterByDate={filterByDate} />
            </div>
            <button className="filter-button" type="type">FILTER</button>
          </form>
          <button className="reset" onClick={resetDateFilter}>RESET DATE FILTER</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({sort, sortByText, sortByDate, filterByText, filterByDate}) => {
  return {
    sort,
    sortByText,
    sortByDate,
    filterByText, 
    filterByDate
  };
};

export default connect(mapStateToProps, actions)(Tools);