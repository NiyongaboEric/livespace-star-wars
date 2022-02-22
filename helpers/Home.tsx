import { useContext, FC } from 'react';
import Head from 'next/head';

import { StarWarsContext } from '../Context/StarWarsContext';
import LeftLayout from "../Components/Layout/LeftLayout";
import TopLayout from "../Components/Layout/TopLayout";
import layoutStyle from '../styles/layout.module.css';
import { hidesSidePanelStyle, showSidePanelStyle } from '../constants/starwarsStyle';


const Home: FC<any> = ({  RightLayoutContent }) => {
  const { toggleSidePanel } = useContext(StarWarsContext);
  const showHideSidePanel = toggleSidePanel ? showSidePanelStyle : hidesSidePanelStyle;
  return (
    <>
      <Head>
        <title>Stars wars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={layoutStyle.container} style={ showHideSidePanel }>
        <TopLayout />
        <LeftLayout />
        <RightLayoutContent />
      </main>
    </>
  )
}

export default Home;
