// Customer.js
import React from 'react';

const Customer = ({ name, imageUrl, description }) => {
  return (
    <div className="bg-gray-200  shadow-xl rounded-xl ">
    <div className="rounded-lg shadow-lg text-black p-6 max-w-sm mx-auto">
      <img className="rounded-full border-4 border-teal-400 w-36 h-36 mx-auto" src={imageUrl} alt="user" />
      <h3 className="text-xl font-semibold py-2 text-center">{name}</h3>
      <div className="text-md py-2">
        <p className="justify ">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Customer;
