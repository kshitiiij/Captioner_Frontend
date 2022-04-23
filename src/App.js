import './App.css';
import {useRef,useState} from 'react';

function App() {

  const fileRef = useRef();
  const [image,setImg] = useState();

  const handleChange = (event) => {
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <h1 className="header">CAPTIONER</h1>
      <h4>Click to Browse Image:  </h4>
      <button className="button-17" onClick={() => fileRef.current.click()}>Browse</button>
      <input ref = {fileRef} onChange = {handleChange}
        multiple={false} type="file" hidden
      />
      <br></br>

      <img src={image} className = "image" alt="" />
      <br></br>
      <button className="button-17">Generate Caption</button>
      <p>McGregor is the best!!!</p>
      <h4 className="copy">© Ishan, Kshitij and Ritesh</h4>
    </div>
  );
}

export default App;



