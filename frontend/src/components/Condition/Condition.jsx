import React, { PureComponent } from 'react';
import './Condition.css';

export default class Condition extends PureComponent {
  render() {
    const { label, snippet, image } = this.props.data;

    return (
      <div className="condition-container">
        <div>
          <img src={image} className="image"/>
        </div>
        <div className="label">{label}</div>
        { snippet &&
          <div className="snippet">
            {snippet.substr(0, 40)}
            {
              snippet.length > 40 &&
              <>
                <span>...</span>
                <span className="more">find out more</span>
              </>
            }
          </div>
        }
      </div>
    )
  }
}
