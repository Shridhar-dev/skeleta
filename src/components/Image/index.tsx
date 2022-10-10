import styles from "../index.module.css";
import config from "../../../skeleta.config"

function Image({element}:any) {
  let rect = element.getBoundingClientRect();
  return (
    <div style={{
        top:rect.top + window.scrollY,
        left:rect.left + window.scrollX,
        width:rect.width, 
        height:rect.height, 
        background: config.image?.bgColor || config.bgColor || "white",
        borderRadius: config.image?.borderRadius || "0.5rem",
      }}
      className={styles.outer__skeleta}>
        <div 
          style={{
            width:rect.width-20, 
            height:rect.height-20, 
            minHeight:"20px"
          }}
          className={`${styles.inner__skeleta} ${styles.fade}`}>
        </div>
      </div>
  )
}

export default Image