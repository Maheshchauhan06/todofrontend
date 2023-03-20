import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import CreateNote from "./Component/CreateNote";
import Notes from "./Component/Notes";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [addNotes, setAddNotes] = useState([]);
  const [refresh, setrefresh] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get")
      .then((res) => setAddNotes(res.data));
    console.log(refresh);
  }, [refresh]);

  return (
    <div className="todocontainer">
      <Header />
      <CreateNote setrefresh={setrefresh} refresh={refresh} />
      <div className="notesbox">
        {addNotes.map((ele) => {
          return (
            <Notes
              setrefresh={setrefresh}
              refresh={refresh}
              id={ele.id}
              title={ele.title}
              content={ele.input}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
