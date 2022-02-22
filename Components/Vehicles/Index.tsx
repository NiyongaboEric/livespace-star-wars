import { FC, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useVehicles } from '../../hooks/useVehicles';
import { StarWarsContext } from '../../Context/StarWarsContext';
import { EmptyData, ErrorsMessage, LoadingSpinner } from '../Characters/Index';
import { vehicleImage } from '../../constants/starwarsImages';
import vehicleStyle from '../../styles/home.module.css'

const ShowData: FC = () => {
  const { vehicles } = useContext(StarWarsContext); 
  return (
    <div className={vehicleStyle.characterContainer}>
      {
        vehicles.map((item: any, key) => {
          console.log(item);
          
          return (
            <div className={vehicleStyle.characterLink} key={key}>
              <Image
                src={vehicleImage[key].image}
                alt="Vehicle icon SVG" 
              />
              <span className={vehicleStyle.characterDetails}>Consumables: <strong>{item.consumables}</strong></span>
              <span className={vehicleStyle.characterDetails}>Passengers: <strong>{item.passengers}</strong></span>
              <span className={vehicleStyle.characterDetails}>Manufacturer: <strong>{item.manufacturer}</strong></span>
              <span className={vehicleStyle.characterDetails}>Cargo capacity: <strong>{item.cargo_capacity}</strong></span>
              <span className={vehicleStyle.characterDetails}>Cost in credits: <strong>{item.cost_in_credits}</strong></span>
              <span className={vehicleStyle.characterDetails}>Max atmosphering speed: <strong>{item.max_atmosphering_speed}</strong></span>
            </div>
          );
        }
        )
      }
    </ div>
  )
};

const ListVehicles: FC = () => {
  const { vehicles, loading } = useContext(StarWarsContext); 
  return (
    <>
      {
        vehicles.length === 0 && !loading ? <EmptyData />  : <ShowData />
      }
    </>
  );
};

const Vehicles: FC = () => {
	useVehicles();
  return (
    <section>
      <LoadingSpinner />
      <ErrorsMessage />
      <ListVehicles />
    </section>
  )
}

export default Vehicles;
