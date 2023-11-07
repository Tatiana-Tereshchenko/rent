import React, { useState } from 'react'; 
import { } from '../FilterForm/FilterForm.styled';
import FilterModel from '../FilterModel/FilterModel';
// import FilterPrice from '../FilterPrice/FilterPrice';
import { selectDisplayedAdverts } from '../../redux/selectors'
import {  useSelector } from 'react-redux';

const FilterForm = () => {
    const [selectedCarBrand, setSelectedCarBrand] = useState('');
    const allAdverts = useSelector(selectDisplayedAdverts);
    const carModels = [...new Set(allAdverts.map(advert => advert.model))];
    const handleCarBrandChange = (event) => {
    setSelectedCarBrand(event.target.value);
    };
    
    // const [selectedCarPrice, setSelectedCarPrice] = useState('');   
    // const carPrices = [...new Set(allAdverts.map(advert => advert.rentalPrice))];
    // const handleCarPriceChange = (event) => {
    // setSelectedCarPrice(event.target.value);
    // }

    return (
      <div>
    <FilterModel
        carModels={carModels}
        selectedCarBrand={selectedCarBrand}
        handleCarBrandChange={handleCarBrandChange}
      />
    {/* <FilterPrice
        carPrices={carPrices}
        selectedCarPrice={selectedCarPrice}
        handleCarPriceChange={handleCarPriceChange}
    /> */}
    </div>
  );
}

export default FilterForm;