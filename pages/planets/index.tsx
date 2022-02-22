import { FC } from 'react';

import Planet from '../../Components/Planets/Planets';
import Home from '../../helpers/Home';

const Planets: FC = () => {
  return (
    <Home RightLayoutContent={Planet} />
  )
}

export default Planets;
