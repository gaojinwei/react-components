import React from 'react';

class Tabs extends React.Component {
  render() {
    const { value, onChange, children } = this.props;
    let elements = React.Children.toArray(children);
    elements = elements.map((child, index) =>
      React.cloneElement(child, { index, onChange, value })
    );
    return (
      <ul
        style={{
          display: 'flex',
          margin: '0',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0,
          fontSize: '14px'
        }}>
        {elements}
      </ul>
    );
  }
}

export default Tabs;
