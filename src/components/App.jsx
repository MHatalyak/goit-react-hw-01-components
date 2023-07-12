import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import { TransactionHistoryContainer } from './Transaction/TransactionHistory.styled';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <h2>Task1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Task3</h2>
      <FriendList friends={friends} />
      <h2>Task4</h2>
      <TransactionHistoryContainer>
        <TransactionHistory items={transactions} />
      </TransactionHistoryContainer>
    </div>
  );
};

export default App;
