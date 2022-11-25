import { StatusBar, StyleSheet, SafeAreaView, Text, View, Platform, FlatList } from 'react-native';
import styled from 'styled-components/native'

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;