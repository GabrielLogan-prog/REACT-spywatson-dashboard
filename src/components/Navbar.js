import React from 'react';

function Navbar({ navigateTo }) {
  return (
    <div className="flex justify-between items-center bg-green-700 p-4 text-white">
      <div className="text-lg font-bold">Baby Watson</div>
      <div>
        <button
          onClick={() => navigateTo('dashboard')}
          className="bg-transparent hover:bg-green-600 text-white font-semibold py-2 px-4 border border-white rounded mr-2"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigateTo('consultas')}
          className="bg-transparent hover:bg-green-600 text-white font-semibold py-2 px-4 border border-white rounded"
        >
          Consultas
        </button>
      </div>
    </div>
  );
}

export default Navbar;