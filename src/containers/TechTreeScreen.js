import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TechTreeScreen.css';
import * as techTreeActions from '../store/techtree/actions';
import * as techTreeSelectors from '../store/techtree/reducer';
import ListView from '../components/ListView';
import * as types from '../store/techtree/actionTypes';

class TechTreeScreen extends Component {
  componentDidMount() {
    this.props.dispatch(techTreeActions.fetchCivilizations());
  }

  render () {
    if (!this.props.rowsById || !this.props.selectedCiv) return this.renderLoading();
  
    return (
      <div className="TechTreeScreen">
        <div>
          <select onChange={e => this.changeCivilization(_.get(this.props.rowsById, e.target.value))} value={this.props.selectedCiv.name}>
              {this.props.rowsIdArray.map((listValue) => {
                return <option value={listValue}>{_.get(this.props.rowsById, listValue).name}</option>;
              })}
          </select>
          {this.renderCivInfo(this.props.selectedCiv)}
        </div>
        <div>
            <div>
              Dark Age
            </div>
            <div>
              Feudal Age
            </div>
            <div>
              Castle Age
            </div>
            <div>
              Imperial Age
            </div>
        </div>
      </div>
    );
  }

  changeCivilization (selectedCiv) {
    this.props.dispatch({ type: types.CIVILIZATION_CHANGED, selectedCiv });
  }

  renderLoading () {
    return (
      <p>Loading...</p>
    );
  }

  renderCivInfo (civ) {
    return (
      <div>
        <h3>{civ.name}</h3>

        <h3>Unique Bonuses</h3>
        <ul>
            {civ.civilizationBonuses.map(function(listValue){
              return <li>{listValue}</li>;
            })}
        </ul>

        <h3>Team Bonuses</h3>
        <ul>
            {civ.teamBonuses.map(function(listValue){
              return <li>{listValue}</li>;
            })}
        </ul>

        <h3>Unique Units</h3>
        <ul>
            {civ.uniqueUnits.map(function(listValue){
              return <li>{listValue}</li>;
            })}
        </ul>

        <h3>Unique Technologies</h3>
        <ul>
            {civ.uniqueTechnologies.map(function(listValue){
              return <li>{listValue}</li>;
            })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    rowsById: techTreeSelectors.getCivilizationsByName(state),
    rowsIdArray: techTreeSelectors.getCivilizationsNameArray(state),
    selectedCiv: techTreeSelectors.getSelectedCiv(state)
  };
}

export default connect(mapStateToProps)(TechTreeScreen);
