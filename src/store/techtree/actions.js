import _ from 'lodash';
import * as types from './actionTypes';
import civilizationService from '../../services/civilization';

export function fetchCivilizations () {
  return async(dispatch, getState) => {
    try {
      const civilizationsArray = (await civilizationService.fetchCivilizations()).sort((a, b) => a.name.localeCompare(b.name)); 
      const civilizationsByName = _.keyBy(civilizationsArray, (civilization) => civilization.name);

      dispatch({ type: types.CIVILIZATION_CHANGED, selectedCiv: civilizationsArray[0] });
      dispatch({ type: types.CIVILIZATIONS_FETCHED, civilizationsByName });
    } catch (error) {
      console.error(error);
    }
  }
}
