import { View } from "react-native"
import CompaniesList from "./CompaniesList"


function CompaniesOutput({companies, companiesPeriod}){
    return (
    <View>
      <CompaniesList companies={companies}/>
    </View>
    )
}

export default CompaniesOutput