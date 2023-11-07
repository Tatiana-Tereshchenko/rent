import React from 'react';

import CarBrandSelect from '../CarBrandSelect/CarBrandSelect';

const FilterModel = ({ carModels }) => {
  const handleCarBrandSelect = () => {
  };

  return (
    <div>
      <label htmlFor="carBrand">Car brand:</label>
      <CarBrandSelect carModels={carModels} onCarBrandSelect={handleCarBrandSelect} />
    </div>
  );
};

export default FilterModel;