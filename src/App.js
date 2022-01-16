import "./App.css";
import ListOfStudents from "./Components/ListOfStudents";
import Profile from "./Components/Profile";

function App() {
  const firstName = "taher";
  const lastName = "kammoun";
  const student = { studentName: "tamim", age: 35, adress: "tunisia" }; 
  const students = [
    { userName: "amin", age: 25, adress: "tunisia" },
    { userName: "wissem", age: 29, adress: "benzart" },
    { userName: "amin", age: 31, adress: "manouba" },
  ];
const show=(x)=>{
  alert(`hello ${x}`)
}
  return (
    <div className="App">
      <Profile firstName={firstName} lastName={lastName} student={student} show={show} /> 
      <ListOfStudents  students={students} show={show} />
    </div>
  );
}

export default App;
