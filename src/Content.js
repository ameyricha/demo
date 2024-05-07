import React from 'react'

const Content = () => {


function handleNameChange()
{

const names = [ "amey", " grow", " sun "];
const int = Math.floor(Math.random()*3);
return names[int];





}



  return (
    <div>Content  file this is 
        {handleNameChange}
    </div>

  

  )
}

export default Content