import React from 'react';

class LoadingMessage extends React.Component {
  constructor(props) {
    super(props);
    this.dissableMessage = this.dissableMessage.bind(this);

    this.state = {
      hideMessage: false,
    };

    this.timer = setTimeout(this.dissableMessage, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  dissableMessage() {
    this.setState({hideMessage: true});
  }

  render() {
    const {hideMessage} = this.state;

    if (!hideMessage) {
      return <div>Loading...</div>;
    }

    return null
  }
}

export default LoadingMessage;