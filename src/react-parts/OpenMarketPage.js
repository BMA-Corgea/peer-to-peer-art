import React from "react";
import { OpenMarketTable } from "./OpenMarketTable";
import { OpenMarketListing } from "./OpenMarketListing";

export class OpenMarketPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeListings: 0,
      marketTRs: []
    };

    this.handleAddListing = this.handleAddListing.bind(this);
    this.pickResponse = this.pickResponse.bind(this);
  }

  pickResponse() {
    let possibleResponses = [
      "Topographical Map",
      "Character Portrait",
      "Unfinished Story",
      "Manga Chapter"
    ];

    let responseRoll = Math.floor(Math.random() * (4 - 0)) + 0;

    if (responseRoll === 0) {
      return possibleResponses[0];
    } else if (responseRoll === 1) {
      return possibleResponses[1];
    } else if (responseRoll === 2) {
      return possibleResponses[2];
    } else if (responseRoll === 3) {
      return possibleResponses[3];
    }
  }

  handleAddListing() {
    this.state.marketTRs.push(
      <OpenMarketListing
        Number={this.state.activeListings}
        Response={this.pickResponse()}
        Author="Me!"
        Cost=".054 ETH"
        key={this.state.activeListings}
      />
    );

    this.setState({
      activeListings: this.state.activeListings + 1
    });
  }

  render() {
    return (
      <div>
        <h3>Hello! Welcome to the Market Page!</h3>
        <button onClick={this.handleAddListing}>Add active listing</button>
        <br />
        <br />
        <h3>Number of active listings: {this.state.activeListings}</h3>
        <br />
        <br />
        <OpenMarketTable marketTRs={this.state.marketTRs} />
      </div>
    );
  }
}
