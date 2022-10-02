
import "./index.css";

import config from "../../../skeleta.config"


function Text({element}:any) {
  let rect = element.getBoundingClientRect();
  //let h = parseFloat(getComputedStyle(element).fontSize.slice(0,getComputedStyle(element).fontSize.length-2)); 

  return (
    <div style={{
        top:rect.top + window.scrollY,
        left:rect.left + window.scrollX,
        width:rect.width, 
        height:rect.height, 
        maxHeight:rect.height, 
        background: config.text.bgColor || config.bgColor || "white",
        borderRadius: config.text.borderRadius || "0.5rem",
        overflow:"hidden",      
      }}
      
      className="outer__skeleta">
        <div 
          style={{
          width:rect.width-20,
          height:rect.height-20, 
          minHeight:"20px"
          }}
          className="inner__skeleta">
        </div>       
      </div>
  )
}

export {Text as default}