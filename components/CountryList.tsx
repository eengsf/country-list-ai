'use client';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import ChevronUp from './iconSVG/ChevronUp';
import ChevronDown from './iconSVG/ChevronDown';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      phone
      emoji
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  emoji: string;
  capital: string;
  currency: string;
  continent: {
    name: string;
  };
  languages: {
    name: string;
  }[];
}

export default function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  if (loading)
    return (
      <div className="flex justify-center items-center h-2/3">
        <div className="w-16 h-16 border-8 border-light border-t-sunMedium dark:border-t-moonThin rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-2/3">
        <p>{error.message}</p>
      </div>
    );

  const continents: string[] = Array.from(
    new Set(data.countries.map((country: Country) => country.continent.name))
  );

  const filteredCountries = data.countries.filter(
    (country: Country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedContinent === '' || country.continent.name === selectedContinent)
  );

  filteredCountries.sort((a: Country, b: Country) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="p-4 h-full w-full border-x">
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        <input
          type="text"
          placeholder="Search country..."
          className="border text-sm p-2 rounded-md w-full md:w-1/3 bg-light dark:bg-dark text-dark dark:text-light focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-3">
          <select
            className="border p-2 rounded-md w-full md:w-fit text-dark dark:text-light bg-light dark:bg-dark cursor-pointer focus:outline-none className='text-sm'"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
          >
            <option value="" className='text-sm'>Continents</option>
            {continents.map((continent) => (
              <option key={continent} value={continent} className='text-sm'>
                {continent}
              </option>
            ))}
          </select>
          <select
            className="border p-2 rounded-md w-full md:w-fit text-dark dark:text-light bg-light dark:bg-dark cursor-pointer focus:outline-none text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="asc" className='text-sm'>Asc</option>
            <option value="desc" className='text-sm'>Desc</option>
          </select>
        </div>
      </div>

      <div className="h-full w-full overflow-auto px-7 no-scrollbar">
        <ul className="divide-y divide-gray-300 dark:divide-gray-700">
          {filteredCountries.map((country: Country) => (
            <li key={country.code}>
              <div
                className="cursor-pointer py-2 flex justify-between items-center"
                onClick={() =>
                  setExpandedCountry(expandedCountry === country.code ? null : country.code)
                }
              >
                <span>
                  {country.emoji} {country.name} - {country.capital} ({country.currency})
                </span>
                {expandedCountry === country.code ? <ChevronUp/> : <ChevronDown/>}
              </div>
              {expandedCountry === country.code && (
                <div className="p-2 bg-light dark:bg-dark rounded-md">
                  <p className='my-1'>{country.native}</p>
                  <p className='text-xs'>Phone: +{country.phone}</p>
                  <p className='text-xs'>Continent: {country.continent.name}</p>
                  <p className='text-xs'>Languages: {country.languages.map((lang: { name: string }) => lang.name).join(', ')}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

