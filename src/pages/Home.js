import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FullHeightContainer from '../components/Layout/FullHeightContainer';
import { getUser } from '../state/actions/user.actions';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <FullHeightContainer>
      <HeroBanner />
    </FullHeightContainer>
  );
};

export default Home;
