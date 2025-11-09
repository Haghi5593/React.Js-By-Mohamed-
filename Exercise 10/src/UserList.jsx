const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ol>
      ) : (
        <p>No Users Found.</p>
      )}
    </div>
  );
};

export default UserList;
