import React from "react"

function Coin({ TotalSupply,  Staking}) { 
 
    return ( 
      <div className="coin"> 
        
      
   
        <div className="CSupply"> 
          <h3>{parseFloat((TotalSupply)-(Staking/1000000))}</h3> 
        </div> 
     
   
        
          
      </div> 
      
    ) 
  }
  export default Coin;
