import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 50px auto;
  border: 1px solid gray;
  padding: 0px;
  padding-top: 20px;
`;

export const Description = styled.div`
  text-align: center;
  background-color: white;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  background-color: white;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 10px;
  background-color: white;
`;

export const Location = styled.p`
  color: gray;
  background-color: white;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  background-color: #a9a9a9;
  width: 100%;
  margin-bottom: 0px;
`;

export const StatItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: white;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
