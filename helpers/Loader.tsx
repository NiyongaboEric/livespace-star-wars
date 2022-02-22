import { FC } from 'react';
import loaderStyle from '../styles/loader.module.css';

export const Loader: FC = () => {
	return (
		<div className={loaderStyle.loader}></div>
	)
};
