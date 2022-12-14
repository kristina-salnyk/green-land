import React, { createContext, useReducer } from 'react';

const DUMMY_COMPANIES = [
  {
    id: '1',
    geometry: {
      location: {
        lat: 50.4405849,
        lng: 30.5316892,
      },
      viewport: {
        northeast: {
          lat: 50.4405849,
          lng: 30.5316892,
        },
        southwest: {
          lat: 50.4405849,
          lng: 30.5316892,
        },
      },
    },
    name: 'Hello',
    rating: 60,
    address: 3434,
  },
];

export const CompaniesContextEdit = createContext({
  companies: [],
  addCompany: ({ name, location, hours }) => {},
  deleteCompany: id => {},
  updateCompany: (id, { name, location, hours }) => {},
});

function CompaniesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableCompanyIndex = state.findIndex(
        company => company.id === action.payload.id
      );
      const updatableCompany = state[updatableCompanyIndex];
      const updatedItem = { ...updatableCompany, ...action.payload.data };
      const updatedCompanies = [...state];
      updatedCompanies[updatableCompanyIndex] = updatedItem;
      return updatedCompanies;
    case 'DELETE':
      return state.filter(company => company.id !== action.payload);
    default:
      return state;
  }
}

function CompaniesContextEditProvider({ children }) {
  const [companiesState, dispatch] = useReducer(
    CompaniesReducer,
    DUMMY_COMPANIES
  );

  function addCompany(CompanyData) {
    dispatch({ type: 'ADD', payload: CompanyData });
  }

  function deleteCompany(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateCompany(id, CompanyData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: CompanyData } });
  }

  const value = {
    companies: companiesState,
    addCompany: addCompany,
    deleteCompany: deleteCompany,
    updateCompany: updateCompany,
  };

  return (
    <CompaniesContextEdit.Provider value={value}>
      {children}
    </CompaniesContextEdit.Provider>
  );
}

export default CompaniesContextEditProvider;
