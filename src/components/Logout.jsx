import React from 'react'

const Logout = () => {
  return (
     <form method='post' action='http://localhost:8585/users/logout'>
        <button type='submit'>Logout</button>
     </form>
  )
}

export default Logout