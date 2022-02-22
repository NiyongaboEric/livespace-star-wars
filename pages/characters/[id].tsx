import { FC } from 'react';

import CharacterDetails from '../../Components/Characters/Details';
import Home from '../../helpers/Home';

const SingleCharacter: FC = () => {
  return (
    <Home RightLayoutContent={CharacterDetails} />
  )
}

export default SingleCharacter;
