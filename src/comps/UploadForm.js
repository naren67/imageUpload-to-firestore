import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/configFirebase'
import ProgressBar from './ProgressBar'
import firebase from 'firebase'
import ImageArea from './ImageArea'

function UploadForm() {
          //url from firestore
          const [displayUrl, setDisplayUrl] = useState([])

          useEffect(()=>{
                    projectFirestore.collection('images').onSnapshot((snapshot)=>{
                              setDisplayUrl(snapshot.docs.map((doc)=>(doc.data())))
                    })
          },[])

          console.log(displayUrl)

          //file type tracker
          const types = ['image/jpeg','image/png']
 
          //image(file) state
          const [file, setFile] = useState(null)

          //error memory
          const [error, setError] = useState(null)

          const upload =(e)=>{
             console.log(e.target.files[0])
          
             let selected = e.target.files[0]

             console.log('seleceted')

             if(selected && types.includes(selected.type)){
                    setFile(selected)
                    setError('')
             }else{
                       //reseting the video file to empty
                    setFile('')
                    setError('Please upload a valid file (Jpeg or Png)')

             }



          }

          return (
                    <div className='uploadForm'>
                              <input type="file" onChange={upload}/>

                              <div className="uploadForm__ifError">
                                        {error && <div className='errorDisplay'>{error}</div>}
                                        {file && <div className='fileTypeDisplay'>{file.type}</div>}
                                        {file && <ProgressBar file={file} setFile={setFile}/>}
                              </div>
                               
                               <div className="imageDisplayer">
                                         {displayUrl.map(url=>(
                                             <ImageArea
                                             url = {url.url}
                                             time = {url.createdAt}
                                             key = {url.url}
                                             />
                                         ))}
                               </div>

                    </div>
          )
}

export default UploadForm
