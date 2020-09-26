import React from 'react'
import Search from "../Users/Search"
import Users from "../Users/Users"
import { Fragment } from "react"
function Home() {
    return (
        <Fragment>
        <Search/>
        <Users />
    </Fragment>
    )
}

export default Home
