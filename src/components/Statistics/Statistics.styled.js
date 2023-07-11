import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid gray;
  width: 250px;
  height: 150px;
  margin: 50px auto;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 5px;
  background-color: white;
  padding: 5px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  gap: 2px;
  margin-bottom: 0px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 10px;
  width: 27px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
