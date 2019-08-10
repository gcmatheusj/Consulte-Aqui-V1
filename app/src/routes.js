import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
