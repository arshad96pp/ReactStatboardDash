import React from "react";
import Media from "../../styles/images/media.png";
import Facebook from "../../styles/images/facebook.png";
import Instagram from "../../styles/images/instagram.png";
import Twitter from "../../styles/images/twitter.png";




function Profile() {
  return (
    <div className="profile">
      <div
        className="profile-top"
        style={{ backgroundImage: `url(${Media})` }}
      ></div>
      <div className="profile-bottom">
        <h4>Jhon Deo</h4>
        <p>CEO</p>
        <div className="iconst">
           <span><img src={Facebook} alt="" /></span>
           <span><img src={Instagram} alt="" /></span>
           <span><img src={Twitter} alt="" /></span>

        </div>
      </div>
    </div>
  );
}

export default Profile;
