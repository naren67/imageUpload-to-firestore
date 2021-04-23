import React, { useEffect, useState } from 'react'
import { projectFirestore, projectStorage, timestamp } from '../firebase/configFirebase'

function useStorage(file) {

          
      const [progress, setProgress] = useState(0)
      const [error, setError] = useState(null)
      const [url, setUrl] = useState(null)
      

      useEffect(()=>{

          //storage ref for image name to be taken
          const storageRef = projectStorage.ref(file.name)

          //firedstore ref connection
          const collectionsInsideFirebase = projectFirestore.collection('images')

          storageRef.put(file).on('state_changed',(snap)=>{
                    let percentageOfUploads = (snap.bytesTransferred / snap.totalBytes) * 100 
                    setProgress(percentageOfUploads)
          },(error)=>{
                    setError(error) 
          }, async()=>{
                    const url = await storageRef.getDownloadURL()
                    const createdAt = timestamp
                    collectionsInsideFirebase.add({
                        url,
                        createdAt
                    })
                    setUrl(url)
          })
               
      },[file])

      return {progress, error, url}

}

export default useStorage
