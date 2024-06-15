// CustomerGrid.js
import React from 'react';
import Customer from './Customer'; // Assuming Customer component is in a separate file

const customers = [
  {
    id: 1,
    name: 'Ricky Park',
    imageUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ',
  },
  {
    id: 2,
    name: 'John Doe',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ',
  },
  {
    id: 3,
    name: 'Jane Smith',
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ',
  },
  // Add more customer objects as needed
];

const CustomerGrid = () => {
  return (
    <div className= " py-4 pl-2 pr-2  bg-blue-200 mx-auto min-w-screen ">
    <div className="">
        <div className=""></div>
        <p className="text-center text-md text-black ">TESTIMONAL</p>
        <h3 className="text-2xl font-bold uppercase text-gray-200 mb-4 text-center ">What Our Customer Say's : </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
      {customers.map((customer) => (
        <Customer
          key={customer.id}
          name={customer.name}
          imageUrl={customer.imageUrl}
          description={customer.description}
        />
      ))}
    </div>
    </div>
  );
};

export default CustomerGrid;
