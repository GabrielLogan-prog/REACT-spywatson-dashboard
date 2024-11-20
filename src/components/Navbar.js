/**
 * Componente de navega o da aplica o.
 * @memberof module:src/components
 * @param {function} navigateTo - Funcao para navegacao entre as paginas.
 * @prop {string} navigateTo.dashboard - Navegar ate  pagina de dashboard.
 * @prop {string} navigateTo.consultas - Navegar ate  pagina de consultas.
 * @example
 * <Navbar navigateTo={(page) => history.push(page)} />
 */

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