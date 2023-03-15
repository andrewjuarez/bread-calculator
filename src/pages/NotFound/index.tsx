import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div className='flex flex-col max-w-lg mx-auto'>
    <Link className='mt-4' to='/'>Go back to Calculator</Link>
    <h1 className='text-2xl mt-4 font-bold mb-4 text-gray-700'>404: Page Not Found</h1>
  </div>
);

export default NotFoundPage;
