import React from 'react';


class ResetButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
    };

    this.handleReset = this.handleReset.bind(this)
  }

  handleReset(){
    this.setState({ confirm: false });
    this.props.onReset();
  }

  render() {
    if (!this.state.confirm){
      return (
        <button className="btn btn-warning pull-xs-left resetBtn"
                onClick={() => this.setState({ confirm: true })}>
          Reset
        </button>
      );
    }

    return (
      <div className="pull-xs-left">
        <button className="btn btn-warning resetBtn"
                onClick={() => this.setState({ confirm: false })}>
          Reset?
        </button>
        &nbsp;
        <button className="btn btn-danger btn-sm" onClick={this.handleReset}>
          Yes
        </button>
        &nbsp;
        <button className="btn btn-default btn-sm"
                onClick={() => this.setState({ confirm: false })}>
          No
        </button>
      </div>
    );
  }
}

export default ResetButton;
