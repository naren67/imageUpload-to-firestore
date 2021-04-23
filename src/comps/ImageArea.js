import React from 'react'
import './ImageArea.css'

function ImageArea({url, time, setSelectedImg}) {
          
          return (
                    <div className='imageArea'>
                              <img src={url} alt=""/>
                    </div>
          )
}

export default ImageArea
