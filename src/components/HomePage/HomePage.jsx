import React, { Component } from 'react';
import Container from 'components/Container/Container.jsx';
import web3 from 'web3';
import saleAuctionForm from 'views/contract.jsx';


class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          kittyID: '',
          showBattle: false
      }

      new web3.eth.Contract(saleAuctionForm.abi)
    }
    declareWar = () => {
        console.log('declareWar', this.state.kittyID);
        //TODO get kitty
        this.setState({
            showBattle: true
        });
    }
    handleChange = (event) => {
        this.setState({kittyID: event.target.value});
    }

    render() {
        return (
          <Container>
            { !this.state.showBattle ?
                (
                  <div>
                    <div>Enter Kitty ID:</div>
                    <input type="text" value={this.state.kittyID} onChange={this.handleChange}/>
                    <button onClick={this.declareWar}>Declare war!</button>
                  </div>
                ) : (
                  <div>
                    <div>Battle:</div>
                    <div className="KittyMonster KittyMonster--kitty1">
                      <img src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/635838.svg" alt=""/>
                        <div>1000pts</div>
                    </div>
                      <span>vs</span>
                    <div className="KittyMonster KittyMonster--kitty2">
                        <img src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/562940.png" alt=""/>
                        <div>100pts</div>
                    </div>
                  </div>
                )}
          </Container>
        );
    }
}

export default HomePage;
