import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

// TODO: replace to backend URL
export const BASE_URL = 'https://637e5719cfdbfd9a63aeea44.mockapi.io/';

export const ICONS = [
  {
    name: 'edit',
    component: FontAwesomeIcons,
  },
  {
    name: 'building-o',
    component: FontAwesomeIcons,
  },
  {
    name: 'envelope-o',
    component: FontAwesomeIcons,
  },
  {
    name: 'calendar-o',
    component: FontAwesomeIcons,
  },
  {
    name: 'message-question-outline',
    component: MaterialCommunityIcons,
  },
  {
    name: 'reply',
    component: Entypo,
  },
  {
    name: 'home',
    component: Entypo,
  },
  {
    name: 'search',
    component: Ionicons,
  },
  {
    name: 'person',
    component: Ionicons,
  },
  {
    name: 'phone',
    component: FontAwesome,
  },
  {
    name: 'email',
    component: MaterialCommunityIcons
  }
];

export const AUTH_TYPES = { LOGIN: 'login', REGISTRATION: 'register' };

export const ROUTES = {
  HOME: 'Home',
  PROFILE: 'Profile',
  REGISTER: 'Registration',
  LOGIN: 'Login',
  EDIT_PROFILE: 'EditProfile',
};
