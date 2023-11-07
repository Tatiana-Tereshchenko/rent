import React, { useState } from 'react';

const CarBrandSelect = ({ carModels, onCarBrandSelect }) => {
  const [selectedCarBrand, setSelectedCarBrand] = useState('');

  const handleCarBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setSelectedCarBrand(selectedBrand);
    onCarBrandSelect(selectedBrand); 
  };
  
console.log(carModels)
  return (
    <select value={selectedCarBrand} onChange={handleCarBrandChange}>
      <option value="">Select a car brand</option>
     
      {carModels.map((make) => (
      
        <option key={make} value={make}>
          {make}
        </option>
        
      ))}
       
    </select>
  );
};

export default CarBrandSelect;