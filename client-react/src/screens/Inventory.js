import React from 'react';
import CarCard from '../components/Inventory';


const Inventory = () => (
    <div>
      <h2 className="nav-buttons">Inventory</h2>
      <CarCard uri="http://localhost:3001/cars/Inventory" />
    </div>
  );

export default Inventory;