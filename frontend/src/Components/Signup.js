import React from "react";

function Signup(){
    return(
        <div className="page signupPage">
            <div className="signupContainer">
                <div className="mediumHeading">Register</div>
                <form action="#">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your Email" />
                    <input type="password" placeholder="Enter Password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup