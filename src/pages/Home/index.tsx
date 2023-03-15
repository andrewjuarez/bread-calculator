import React, { useState } from 'react';

interface FormData {
  hydrationLevel: number;
  flourWeight: number;
  waterWeight: number;
  saltWeight: number;
  starterWeight: number;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hydrationLevel: 80,
    flourWeight: 400,
    waterWeight: 0,
    saltWeight: 0,
    starterWeight: 0
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value)
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { flourWeight, hydrationLevel } = formData;
    setFormData({
      flourWeight,
      hydrationLevel,
      waterWeight: flourWeight * (hydrationLevel / 100),
      saltWeight: flourWeight * 0.025,
      starterWeight: flourWeight * 0.23
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col max-w-lg mx-auto text-blue-900'>
      <h2 className='text-2xl mt-4 font-bold mb-4 text-gray-700'>Sourdough Recipe Calculator</h2>
      <div className='mb-4'>
        <label htmlFor='flourWeight' className='block font-bold mb-2'>
          Flour weight:
        </label>
        <input
          type='number'
          name='flourWeight'
          id='flourWeight'
          value={formData.flourWeight}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='hydrationLevel' className='block font-bold mb-2'>
          Hydration Level (%):
        </label>
        <input
          type='number'
          name='hydrationLevel'
          id='hydrationLevel'
          value={formData.hydrationLevel}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='items-center bg-blue-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Calculate
      </button>
      <div className='mb-4 mt-6'>
        <label htmlFor='waterWeight' className='block font-bold mb-2'>
          Water weight:
        </label>
        <input
          type='number'
          name='waterWeight'
          id='waterWeight'
          value={formData.waterWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='saltWeight' className='block font-bold mb-2'>
          Salt weight:
        </label>
        <input
          type='number'
          name='saltWeight'
          id='saltWeight'
          value={formData.saltWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='starterWeight' className='block font-bold mb-2'>
          Starter weight:
        </label>
        <input
          type='number'
          name='starterWeight'
          id='starterWeight'
          value={formData.starterWeight}
          readOnly
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
    </form>
  );
};

export default Form;
