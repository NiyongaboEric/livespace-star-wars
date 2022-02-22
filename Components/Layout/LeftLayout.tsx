import Image from 'next/image';
import { useContext } from 'react';

import hamburgerSVG from '../../public/images/hamburger.svg';
import starWarsSVG from '../../public/images/star-wars-logo.svg';
import { StarWarsContext } from '../../Context/StarWarsContext';
import { hideStyle, showStyle } from '../../constants/starwarsStyle';
import layoutStyle from '../../styles/layout.module.css';
import { SideItemsMenu } from '../../helpers/SideItemsMenu';

const LeftLayout = () => {
	const { toggleSidePanel, openHideSidePanel } = useContext(StarWarsContext);
	const showHideLogo = toggleSidePanel ? showStyle : hideStyle;

	return (
		<section className={layoutStyle.leftSideContainer}>
			<div className={layoutStyle.logoContainer}>
				<div
					className={layoutStyle.toggleIcon}
					onClick={ openHideSidePanel }
				>
					<Image
						src={hamburgerSVG}
						alt="Toggle icon SVG"
					/>
				</div>
				<div className={layoutStyle.logoIcon} style={ showHideLogo }>
					<Image
						src={starWarsSVG}
						alt="Star wars Logo"
					/>
					<span>Star wars</span>
				</div>
			</div>
			<SideItemsMenu />
		</section>
	)
}

export default LeftLayout
