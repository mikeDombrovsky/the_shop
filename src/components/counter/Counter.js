import React from "react";
import { Button, Input } from "reactstrap";

class Counter extends React.Component {

  render() {
    return (
      <div className="d-flex align-items-center">
        <Button color="danger" className="m-2" onClick={e => {
            e.stopPropagation()
            this.props.dec(e)
        }}>
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
            onClick={(e) => e.stopPropagation()}
        />
        <Button color="success" className="m-2" onClick={e => {
            e.stopPropagation()
            this.props.inc(e)
        }}>
          +
        </Button>
      </div>
    );
  }
}

export default Counter;
