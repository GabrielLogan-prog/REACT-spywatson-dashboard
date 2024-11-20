import React, { useState, useEffect } from 'react';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://c9df0f37-f69f-4b6d-8158-2958f9b5b884-00-1wdt1mzj7jyv1.worf.replit.dev/api/company';
/**
 * Componente que renderiza uma lista de empresas.
 * 
 * @function
 * @returns {ReactElement} - O componente renderizado.
 */
function Consultas() {
  /**
   * Estado que armazena a lista de empresas.
   * @type {Object[]}
   */
  const [companies, setCompanies] = useState([]);
  /**
   * Estado que indica se a lista de empresas esta  sendo carregada.
   * @type {boolean}
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Estado que armazena o erro ocorrido ao carregar a lista de empresas.
   * @type {string|null}
   */
  const [error, setError] = useState(null);
  /**
   * Fetch companies from API.
   * 
   * OBS , SE REMOVER OS HEADERS NAO FUNCIONA KKKKkkkkkkkk 
   *
   * @throws {Error} - If there is an error with the request.
   */
  const fetchCompanies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'pt-PT,pt;q=0.9',
          'cache-control': 'max-age=0',
          'connection': 'keep-alive',
          'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
          'origin': 'https://c9df0f37-f69f-4b6d-8158-2958f9b5b884-00-1wdt1mzj7jyv1.worf.replit.dev',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError('VOCE DEVE INICIAR A API NO REPLIT PARA FUNCIONAR');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Componente que renderiza as informa es de uma empresa.
   * 
   * @param {Object} props - Props do componente.
   * @param {Object} props.company - Objeto com as informacoes da empresa.
   * @returns {React.ReactElement} - Elemento JSX com as informa es da empresa.
   */
  const CompanyElement = ({ company }) => (
    <div className="company bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{company.fantasia}</h2>
      <div className="company-info"><strong>CNPJ:</strong> {company.cnpj}</div>
      <div className="company-info"><strong>Email:</strong> {company.email}</div>
      
      <div className="socios mt-4">
        <h3 className="font-semibold">Sócios:</h3>
        {company.socios.map((socio, index) => (
          <div key={index} className="socio">
            <strong>{socio.nome}</strong> ({socio.tipo})
          </div>
        ))}
      </div>
      
      <div className="contatos mt-4">
        <h3 className="font-semibold">Contatos:</h3>
        {company.telefones.map((telefone, index) => (
          <div key={index} className="contato">
            <strong>{telefone.tipo}:</strong> {telefone.numero}
          </div>
        ))}
        {company.fax.map((fax, index) => (
          <div key={index} className="contato">
            <strong>Fax {fax.tipo}:</strong> {fax.numero}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-2">Consultas</h1>
        <p className="text-gray-600 mb-4">Caso obtenha erro deve iniciar a API no replit.</p>
      </div>
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Relatório de Empresas</h1>
      </header>
      <div className="search-container mb-8">
        <button 
          onClick={fetchCompanies}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Pesquisar Empresas
        </button>
      </div>
      <main id="companies-container">
        {isLoading && <p>Carregando dados...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isLoading && !error && companies.length === 0 && <p>Nenhuma empresa encontrada.</p>}
        {companies.map((company, index) => (
          <CompanyElement key={index} company={company} />
        ))}
      </main>
    </div>
  );
}

export default Consultas;