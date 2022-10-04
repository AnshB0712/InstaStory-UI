import { useState, useEffect } from 'react';
import {X,ChevronRight,ChevronLeft} from 'react-bootstrap-icons'
import styled,{keyframes} from 'styled-components'
import { Image } from './Image'

export const Story = ({
  data,
  goToPrevStory,
  goToNextStory,
  handleCloseClick
}) => {
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const [inViewImageLoaded,setInViewImageLoaded] = useState(false)
  
  const currentSlide = data.slides[currentSlideIndex];
  const slideCount = data.slides.length;
  
  const handlePrevClick = ()=>{
   const newIndex = currentSlideIndex - 1
   if(newIndex<0){
    setCurrentSlideIndex(0)
    goToPrevStory()
   }
   else
   setCurrentSlideIndex(newIndex);
}
  const handleNextClick = ()=>{
    
   const newIndex = currentSlideIndex + 1
   
   if(newIndex === data.slides.length){
    setCurrentSlideIndex(0)
    goToNextStory()
   }
   else
   setCurrentSlideIndex(newIndex);
}

  useEffect(() => {
    
  if(!inViewImageLoaded) return
    
  let interval;

	interval = setInterval(() => {
	 handleNextClick()
  },data.timer)

	return () => {
	  clearInterval(interval)
	  setInViewImageLoaded(false)
	}
  }, [
    handleNextClick,
    data.slides.length,
    currentSlide.image,
    inViewImageLoaded
  ]);

  return(
  <StoryWrapper>
  
  <Indicators>
  {data.slides.map((_,i) => {
  return (
  <Indicator 
  key={i}
  className={currentSlideIndex === i && inViewImageLoaded ?'active':''}
  completed={currentSlideIndex > i}
  /> 
  )})}
  </Indicators>
  
  <UserInfoTab>
	 <img 
	 src={data.thumbnail.src} 
	 alt={data.thumbnail.alt} />
	 <span>{data.username}</span>
   <X 
	 onClick={handleCloseClick}
	 size={36}
	 color="#ccc"
	 style={{marginLeft:'auto'}}/>
	</UserInfoTab>
  

   <Image 
   setInViewImageLoaded={setInViewImageLoaded}
   inViewImageLoaded={inViewImageLoaded}
   src={currentSlide.image}
  />
  
  <ButtonContainer>
  
  <button
  onClick={handlePrevClick}
  style={{left:'10px'}}>
  <ChevronLeft/>
  </button>
  
  <button
  onClick={handleNextClick}
  style={{right:'10px'}}
  >
  <ChevronRight/>
  </button>
  
  </ButtonContainer>
  
  </StoryWrapper>
  )
}


const StoryWrapper = styled.div`
     max-width: 1700px;
     width: 100%;
     
     background: #000;
     
     position: fixed;
     inset: 0;
     
     overflow: hidden;
     
     display: grid;
     place-items: center;
     
     margin: auto;
     padding: 20px 5px;
     
     z-index: 100;
     
     &::before{
      content: '';
      width: 100%;
      height: 130px;
      left: 0;
      top: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(255, 255, 255, 0) 70%);
      position: absolute;
     }
     
     & img{
      width: 100%;
      max-width: 780px;
      border-radius: 6px;
     }
`

const fill = keyframes`
  from {
    transform: translateX(-100%)
  }

  to {
    transform: translateX(0%)
  }
`

const Indicators = styled.div`
     display: flex;
     justify-content: space-around;
     gap: 5px;
  
     position: absolute;
     top: 7px;
  
     padding: 0 5px;
  
     min-width: 100%;
`

const Indicator = styled.span`
     display: block;
     
     width: 100%;
     height: 2px;
     
     border-radius: 12px;
     
     background: ${({completed}) => completed ? '#fff':'#aaa'};
     
     position: relative;
     overflow: hidden;
     
     &.active{
     transition: transform 1s ease;
     }
     &.active::before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: #fff;
      animation: ${fill} 4s ease;
     }
}`

const UserInfoTab = styled.div`
     display: flex;
     justify-content: start;
     align-items:center;
  
     position: absolute;
     top: 17px;
     min-width: 100%;
  
     padding: 0 5px;
     
     & img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 5px;
      object-fit: cover;
     }
     
     & span{
	    color: #fff;
	    font-size: .7rem;
      font-weight: 700;
     }
`

const ButtonContainer = styled.div`
      position: absolute;
      top: 50%;
      left: 5px;
      right: 5px;
      
      & button{
      position: absolute;
      border: none;
      background: #fff;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.7;
    }
`
