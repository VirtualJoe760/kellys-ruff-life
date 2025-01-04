import React from 'react';

const IframeEmbed: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        src="https://tidycal.com/josephsardella/demo-booking"
        className="w-full h-full"
        frameBorder="0"
        allow="fullscreen"
        title="TidyCal Demo Booking"
      ></iframe>
    </div>
  );
};

export default IframeEmbed;