import { FC, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { StarWarsContext } from '../../Context/StarWarsContext';
import { Loader } from '../../helpers/Loader';
import { useCharacters } from '../../hooks/useCharacters';
import { characterImage } from '../../constants/starwarsImages';
import characterStyle from '../../styles/home.module.css';

export const LoadingSpinner: FC = () => {
  const { loading } = useContext(StarWarsContext);
  return (
    <>
      { loading && <Loader /> }
    </>
  );
};

export const ErrorsMessage: FC = () => {
  const { errors, loading } = useContext(StarWarsContext);
  
  return (
    <>
      { (errors && !loading) &&
        <div style={{
          textAlign: 'center',
          margin: '0px 0px 10px 0px',
          backgroundColor: '#f66',
          padding: '12px' }}
        >
          OOPs :( {`${errors}`}
        </div>
      }
    </>
  );
};

export const EmptyData: FC = () => {
  return (
    <>No data</>
  );
};

const ShowData: FC = () => {
  const { characters } = useContext(StarWarsContext); 
  return (
    <div className={characterStyle.characterContainer}>
      {
        characters.map((item: any, key) => {
          return (
            <Link
              href={`/characters/${key}`}
              key={key}
            >
              <a className={characterStyle.characterLink}>
                <Image
                  src={characterImage[key]}
                  alt="Character icon SVG" />
                <span className={characterStyle.characterTitle}>{item.name}</span>
              </a>
            </Link>
          );
        }
        )
      }
    </ div>
  )
};

const ListCharacters: FC = () => {
  const { characters, loading } = useContext(StarWarsContext); 
  return (
    <>
      {
        characters.length === 0 && !loading ? <EmptyData />  : <ShowData />
      }
    </>
  );
};

const Characters: FC = () => {
  useCharacters();
  return (
    <section>
      <LoadingSpinner />
      <ErrorsMessage />
      <ListCharacters />
    </section>
  )
}

export default Characters;
