import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
<footer style = {{  

backgroundColor: 'greenyellow' ,
color: 'red'

}}>

copyright{year.getFullYear()}   
</footer>


  )
}

export default Footer
