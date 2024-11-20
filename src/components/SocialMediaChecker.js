/**
 * Componente que verifica se o usuario esta logado em alguma rede social
 * @param {Object} props - Props do componente
 * @param {string} [props.platform] - Plataforma a ser verificada
 * @param {string} [props.domain] - Dominio da plataforma
 * @param {string} [props.redirect] - URL para redirecionar em caso de login
 * @param {string} [props.name] - Nome da plataforma
 * @returns {React.ReactElement} - Elemento React
 * @example
 * <SocialMediaChecker platform="Gmail" domain="https://accounts.google.com" redirect="/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail" name="Gmail" />
 */

import React, { useState } from 'react';

const platforms = [
  {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
    name: "Gmail"
  },
  {
    domain: "https://www.youtube.com",
    redirect: "/favicon.ico",
    name: "Youtube"
  },
  // Adicione mais plataformas aqui...
];


/**
 * Componente que verifica se o usuario esta logado em alguma rede social
 * @function
 * @returns {React.ReactElement} - Elemento React
 * @example
 * <SocialMediaChecker />
 */

function SocialMediaChecker() {
  const [loggedInPlatforms, setLoggedInPlatforms] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  /**
   * Estado que armazena as plataformas em que o usuario esta logado
   * @type {Object[]}
   */
  /**
   * Estado que indica se a verificacao esta em andamento
   * @type {boolean}
   */
  /**
   * Funcao que verifica se o usuario esta logado em alguma plataforma
   * @function
   * @param {Object} platform - Plataforma a ser verificada
   * @returns {Promise<boolean>} - Promessa que resolve com verdadeiro se o usuario esta logado na plataforma
   */
  /**
   * Funcao que testa todas as plataformas
   * @function
   * @returns {Promise<*>} - Promessa que resolve com o resultado da verificacao
   */
  const checkLogin = async (platform) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = platform.domain + platform.redirect;
    });
  };

  /**
   * Verifica se o usuario esta logado em todas as plataformas
   * @function
   * @returns {Promise<*>} - Promessa que resolve com o resultado da verificacao
   * @example
   * const result = await testSocialMedia();
   * console.log(result); // ["Gmail", "Youtube"]
   */
  const testSocialMedia = async () => {
    setIsChecking(true);
    const loggedIn = [];

    for (const platform of platforms) {
      const isLoggedIn = await checkLogin(platform);
      if (isLoggedIn) {
        loggedIn.push(platform.name);
      }
    }

    setLoggedInPlatforms(loggedIn);
    setIsChecking(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Demonstração</h2>
      <button
        onClick={testSocialMedia}
        disabled={isChecking}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {isChecking ? 'Verificando...' : 'Testar'}
      </button>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Você está logado em:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {loggedInPlatforms.map((platform) => (
            <div key={platform} className="flex items-center p-2 border rounded">
              <span>{platform}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaChecker;