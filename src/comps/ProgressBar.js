import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'


function ProgressBar({file, setFile}) {

          const {url, progress} = useStorage(file)
          console.log(progress,url,'completed')

          //set the progressbar to null to remove the bar
          useEffect(()=>{
             if(url){
                    setFile(null)   
             }
          },[url,setFile])
          
          return (
                    <div className='progressBar' style={{ width : progress + '%' }}>
                              {/* progress bar */}
                    </div>
          )
}

export default ProgressBar
