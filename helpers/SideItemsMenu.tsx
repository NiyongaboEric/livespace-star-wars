import { useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';

import { starwarsListMenu } from "../constants/starwarsMenu";
import { hideStyle, showSpanStyle } from "../constants/starwarsStyle";
import { StarWarsContext } from "../Context/StarWarsContext";

export const SideItemsMenu = () => {
	const { toggleSidePanel } = useContext(StarWarsContext);
	const showHideLogo = toggleSidePanel ? showSpanStyle : hideStyle;
	return (
		<ul>
			{
				starwarsListMenu.map((items, key) =>  (
					<li key={key}>
						<Link href={items.link}>
							<a>
								<Image
									src={items.icon}
									alt="Star wars Logo"
								/>
								<span style={ showHideLogo }>{ items.title }</span>
							</a>
						</Link>
					</li>
					)
				)
			}
		</ul>
	);
};
