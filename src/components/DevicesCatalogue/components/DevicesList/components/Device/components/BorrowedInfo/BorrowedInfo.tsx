import React from 'react';
import { format } from 'date-fns';
import { IBorrowed } from 'interfaces/IDevice';
import { StyledBorrowedInfo } from './StyledBorrowedInfo';
import { Paragraph } from 'sharedStyledComponents/atoms/Paragraph';

interface IProps {
  borrowedInfo: IBorrowed;
}

const BorrowedInfo = ({ borrowedInfo: { date } }: IProps) => {
  return (
    <StyledBorrowedInfo>
      <Paragraph>Půjčeno od: {format(date, 'dd/MM/yyyy')}</Paragraph>
    </StyledBorrowedInfo>
  );
};

export default BorrowedInfo;
