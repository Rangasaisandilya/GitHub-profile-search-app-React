import React, {Fragment} from "react";
import GitHubSearch from "./GitHubSearch";
import GithubProfile from "./GithubProfile";
import {clientID, clientSecret} from "./credentials";
import axios from 'axios';



class GitHubSearchApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:'',
            profile:{},
            error:''
        }

    }

    pullUserName =(data)=>{
        this.setState({
            username:data
        })

        this.searchProfile(data)

    }

    searchProfile =(username)=>{
        let dataURL = `http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
        axios.get(dataURL).then((response)=>{
            this.setState({
                profile : response.data
            });
        }).catch((error)=>{
            this.setState({
                error : error
            });
            alert('User not found')
        })
    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <GitHubSearch pushUserName={this.pullUserName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            {
                                Object.keys(this.state.profile).length !== 0 ?
                                    <React.Fragment>
                                        <GithubProfile profile={this.state.profile}/>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default GitHubSearchApp;