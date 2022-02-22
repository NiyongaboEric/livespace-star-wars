import { FC } from 'react';

import Character from '../Components/Characters/Index';
import Home from '../helpers/Home';

const Index: FC = () => {
  return (
    <Home RightLayoutContent={Character} />
  )
}

export default Index;
