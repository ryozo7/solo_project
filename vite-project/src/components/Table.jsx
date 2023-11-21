import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'code', headerName: 'Code', width: 70 },
  { field: 'start', headerName: 'start', width: 130 },
  { field: 'end', headerName: 'End', width: 130 },
  {
    field: 'name',
    headerName: 'Name',
    type: 'number',
    width: 90,
  },
];

export default function Table(rows) {
  //   console.log(rows.rows);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows.rows} columns={columns} />
    </div>
  );
}
