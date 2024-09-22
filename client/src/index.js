import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; 
import App from './App';
import { AnimalProvider } from './context/AnimalContext';
import AnimalList from './components/AnimalsList/AnimalList'

/*
function Home ({animals}) {
  return <AnimalList data={animals} />;
}

export default Home;

export const getStaticProps = async() => {
  const animals = await getAllAnimals();
  return {
    props: {
      animals,
    },
  };
};*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimalProvider>
      <App /> 
    </AnimalProvider>
  </React.StrictMode>
);