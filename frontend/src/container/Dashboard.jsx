import React, { PureComponent } from 'react'
import Condition from '../components/Condition/Condition';
import './Dashboard.css';

export default class Dashboard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/dev/api/condition")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.conditions
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="dashboard-container">
          {items.map((item, index) => (
            <div key={index} className="condition">
              <Condition data={item} />
            </div>
          ))}
        </div>
      );
    }
  }
}
