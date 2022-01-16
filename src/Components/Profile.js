 import React from "react";

const Profile = ({ firstName, lastName, student,show }) => {
/* const handleClick=()=>{
    show(firstName)
}
   */
  return (
    <div>
      <h1>
        
        welcome:
        {firstName + " " + lastName}
      </h1>
      <p>{student.age}</p>
    {/*   <button onClick={handleClick}> show</button> */}
    </div>
  );
};

export default Profile; 
