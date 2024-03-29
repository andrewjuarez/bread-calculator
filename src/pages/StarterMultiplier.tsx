import React, { useState } from 'react';

const StarterMultiplier = (): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);
  const [ratio, setRatio] = useState<string>('1:3:3');
  const [water, setWater] = useState<number>(0);
  const [flour, setFlour] = useState<number>(0);
  const [totalStarter, setTotalStarter] = useState<number>(0);

  const calculate = (): void => {
    const [starterRatio, flourRatio, waterRatio] = ratio.split(':').map(Number);

    const starterAmount = (amount * starterRatio);
    const flourAmount = (amount * flourRatio);
    const waterAmount = (amount * waterRatio);

    setWater(waterAmount);
    setFlour(flourAmount);
    setTotalStarter(starterAmount + waterAmount + flourAmount);
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Starter Multiplier</h2>
      <div className='mb-4'>
        <label htmlFor='amount' className='block font-bold mb-2'>
          Amount of starter (g):
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
      <h4 className='text-md font-bold mb-2'>Required:</h4>
        <p>Flour: {flour.toFixed(1)}g</p>
        <p>Water: {water.toFixed(1)}g</p>

        <br />
        <h3 className='text-lg font-bold mb-2'>Resulting:</h3>
        <p>Starter: {totalStarter.toFixed(1)}g</p>
      </div>
    </div>
  );
};

export default StarterMultiplier;
