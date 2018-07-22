import React from "react";

export class OpenMarketTable extends React.Component {
  render() {
    return (
      <div className="MarketTable">
        <table>
          <thead>
            <tr>
              <th>IDs</th>
              <th>Response</th>
              <th>Author</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>{this.props.marketTRs}</tbody>
        </table>
      </div>
    );
  }
}
