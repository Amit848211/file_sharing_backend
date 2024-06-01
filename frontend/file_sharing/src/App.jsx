import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(false);
  const[data,setData]=useState("")
  const fileRef = useRef(null);
  const fileSubmmit = () => {
    fileRef.current.click();
  };
  console.log(file);
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const url = "http://localhost:5000/upload";

  console.log(data);
    
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        let data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        console.log("before",data);
        try {
          const response = await axios.post(url, data);
          console.log("response",response);

            setData(response.data.path)
          if (response.data.success) {
            setFile(false);
          }
        } catch (error) {}
      }
    };

    getImage();
  }, [file]);

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={logo} alt="banner"></img>
        </div>
        <div className="file">
          <h1>Simple file sharing!</h1>
          <p>Upload and share the download link</p>
          <button onClick={fileSubmmit}>Upload</button>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
            ref={fileRef}
            type="file"
          />
          <a href={data} >{data}</a>
          
        </div>
      </div>
    </>
  );
}

export default App;
