import React from "react";


class GithubProfileDetails extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <span className='badge badge-primary mx-1'>
                            Followers:{this.props.profile?.followers}
                        </span>
                        <span className='badge badge-secondary mx-1'>
                            Repos:{this.props.profile?.public_repos}
                        </span>
                        <span className='badge badge-warning mx-1'>
                            Gists:{this.props.profile?.public_gists}
                        </span>
                        <span className='badge badge-danger mx-1'>
                            Follwing:{this.props.profile?.following}
                        </span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className='list-group-item'>Name: {this.props.profile?.name}</li>
                            <li className='list-group-item'>Location: {this.props.profile?.location}</li>
                            <li className='list-group-item'>Email: {this.props.profile?.email}</li>
                            <li className='list-group-item'>Company: {this.props.profile?.company}</li>
                            <li className='list-group-item'>Blog: {this.props.profile?.blog}</li>
                            <li className='list-group-item'>Member Since: {this.props.profile?.created_at}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default  GithubProfileDetails;