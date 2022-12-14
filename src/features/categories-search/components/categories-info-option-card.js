import React, { useContext } from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-paper';
import { CompaniesContext } from '../../../services/companies/companies.context';

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

export const OptionsInfoCard = ({company = {}}) => {

  const {
    name = 'Some company',
    address = 'dwdwd',
    openingDays = 'Mon - Fri',
    openingHours= '9 a.m - 6 p.m',
    rating = 4,
  } = company;
  const {isLoading, companies, categories, collectionpoint, error} = useContext(CompaniesContext);
  console.log(companies.filter(item => item.id))
  console.log(companies.map(item => item.company))


  return (
    <CompanyCard elevation={5} style={styles.card}>
      {/* <CompanyCardCover key={name}/> */}
      <Info>
        <Title>{companies.map((item)=> item.name)}</Title>
        <Title>{address}</Title>
        <Title>{company.collectionPoints?.map(el=> el.address)}</Title>
        <Title>{openingDays}</Title>
        <Title>{openingHours}</Title>
 
 

      </Info>
    </CompanyCard>
  );
};

const styles = StyleSheet.create({
  card: { 
    backgroundColor: 'white' ,
    borderWidth: 3,
    borderColor: '#3bb03d',
  },
  cover: { padding: 20, backgroundColor: 'white' },
});