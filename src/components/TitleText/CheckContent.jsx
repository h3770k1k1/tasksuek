import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CheckContent = () => {
  const [turnedOn, setTurnedOn] = useState(false);

  const handleButtonClick = () => {
    setTurnedOn((prev) => !prev);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
      }}
    >
      <Typography
        variant="h4"
        style={{
          border: `2px solid ${turnedOn ? 'green' : 'red'}`,
          padding: '10px',
          borderRadius: '5px',
          width: '20vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {turnedOn ? 'Turned On' : 'Turned Off'}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleButtonClick}
      >
        {turnedOn ? 'Turn Off' : 'Turn On'}
      </Button>
    </div>
  );
};

export default CheckContent;
