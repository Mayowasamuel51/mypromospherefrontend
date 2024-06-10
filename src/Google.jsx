import React, { useEffect } from 'react';

const GoogleTag = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-LEY36V809L';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-LEY36V809L');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleTag;
