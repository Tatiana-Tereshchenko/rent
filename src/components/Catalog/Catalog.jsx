
import React, { useState, useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { fetchAdverts  } from '../../redux/operations'
import AdvertCard from '../AdvertCard/AdvertCard'; 
import {Button, CatalogContainer} from '../Catalog/Catalog.styled';
import {  useSelector } from 'react-redux';
import { selectDisplayedAdverts } from '../../redux/selectors'
import FilterForm from '../FilterForm/FilterForm';

const Catalog = () => {
  const dispatch = useDispatch();
  const [displayedCount, setDisplayedCount] = useState(8);
  const allAdverts = useSelector(selectDisplayedAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch, displayedCount]);

  const handleLoadMore = () => {
    setDisplayedCount(prevCount => prevCount + 8);
  };
  


  return (
    <div>
      <FilterForm/>
      <CatalogContainer>
        {allAdverts.slice(0, displayedCount).map(advert => (
          <AdvertCard key={advert.id} advert={advert} />
        ))}
      </CatalogContainer>
      <Button onClick={handleLoadMore}>Load more</Button>
      </div>
)};

export default Catalog;
