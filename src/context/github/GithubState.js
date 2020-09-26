import React,{useReducer} from "react"
import axios from "axios"
import GithubContext from "./githubContext"
import GithubReducer from "./GithubReducer"
import {
    SEARCH_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    CLEAR_USERS
} from "../types" 

let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState =(props)=>{
    const initialState = {
        users: [],
        user: {},
        loading : false,
        repos : []
    }
    const [state,dispatch] = useReducer(GithubReducer,initialState)
    // search user
    const userSearch =  async (text)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&Client_secret=${githubClientSecret}`)
        dispatch({
            type: SEARCH_USERS,
            payload : res.data.items
        }) 
      }
    //get user
    const getUser =async (username)=>{
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&Client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USER,
            payload : res.data
        }) 
      }
    //get repos
    const getUserRepos =async (username)=>{
        setLoading() 
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&Client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
      }
    //set loading
      const setLoading = ()=>dispatch({type : SET_LOADING})
    // clear user
    const userClear = ()=>{
        dispatch({
            type: CLEAR_USERS
        }) 
      }

    return (<GithubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            loading: state.loading,
            repos :state.repos,
            userSearch,
            getUser,
            userClear,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>)
}

export default GithubState