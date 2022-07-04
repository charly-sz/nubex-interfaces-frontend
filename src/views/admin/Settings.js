import React from 'react';

// components
import CardSettings from 'components/Cards/CardSettings.js';

const Settings = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}

export default Settings;