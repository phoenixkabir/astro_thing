'use client';

import React from 'react';

const CosmicBackground: React.FC = () => {
  return (
    <div className="cosmic-background">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <style jsx>{`
        .cosmic-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .stars, .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .stars {
          background: #000 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat top center;
          z-index: 0;
        }
        .twinkling {
          background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') repeat top center;
          z-index: 1;
          animation: move-twink-back 200s linear infinite;
        }
        @keyframes move-twink-back {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }
      `}</style>
    </div>
  );
};

export default CosmicBackground;
