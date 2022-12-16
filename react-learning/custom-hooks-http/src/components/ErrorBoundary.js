import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true, error: error });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.error.toString()}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
