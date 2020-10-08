import React from "react";
import "./dateMaker.css" 
 
class DateMaker extends React.Component {
  constructor(props) {
    super(props);
    this.filterInputByDate = React.createRef();
  }
 
  handleChange = () => {
    const input = this.filterInputByDate.current;
    input.className ='input-for-date';
  };
 
  render() {
    return (
      <div className="date-list">
        <input 
          defaultValue={this.props.filterByDate}
          ref={this.filterInputByDate}
          className="input-for-date"
          type="date" name="trip-start"
          onChange={this.handleChange}  
        >
        </input>
      </div>
    );
  }
}

export default DateMaker;