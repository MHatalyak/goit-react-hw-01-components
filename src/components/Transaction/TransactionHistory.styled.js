import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const TransactionHistoryTable = styled.table`
  width: 500px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #90e0ef;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
`;
