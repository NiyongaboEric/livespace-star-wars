import { FC } from 'react';

import Home from '../../helpers/Home';
import Vehicle from '../../Components/Vehicles/Details';

const Vehicles: FC = () => {
  return (
		<Home RightLayoutContent={Vehicle} />
  )
}

export default Vehicles;
