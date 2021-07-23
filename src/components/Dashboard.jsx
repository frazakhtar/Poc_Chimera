import React from 'react'
import CountdownTimer from './CountdownTimer'
import Users from './Users'
import UsersAgGrid from './UsersAgGrid'
function Dashboard() {
    return (
        <div>
        <div className="parentDiv">
        <div class="ct">
          <CountdownTimer />
        </div>
        <div className="usr">
          <Users />
        </div>
      </div>
      <div className="agUsers">
        <UsersAgGrid />
        </div>
        </div>
    )
}

export default Dashboard
