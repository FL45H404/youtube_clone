import React from "react";

class Errorboundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.log(err, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong.</h1>;
    }
    return this.props.children;
  }
}
export default Errorboundary;
