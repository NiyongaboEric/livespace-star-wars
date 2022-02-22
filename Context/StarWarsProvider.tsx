import { FC, useState } from "react";
import { StarWarsContext, starWarsContextDefaultValues } from './StarWarsContext';
import { IStarWarsContextType } from './types';

export const StarWarsProvider: FC = ({ children }) => {
  const [toggleSidePanel, setToggleSidePanel] = useState<boolean>(starWarsContextDefaultValues.toggleSidePanel);
  const openHideSidePanel = () => setToggleSidePanel((toggleSidePanel: boolean) => !toggleSidePanel);

  const [characters, setCharacters] = useState<object[]>([]);
  const addCharacters = (items: []) => setCharacters((data) => [...data, ...items]);

  const [fetchMoreCharacters, setFetchMoreCharacters] = useState<boolean>(starWarsContextDefaultValues.fetchMoreCharacters);
  const addMoreCharacters = (isFectching: boolean) => setFetchMoreCharacters(isFectching);

  const [errors, setErrors] = useState<any>(starWarsContextDefaultValues.errors);
  const addErrors = (incomingError: any) => setErrors(incomingError);

  const [loading, setLoading] = useState<boolean>(starWarsContextDefaultValues.loading);
  const showHideLoading = (isLoading: boolean) => setLoading(isLoading);

  const [singleDetails, setSingleDetails] =useState<object>(starWarsContextDefaultValues.singleDetails);
  const updateSingleDetails = (items: object) => setSingleDetails(items);

  const [vehicles, setVehicles] = useState<object[]>([]);
  const addVehicles = (items: []) => setVehicles((data) => [...data, ...items]);

  const [fetchMoreVehicles, setFetchMoreVehicles] = useState<boolean>(starWarsContextDefaultValues.fetchMoreVehicles);
  const addMoreVehicles = (isFectching: boolean) => setFetchMoreVehicles(isFectching);
  
  const [viewVehicleDetails, setViewVehicleDetails] = useState<object>(starWarsContextDefaultValues.viewVehicleDetails);
  const updateVehicleSingleDetails = (items: object) => setViewVehicleDetails(items);

  const value: IStarWarsContextType = {
    toggleSidePanel,
    openHideSidePanel,
    characters,
    addCharacters,
    fetchMoreCharacters,
    addMoreCharacters,
    errors,
    addErrors,
    loading,
    showHideLoading,
    singleDetails,
    updateSingleDetails,
    vehicles,
    addVehicles,
    fetchMoreVehicles,
    addMoreVehicles,
    viewVehicleDetails,
    updateVehicleSingleDetails,
  }
  
  return (
    <>
      <StarWarsContext.Provider value={value}>
        {children}
      </StarWarsContext.Provider>
    </>
  )
}
