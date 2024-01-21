import './Background.css'
import image1 from '../../assets/one232.png'
import image2 from '../../assets/front.png'

const Background = ({heroCount}) => {
  if(heroCount===0){
      return <img src={image1} className='background'/>
  }
  else if(heroCount===1){
    return <img src={image2} className='background'/>
  }
  return (
    <div>Background</div>
  )
}

export default Background