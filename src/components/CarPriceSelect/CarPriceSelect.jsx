// import React, { useState } from 'react';

// const CarPriceSelect = ({ carPrices, onCarPriceSelect }) => {
//   const [selectedCarPrice, setSelectedCarPrice] = useState('');

//   const handleCarPriceChange = (event) => {
//     const selectedPrice = event.target.value;
//     setSelectedCarPrice(selectedPrice);
//     onCarPriceSelect(selectedPrice); 
//   };
// // console.log(carPrices)
//   return (
//     <select value={selectedCarPrice} onChange={handleCarPriceChange}>
//       <option value="">To</option>
//       {carPrices.map((rentalPrice, index) => (
//         <option key={index} value={rentalPrice}>
//           {rentalPrice}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CarPriceSelect;