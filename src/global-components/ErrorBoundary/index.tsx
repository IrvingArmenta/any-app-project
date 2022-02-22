import React, { ErrorInfo, Component } from 'react';

class ErrorBoundary extends Component<unknown, { hasError: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.error(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong...</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
