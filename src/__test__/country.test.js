import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to mock react-router-dom
import Country from '../components/Country';
import '@testing-library/jest-dom/extend-expect';

describe('Country component test', () => {
  const mockCountry = {
    name: 'Test Country',
    region: 'Test Region',
    flags: 'test_image.png',
  };

  it('should render Country component correctly', () => {
    const { getByText, getByAltText, getByTestId } = render(
      // Wrap the component in MemoryRouter to mock react-router-dom
      <MemoryRouter>
        <Country country={mockCountry} />
      </MemoryRouter>,
    );

    // Check if the country name is rendered correctly
    const countryName = getByText('Test Country');
    expect(countryName).toBeInTheDocument();

    // Check if the region is rendered correctly
    const regionName = getByText('Region: Test Region');
    expect(regionName).toBeInTheDocument();

    // Check if the image alt text is correct
    const countryImage = getByAltText('country');
    expect(countryImage).toBeInTheDocument();

    // Check if NavLink is present and has the correct destination
    const navLink = getByTestId('navLink');
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute('href', '/details/Test Country');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Country country={mockCountry} />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
