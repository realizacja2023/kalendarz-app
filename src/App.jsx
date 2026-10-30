import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Tutaj wpisujesz dokładny adres swojej oryginalnej aplikacji online
    window.location.replace("https://kalendarz-imprez-293aa.web.app");
  }, []);

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Ładowanie oryginalnego kalendarza...</h2>
    </div>
  );
}
