import React, { useState } from 'react';
import ImageArea from './comps/ImageArea';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import './App.css'
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)
  console.log(selectedImg)

  return (
    <div className="app">
      <Title/>
      <UploadForm/>
     <div className="app__area">
     <ImageArea setSelectedImg={setSelectedImg}/>
     </div>
     <Modal/>
    </div>
  );
}

export default App;
