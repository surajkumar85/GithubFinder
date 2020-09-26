import React from 'react'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

 const UserItem =({user: {login,avatar_url,html_url}})=> {
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" style={{width: "60px"}} alt=""/>
                <h3>{login}</h3>
                <div><Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Know more</Link></div>
            </div>
        )
}
UserItem.prototype =  {
    user : PropTypes.object.isRequired,

}
export default UserItem