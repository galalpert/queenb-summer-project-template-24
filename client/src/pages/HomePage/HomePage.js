import React from 'react';
import styles from './Home.module.css';
import DisplayAnimals from '../../components/RandomDuck/RandomDuck';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Happily adopted</h1>
      <DisplayAnimals />
    </div>
  );
};

export default Home;
