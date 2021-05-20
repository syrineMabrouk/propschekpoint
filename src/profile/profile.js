import 'bootstrap/dist/css/bootstrap.min.css'
 import'./profile.css'
import React from 'react'
import PropTypes from "prop-types";
import mypic from './profile.png';
const Profile = ({ fullName, bio, profession, age, greeting }) => {
    return (
        <>
            {greeting(fullName)}
            <div className="my-profile">
                <Photo></Photo>
                <br /><br />
                <div className="file-import">
                </div>
                <br />
                <div className="full-name"> <h1 onClick={greeting}> {fullName} </h1> </div>
                <br />
                <div>{bio}
                    <p s> Bio : salut {fullName} {bio} à <a href="http://www.gomycode.com"> Gomycode</a>

                    </p> </div>
                <div>Profession :{profession}</div>
                <div>Age : {age}</div><br />

            </div>


        </>

    )

}


//photoprops

const Photo = props => {
    return <img src={mypic} id="output" alt="profile" style={{
        height: "100px",
        width: "100px",
        boxShadow: "8px 5px 5px 2px grey"
    }}>{props.children}</img>
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    age: PropTypes.number,

};
Profile.defaultProps = {
    fullName: "syrine mabrouk ",
    profession: "genie informatique ",
    age: 26,
};
export default Profile;

