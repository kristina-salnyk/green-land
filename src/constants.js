import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo, FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';

export const BASE_URL = 'http://ec2-3-94-62-82.compute-1.amazonaws.com:8080';

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
    component: MaterialCommunityIcons,
  },
  {
    name: 'sourcetree',
    component: Fontisto,
  },
  {
    name: 'edit-point',
    source: 'edit',
    component: Entypo
  }
];

export const AUTH_TYPES = { LOGIN: 'login', REGISTRATION: 'register' };

export const ROLES = {USER: 'ROLE_CUSTOMER' , COMPANY: 'ROLE_PROVIDER'};

export const ROUTES = {
  HOME: 'Home',
  PROFILE: 'Profile',
  REGISTER: 'Registration',
  LOGIN: 'Login',
  EDIT_PROFILE: 'EditProfile',
  EDIT_COMPANY_PROFILE: 'EditCompanyProfile',
};
