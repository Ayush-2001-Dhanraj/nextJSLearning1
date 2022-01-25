const User = ({ user }) => {
  return (
    <>
      <p>{user.name}</p>
      <p>Email: {user.email}</p>
    </>
  )
}

export default User
