export interface IStarWarsContextType {
  toggleSidePanel: boolean,
  openHideSidePanel: () => void,
  characters: object[],
  addCharacters: (items: []) => void,
  fetchMoreCharacters: boolean,
  addMoreCharacters: (bool: boolean)  => void;
  errors: string;
  addErrors: (error: any) => void;
  loading: boolean,
  showHideLoading: (bool: boolean) => void,
  singleDetails: object,
  updateSingleDetails: (items: object) => void,
  vehicles: object[],
  addVehicles: (items: []) => void;
  fetchMoreVehicles: boolean;
  addMoreVehicles: (bool: boolean)  => void;
  viewVehicleDetails: object;
  updateVehicleSingleDetails: (items: object) => void,
};
