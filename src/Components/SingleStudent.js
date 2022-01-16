import React from "react";

const Singlestudent = ({student ,show}) => {
    console.log(show)
    const handleClick=()=>{
        show(student.userName);
    }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{student.userName}</h5>
        <p className="card-text">
         {student.adress}
        </p>
        <p className="card-text">
         {student.age}
        </p>
        <button className="btn btn-primary"  onClick={handleClick}>
         SHOW
        </button>
      </div>
    </div>
  );
};

export default Singlestudent;
