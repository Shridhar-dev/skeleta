
import styles from "../index.module.css";
import config from "../../../skeleta.config"
import { getNoOfLines } from "../utils";

function Text({element}:any) {
  let rect = element.getBoundingClientRect();
  let h = parseInt(getComputedStyle(element).fontSize.slice(0,getComputedStyle(element).fontSize.length-2))
  let linesCount = getNoOfLines(element);

  return (
    <div 
      style={{
        top:rect.top + window.scrollY,
        left:rect.left + window.scrollX,
        width:rect.width, 
        height:rect.height, 
        background: config.text?.bgColor || config.bgColor || "white",
        borderRadius: config.text?.borderRadius || "0.5rem",
      }}
      className={styles.outer__skeleta}>
        {
          Array.from(Array(linesCount).keys()).map((e,i)=>{
            return(
              <div 
                key={i}
                style={{
                  width:rect.width-20, 
                  height:h, 
                  border:"5px solid "+ (config.text.bgColor || config.bgColor || "white")
                }}
                className={`${styles.inner__skeleta} ${styles.fade}`}
                >
              </div>
            )
          })
        }
        
      </div>
  )
}

export {Text as default}