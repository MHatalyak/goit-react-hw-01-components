import styled from 'styled-components';

export const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid gray;
  padding: 10px;
`;

export const Status = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ statusColor }) => statusColor};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;
