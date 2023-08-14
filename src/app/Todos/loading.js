
"use client"


import { RotatingLines} from  'react-loader-spinner'



function Loading() {
  return (
    <div>
      
      <p>Loading the Todos ...</p>
      
     <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
     />
 
    </div>
  );
}

export default Loading;

