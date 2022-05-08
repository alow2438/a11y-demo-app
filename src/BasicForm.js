import './App.css';
import './index.css';
import * as React from 'react';

class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      console.log('The following name was submitted', this.state.value);
      event.preventDefault();
    }
  
  render() {
    return (
      <div><form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default BasicForm;