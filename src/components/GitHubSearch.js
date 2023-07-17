import React from "react";
import {clientID, clientSecret} from "./credentials";
import {Axios} from "axios";


class GitHubSearch extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            username:"",
            profile:{},
            error:''
        }

    }

    updateInput =(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    onSubmit =(event)=>{
        event.preventDefault();
        event.stopPropagation();
        this.props.pushUserName(this.state.username)
    }

    searchProfile =(username)=>{
        let dataURL = `http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
        Axios.get(dataURL).then((response)=>{
            this.setState({
                profile : response.data
            });
        }).catch((error)=>{
            this.setState({
                error : error
            });
            alert(error)
        })
    }

    render() {
        return (
            <React.Fragment>
                   <div className="card mt-3">
                       <div className="card-header bg-success text-white ">
                           Search github user
                       </div>
                       <div className="card-body">
                           <form className='form-inline' onSubmit={this.onSubmit}>
                               <div className="form-group">
                                   <input
                                   className='form-control'
                                   value={this.state.username}
                                   size="40" type="search" placeholder="Github User"
                                   onChange={this.updateInput}/>
                               </div>
                               <button className='btn btn-primary btn-sm' type='submit'>Search</button>
                           </form>
                       </div>
                   </div>
            </React.Fragment>
        );
    }

}
export default GitHubSearch;