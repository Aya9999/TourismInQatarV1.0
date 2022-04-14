import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, Stack, Link } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import createAvatar from '../../../../utils/createAvatar';
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Avatar from '../../../../components/Avatar';
import Label from '../../../../components/Label';
import { TableMoreMenu } from '../../../../components/table';

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  actions: PropTypes.node,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};

export default function InvoiceTableRow({ actions, row, selected, onSelectRow, onViewRow }) {
  const theme = useTheme();

  const { sent, invoiceNumber, createDate, dueDate, status, invoiceTo, totalPrice } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={invoiceTo.name} color={createAvatar(invoiceTo.name).color} sx={{ mr: 2 }}>
          {createAvatar(invoiceTo.name).name}
        </Avatar>

        <Stack>
          <Typography variant="subtitle2" noWrap>
            {invoiceTo.name}
          </Typography>

          <Link noWrap variant="body2" onClick={onViewRow} sx={{ color: 'text.disabled', cursor: 'pointer' }}>
            {invoiceNumber}
          </Link>
        </Stack>
      </TableCell>

      <TableCell align="left">{fDate(createDate)}</TableCell>

      <TableCell align="left">{fDate(dueDate)}</TableCell>

      <TableCell align="center">{fCurrency(totalPrice)}</TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {sent}
      </TableCell>

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (status === 'paid' && 'success') ||
            (status === 'unpaid' && 'warning') ||
            (status === 'overdue' && 'error') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu actions={actions} />
      </TableCell>
    </TableRow>
  );
}
