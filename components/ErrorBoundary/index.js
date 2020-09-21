import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'

class ErrorBoundary extends PureComponent {
  componentDidCatch() {
    const router = this.props.router

    router.push('/404')
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
