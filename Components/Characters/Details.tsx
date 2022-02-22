import { FC, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Route from 'next/router';

import { useSingleCharacters } from '../../hooks/useCharacters';
import { StarWarsContext  } from '../../Context/StarWarsContext';
import { ErrorsMessage, LoadingSpinner } from './Index';
import { characterImage } from '../../constants/starwarsImages';
import detailsStyle from '../../styles/home.module.css';

export const extractLink = (link: string) => link.split('/api')[1];

const ShowData = () => {
  const { singleDetails }: any = useContext(StarWarsContext);  
  return (
    <div className={detailsStyle.singleCharacter}>
      <Image
        src={characterImage[Number(Route.query.id)]}
        alt="Character icon SVG" 
      />
      <span className={detailsStyle.characterTitle}>{singleDetails.name}</span>
      <span className={detailsStyle.vehiclePlanetTitle}>View vehicles</span>
      <div className={detailsStyle.vehiclePlanet}>
        {
          singleDetails.vehicles.length === 0
            ? (
              <Link href='/characters'>
                <a>
                  No Vehicles
                </a>
              </Link>
            ) 
            : singleDetails.vehicles.map((link: string, key: string) => (
              <Link key={key} href={extractLink(link)}>
                <a>
                  {`Vehicle ${key+1}`}
                </a>
              </Link>
            )
          )
        }
      </div>

      <span className={detailsStyle.vehiclePlanetTitle}>View planets</span>
      <div className={detailsStyle.vehiclePlanet}>
        {
          singleDetails.homeworld ? (
            <Link
              href={extractLink(singleDetails.homeworld)}
            >
              <a>
                Visit me 
              </a>
            </Link>
          )  : (
            <Link
              href={'/characters'}
            >
              <a>
                No Planet
              </a>
            </Link>
          )
        }
      </div>
    </div>
  )
}
const Details: FC = () => {
  const { singleDetails } = useContext(StarWarsContext);
  useSingleCharacters();

  return (
    <section>
      <LoadingSpinner />
      <ErrorsMessage />
      { Object.keys(singleDetails).length > 0 && (<ShowData />) }
    </section>
  )
}

export default Details;
