import React from "react";
import GithubProfileCard from "./GitHubProfileCard";
import GithubProfileDetails from "./GitHubProfileDetails";


class GithubProfile extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
               <div className="row my-3">
                   <div className="col-md-3">
                       {
                           Object.keys(this.props).length !== 0 ?
                               <React.Fragment>
                                   <GithubProfileCard profile={this.props.profile}/>
                               </React.Fragment> : null
                       }

                   </div>
                   <div className="col-md-9">
                       {
                           Object.keys(this.props).length !== 0 ?
                               <React.Fragment>
                                   <GithubProfileDetails profile={this.props.profile}/>
                               </React.Fragment> : null
                       }
                   </div>
               </div>
            </React.Fragment>
        );
    }

}

export default GithubProfile;