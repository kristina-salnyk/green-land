import React, { useContext, useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';
import { CompaniesContext } from '../../../services/companies/companies.context';
import { LocationContext } from '../../../services/location/location.context';
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const SomeText = styled.Text``;
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { companies = [] } = useContext(CompaniesContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {companies.map(company => {
          return (
            <Marker
              key={company.name}
              title={company.name}
              coordinate={{
                latitude: company.geometry.location.lat,
                longitude: company.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate('CompanyDetail', {
                    company,
                  })
                }
              >
                <MapCallout company={company} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
