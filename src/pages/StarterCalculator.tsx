import React, { useState } from 'react';

const StarterCalculator = (): React.FC => {
  const [amount, setAmount] = useState<number>(0);
  const [ratio, setRatio] = useState<string>('1:3:3');
  const [water, setWater] = useState<number>(0);
  const [flour, setFlour] = useState<number>(0);
  const [starter, setStarter] = useState<number>(0);

  const calculate = (): void => {
    const [starterRatio, flourRatio, waterRatio] = ratio.split(':').map(Number);
    const totalRatio = starterRatio + flourRatio + waterRatio;

    const starterAmount = (amount * starterRatio) / totalRatio;
    const flourAmount = (amount * flourRatio) / totalRatio;
    const waterAmount = (amount * waterRatio) / totalRatio;

    setWater(waterAmount);
    setFlour(flourAmount);
    setStarter(starterAmount);
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Starter Calculator</h2>
      <div className='mb-4'>
        <label htmlFor='amount' className='block font-bold mb-2'>
          Desired amount of starter (g):
        </label>
        <input
          type='number'
          id='amount'
          value={amount}
          onChange={(e) => { setAmount(parseFloat(e.target.value)); }}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='ratio' className='block font-bold mb-2'>
          Ratio:
        </label>
        <select
          id='ratio'
          value={ratio}
          onChange={(e) => { setRatio(e.target.value); }}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          <option value='1:5:5'>1:5:5 (Starter:Flour:Water)</option>
          <option value='1:3:3'>1:3:3 (Starter:Flour:Water)</option>
        </select>
      </div>
      <button
        onClick={calculate}
        className='items-center bg-blue-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Calculate
      </button>
      <div className='mt-4'>
        <h3 className='text-lg font-bold mb-2'>Results:</h3>
        <p>Starter: {starter.toFixed(1)}g</p>
        <p>Flour: {flour.toFixed(1)}g</p>
        <p>Water: {water.toFixed(1)}g</p>
      </div>
    </div>
  );
};

export default StarterCalculator;
