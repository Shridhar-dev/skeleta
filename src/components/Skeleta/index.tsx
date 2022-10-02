import { useEffect,useState } from 'react'
import Text from '../Text'
import Image from '../Image'

function Skeleta({loading}:any) {
    const [skeletonElementsCopy, setSkeletonCopy] = useState<any>([]);
    function setSk(){
        let skeletonElementsText = Array.from(document.querySelectorAll(".s-text"))
          skeletonElementsText.forEach((element)=>{
              setSkeletonCopy((prevState:any)=>[...prevState,<Text element={element}/>])
        })
    
        let skeletonElementsImage = Array.from(document.querySelectorAll(".s-image"))
          skeletonElementsImage.forEach((element)=>{
              setSkeletonCopy((prevState:any)=>[...prevState,<Image element={element}/>])
        })
    }
    useEffect(()=>{
        if(!loading) {
            console.log("Hello")
            setSkeletonCopy([])
            return;
        };
        setTimeout(()=>{
          setSk();
        },10)
        
        let resizer = window.addEventListener("resize",()=>{
            setSkeletonCopy([])
            setSk();
        })
        return () => {
          window.removeEventListener("resize",resizer)
        }
      },[loading])
      
  return (
    <div>
        {
            skeletonElementsCopy?.map((e:any,i:any)=>{
            return(
                <div key={i}>
                  {e}
                </div>
            )
            })
        }
    </div>
  )
}

export default Skeleta