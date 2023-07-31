/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Country from './components/Country';
import Details from './components/Details';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Country />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
