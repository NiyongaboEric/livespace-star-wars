import { SideItemsMenu } from '../../helpers/SideItemsMenu';
import layoutStyle from '../../styles/layout.module.css';

const TopLayout = () => {
	return (
		<section className={layoutStyle.topSideContainer}>
			<SideItemsMenu />
		</section>
	);
};

export default TopLayout;
