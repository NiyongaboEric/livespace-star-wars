import charactersSVG from '../public/images/characters.svg';
import planetSVG from '../public/images/planet.svg';
import vehiclesSVG from '../public/images/vehicles.svg';

export const starwarsListMenu = [
	{
		icon: charactersSVG,
		title: 'Characters',
		link: '/characters',
	},
	{
		icon: vehiclesSVG,
		title: 'Vehicles',
		link: '/vehicles',
	},
	{
		icon: planetSVG,
		title: 'Planets',
		link: '/planets'
	},
];
