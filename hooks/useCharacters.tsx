import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {  StarWarsContext } from '../Context/StarWarsContext';
import { axiosInstance } from '../utils/axiosConfig';


export const useCharacters = () => {
	const {
		addCharacters, showHideLoading, addErrors,
		fetchMoreCharacters, characters
	} = useContext(StarWarsContext);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				if (characters.length === 0 || fetchMoreCharacters) {
					const fetchData = await axiosInstance.get('/people');
					showHideLoading(false);
					addCharacters(fetchData.data.results);
					addErrors('');
				}
			} catch (error) {
				addErrors(error);
				showHideLoading(false);
			}
		}
		fetchCharacters();
	 }, []);
	return;
};

export const useSingleCharacters = () => {
	const id = Number(useRouter().query['id']);
	const {
		showHideLoading, addErrors, characters, updateSingleDetails,
	} = useContext(StarWarsContext);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				// Character is available
				if (characters.length > 0) {
					return updateSingleDetails(characters[id]);
				}

				// Character is not available
				if (!isNaN(id)) {
					const fetchData = await axiosInstance.get(`/people/${id + 1}`);
					showHideLoading(false);
					updateSingleDetails(fetchData.data);
					addErrors('');
				}
			} catch (error) {
				addErrors(error);
				showHideLoading(false);
			}
		}
		fetchCharacters();
	}, [id]);
};

export const useFetchConnected = (link: string) => {
	const [fetchConnectedInfo, setFetchConnectedInfo] = useState({});
	const { showHideLoading, addErrors } = useContext(StarWarsContext);
	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const fetchData = await axiosInstance.get(link);
				setFetchConnectedInfo(fetchData)
				showHideLoading(false);
				addErrors('');
			} catch (error) {
				addErrors(error);
				showHideLoading(false);
			}
		}
		fetchCharacters();
	}, [link]);
	return {
		fetchConnectedInfo
	};
};
