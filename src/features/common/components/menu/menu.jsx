import { ButtonIcon } from '../button/button-icon';
import { Menu as MenuStyled } from './menu.styled';
import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../../constants';

export const Menu = ({ navigation }) => {
  return (
    <MenuStyled>
      <ButtonIcon onPress={() => navigation.goBack()} iconName="reply" />
      <ButtonIcon onPress={() => navigation.navigate(ROUTES.PROFILE)} iconName="home" />
      <ButtonIcon onPress={() => navigation.goBack()} iconName="search" />
    </MenuStyled>
  );
};

Menu.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func,
  }),
};
