import React, { Component } from 'react'
import Image from '../Profile.jpg'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                fullName: 'Kristian Alafaa',
                bio: 'space, tech, geo',
                imgSrc: <img src={Image} alt='Work space' width={594} height={396}/>,
                profession: 'Impact Investor'
            }
        }
    }
    render() {
        return (
            <div>
                <div>
                    <br/>
                    {this.state.person.imgSrc}
                </div>
                <div>
                    <p>Full name: {this.state.person.fullName}</p>
                </div>
                <div>
                    <p>bio: {this.state.person.bio}</p>
                </div>
                <div>
                    <p>profession: {this.state.person.profession}</p>
                </div>
            </div>
        )
    }
}

export default Profile
