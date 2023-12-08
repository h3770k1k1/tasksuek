import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
        sx={{
          border: '2px solid',
          padding: '10px',
          borderRadius: '5px',
          width: '20vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {count}
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={incrementCount}
          size="large"
          sx={{ margin: '1rem' }}
        >
          Increase
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ margin: '1rem' }}
          onClick={decrementCount}
        >
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
