import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-paper';

const CompanyCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const CompanyCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};

`;

const Title = styled(Text)`

color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

export const CompaniesInfoCard = ({company = {}}) => {
  const {
    name = 'Some company',
    address = 'Some random address',
    openingDays = 'Mon - Fri',
    openingHours= '9 a.m - 6 p.m',
    rating = 4,
  } = company;

  return (
    <CompanyCard elevation={5}>
      {/* <CompanyCardCover key={name}/> */}
      <Info>
        <Title>{name}</Title>
        <Title>{address}</Title>
        <Title>{openingDays}</Title>
        <Title>{openingHours}</Title>
        <Title>{rating}</Title>

      </Info>
    </CompanyCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
});