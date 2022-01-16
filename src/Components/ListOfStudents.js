import React from "react";
import Singlestudent from "./SingleStudent";
const ListOfStudents = ({ students,show }) => {
  console.log(students);
  const studentsBigThanTherty=students.filter((element)=>element.age>30)
  return (
    <div>
      {/* {students.map((student,index)=><h1 key={index}>{student.userName}</h1>)} */}
      {students.map((student, index) => (
        <Singlestudent key={index} student={student}   show={show}/>
      ))}
      <div>
      {studentsBigThanTherty.map((elt)=><h1>{elt.userName}</h1>)}
      </div>
      <hr/>
      <div>
      {studentsBigThanTherty.map((elt)=><div  >
          <h1>{elt.userName}</h1>
          <h1>{elt.adress}</h1>
      </div>)}
      </div>

    </div>
  );
};

export default ListOfStudents;
