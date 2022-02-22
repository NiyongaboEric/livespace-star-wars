import { FC } from 'react';

import Character from '../../Components/Characters/Index';
import Home from '../../helpers/Home';

const Characters: FC = () => {
  return (
    <Home RightLayoutContent={Character} />
  )
}

export default Characters;
