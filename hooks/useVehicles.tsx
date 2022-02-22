import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import {  StarWarsContext } from '../Context/StarWarsContext';
import { axiosInstance } from '../utils/axiosConfig';

export const useSingleVehicles = () => {
	const id = Number(useRouter().query['id']);
	const {
		showHideLoading, addErrors, vehicles, updateVehicleSingleDetails,
	} = useContext(StarWarsContext);
	console.log(useRouter().query);

	useEffect(() => {
		const fetchVehicle = async () => {
			try {
				// Vehicle is not available
				if (!isNaN(id)) {
					const fetchData = await axiosInstance.get(`/vehicles/${id}`);
					updateVehicleSingleDetails(fetchData.data);
					showHideLoading(false);
					addErrors('');
				}
			} catch (error) {
				addErrors(error);
				showHideLoading(false);
			}
		}
		fetchVehicle();
	}, [id]);
};

export const useVehicles = () => {
	const {
		showHideLoading, addErrors, 
		vehicles, addVehicles, fetchMoreVehicles,
	} = useContext(StarWarsContext);

	useEffect(() => {
		const fetchVehicles = async () => {
			try {
				if (vehicles.length === 0 || fetchMoreVehicles) {
					const fetchData = await axiosInstance.get('/vehicles');
					showHideLoading(false);
					addVehicles(fetchData.data.results);
					addErrors('');
				}
			} catch (error) {
				addErrors(error);
				showHideLoading(false);
			}
		}
		fetchVehicles();
	 }, []);
	return;
};
