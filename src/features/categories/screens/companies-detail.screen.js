import React, {useState} from "react";
import {List} from "react-native-paper"
import { ScrollView } from "react-native";
import { CompaniesInfoCard } from "../components/companies-info-card";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const CompanyDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { company } = route.params;
  return (
    <SafeArea>
      <CompaniesInfoCard company={company} />
      <ScrollView>
        <List.Accordion
          title="Company Details"
          left={(props) => <List.Icon {...props} icon="" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="11111" />
          <List.Item title="22222" />
        </List.Accordion>

        <List.Accordion
          title="Services provide"
          left={(props) => <List.Icon {...props} icon="" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="11111111111" />
          <List.Item title="22222222222" />
          <List.Item title="3333333333333333" />
        </List.Accordion>

        <List.Accordion
          title="You can rate the service"
          left={(props) => <List.Icon {...props} icon="" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="11111111111111111" />
 
        </List.Accordion>

        <List.Accordion
          title="You can ask the service"
          left={(props) => <List.Icon {...props} icon="" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="1111111111111" />
 
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};