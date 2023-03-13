import React, { useState } from "react";

interface FormData {
  flourWeight: number;
  waterWeight: number;
  saltWeight: number;
  starterWeight: number;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    flourWeight: 0,
    waterWeight: 0,
    saltWeight: 0,
    starterWeight: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { flourWeight } = formData;
    setFormData({
      flourWeight,
      waterWeight: flourWeight * 0.8,
      saltWeight: flourWeight * 0.025,
      starterWeight: flourWeight * 0.23,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sourdough Recipe Calculator</h2>
      <div className="mb-4">
        <label htmlFor="flourWeight" className="block font-bold mb-2">
          Flour weight:
        </label>
        <input
          type="number"
          name="flourWeight"
          id="flourWeight"
          value={formData.flourWeight}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="waterWeight" className="block font-bold mb-2">
          Water weight:
        </label>
        <input
          type="number"
          name="waterWeight"
          id="waterWeight"
          value={formData.waterWeight}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="saltWeight" className="block font-bold mb-2">
          Salt weight:
        </label>
        <input
          type="number"
          name="saltWeight"
          id="saltWeight"
          value={formData.saltWeight}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="starterWeight" className="block font-bold mb-2">
          Starter weight:
        </label>
        <input
          type="number"
          name="starterWeight"
          id="starterWeight"
          value={formData.starterWeight}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
