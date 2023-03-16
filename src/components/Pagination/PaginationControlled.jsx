import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControlled = ({ totalPages, currentPage, handleChange }) => {
  return (
    <Stack spacing={2} alignContent="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      />
    </Stack>
  );
};

export default PaginationControlled;
