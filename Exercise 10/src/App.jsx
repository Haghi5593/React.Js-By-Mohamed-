import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Aweis', email: 'aweis@example.com' },
    { id: 2, name: 'Bashiir', email: 'bashiir@example.com' },
    { id: 3, name: 'Badria', email: 'badria@example.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;