
import { useContext } from 'react'
import CompaniesOutput from './components/CompaniesOutput/CompaniesOutput'
import { CompaniesContextEdit } from './store/companies-context';

function AllCompanies(){
    const companiesCtx = useContext(CompaniesContextEdit);
    return (
    <CompaniesOutput 
    companies={companiesCtx.companies}
    companiesPeriod='Total'
    />
    )
}

export default AllCompanies