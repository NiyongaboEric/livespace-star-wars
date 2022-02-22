import { createContext } from "react";
import { IStarWarsContextType } from './types'

export const starWarsContextDefaultValues: IStarWarsContextType = {
  toggleSidePanel: true,
  openHideSidePanel: () => {},
  characters: [],
  addCharacters: () => {},
  fetchMoreCharacters: false,
  addMoreCharacters: () => {},
  errors: '',
  addErrors: () => {},
  loading: true,
  showHideLoading: () => {},
  singleDetails: {},
  updateSingleDetails: () => {},
  vehicles: [],
  addVehicles: () => {},
  fetchMoreVehicles: false,
  addMoreVehicles: () => {},
  viewVehicleDetails: {},
  updateVehicleSingleDetails: () => {},
};

export const StarWarsContext = createContext<IStarWarsContextType>(
  starWarsContextDefaultValues
);
