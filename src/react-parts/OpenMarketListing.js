import React from "react";

export class OpenMarketListing extends React.Component {
  render() {
    return (
      <tr key={this.props.Number}>
        <td>{this.props.Number}</td>
        <td>{this.props.Response}</td>
        <td>{this.props.Author}</td>
        <td>{this.props.Cost}</td>
      </tr>
    );
  }
}
