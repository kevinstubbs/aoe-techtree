import _ from 'lodash';
import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  civilizationsByName: {},
  selectedCiv: undefined
});

export default function reduce (state = initialState, action = {}) {
  switch (action.type) {
    case types.CIVILIZATIONS_FETCHED:
      return state.merge({
        civilizationsByName: action.civilizationsByName,
      });

    case types.CIVILIZATION_CHANGED:
      return state.merge({
        selectedCiv: action.selectedCiv
      });

    default:
      return state;
  }
}

export function getSelectedCiv (state) {
  return state.civilizations.selectedCiv;
}

export function getCivilizationsByName (state) {
  return state.civilizations.civilizationsByName;
}

export function getCivilizationsNameArray (state) {
  return _.keys(state.civilizations.civilizationsByName);
}
