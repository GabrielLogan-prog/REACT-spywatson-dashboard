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

function SocialMediaChecker() {
  const [loggedInPlatforms, setLoggedInPlatforms] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkLogin = async (platform) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = platform.domain + platform.redirect;
    });
  };

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