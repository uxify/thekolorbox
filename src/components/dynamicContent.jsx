import React, { Component } from 'react';

class DynamicContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: null
    }
  }
  componentDidMount() {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <div>Error Loading Page</div>
    }
    return this.props.children(this.state.component)
  }
}

export default DynamicContent