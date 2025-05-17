import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  AddProduct: undefined;
  Reports: undefined;
  Products: undefined;
  Settings: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>; 