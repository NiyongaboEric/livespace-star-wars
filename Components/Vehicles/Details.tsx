import { FC, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { StarWarsContext } from '../../Context/StarWarsContext';
import { useSingleVehicles } from '../../hooks/useVehicles';
import { ErrorsMessage, LoadingSpinner } from '../Characters/Index';
import { vehicleImage } from '../../constants/starwarsImages';
import detailsStyle from '../../styles/home.module.css';
import { useFetchConnected } from '../../hooks/useCharacters';


const ShowData = () => {
  const { viewVehicleDetails }: any = useContext(StarWarsContext);
  const findId = useRouter().query['id'];
  const findImage: any = vehicleImage.filter(item => item.imageId === findId);

  return (
    <div className={detailsStyle.singleCharacter}>
      <Image
        src={findImage[0].image}
        alt="Vehicle icon SVG" 
      />
      <span className={detailsStyle.characterTitle}>{viewVehicleDetails.name}</span>
      <span className={detailsStyle.characterTitle}>
        Vehicle class: <strong>{viewVehicleDetails.vehicle_class}</strong>
      </span>

      <span className={detailsStyle.vehiclePlanetTitle}>Character connected</span>
      <div className={detailsStyle.characterConnected}>
        {
          viewVehicleDetails.pilots.length === 0
            ? (
              <Link href='/characters'>
                <a>
                  No pilot connected
                </a>
              </Link>
            ) 
            : (
              viewVehicleDetails.pilots.map((link: string, key: string) => {
                const { data }: any = useFetchConnected(link).fetchConnectedInfo;
                return (
                  <div key={key}>
                    {
                      data && <strong><span>{ data.name }</span></strong>
                    }
                  </div>
                  )
                }
              )
            )
        }
      </div>
    </div>
  )
}

const Vehicles: FC = () => {
  const { viewVehicleDetails } = useContext(StarWarsContext);
  useSingleVehicles();

  return (
    <section>
      <LoadingSpinner />
      <ErrorsMessage />
      { Object.keys(viewVehicleDetails).length > 0 && (<ShowData />) }
    </section>
  )
}

export default Vehicles;
