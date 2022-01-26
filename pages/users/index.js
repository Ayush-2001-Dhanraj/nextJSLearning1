import User from '../../components/user'
import { Box } from '@mui/material'

const UserList = ({ users }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} p={1}>
      <h1>List of Users</h1>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ol>
    </Box>
  )
}

export default UserList

export async function getStaticProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      users: data
    }
  }
}
