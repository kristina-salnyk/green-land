import React from 'react';
import styled from 'styled-components';

const MyText = styled.Text``;

export const MapCallout = ({ company }) => (
  <>
    <MyText>{company.name}</MyText>
    <MyText>{company.address}</MyText>
  </>
);
