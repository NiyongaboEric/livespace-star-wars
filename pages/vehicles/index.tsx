import { FC } from 'react';

import Vehicle from '../../Components/Vehicles/Index';
import Home from '../../helpers/Home';

const Vehicles: FC = () => {
  return (
    <Home RightLayoutContent={Vehicle} />
  )
}

export default Vehicles;
