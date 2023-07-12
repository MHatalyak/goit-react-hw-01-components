import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} color={getColorByIndex(id)}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

function getColorByIndex(id) {
  const colors = ['blue', 'purple', 'red', 'green', 'orange'];
  const index = parseInt(id.split('-')[1], 10) - 1;
  return colors[index % colors.length];
}
