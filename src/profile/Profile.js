import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({name,bio,profession,alerte,children}) => {
   
  return (
    <div>

        <h2>
        Full name: {name}
        Bio: {bio}
        Profession: {profession}
        </h2>
        {alerte()}
       {children}
    </div>    
   
  )
}
Profile.propTypes = {
  
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}
Profile.defaultProps ={ name: "Inconnu"}

export default Profile