// @mui
import { TableRow, TableBody, TableCell } from '@mui/material';

// ----------------------------------------------------------------------

export default function TableSearchNotFound() {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={9} sx={{ py: 10, typography: 'h6' }}>
          No Data
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
