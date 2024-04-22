import React from "react";
import { Button, Input } from "reactstrap";

class Counter extends React.Component {

  render() {
    return (
      <div className="d-flex align-items-center">
        <Button color="danger" className="m-2" onClick={this.props.dec}>
          -
        </Button>
        <Input
            min="1" 
            max="10" 
            type="number" 
            value={this.props.count} 
            onChange={ (e)=> {
                this.props.set(e.target.value);
                }
            } 
        />
        <Button color="success" className="m-2" onClick={this.props.inc}>
          +
        </Button>
      </div>
    );
  }
}

export default Counter;
