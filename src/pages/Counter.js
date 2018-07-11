import React from 'react';
import { Link } from '../routes';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>

<Link route='LoginForm' >
    Go to hello-world category
</Link>      
      </div>
    );
  }
}
export default Counter;