import React, { useState} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransactionsQuery } from 'state/api'
import Header from 'components/Header'
import { useTheme } from '@mui/material/styles';


const Transactions = () => {
    const theme = useTheme();
  return (
    <div>
      Transactions
    </div>
  )
}

export default Transactions
