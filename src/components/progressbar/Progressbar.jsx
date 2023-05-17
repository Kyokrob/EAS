import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '5px',
        background: 'transparent',
        borderRadius: '10px',
        position: 'fixed',
        top: '62px',
        left: 0,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          background: '#E6AF4B',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
