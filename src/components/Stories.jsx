import { useState,useEffect } from 'react'
import styled from 'styled-components'
import { Story } from './Story'

export const Stories = ({stories}) => {
  
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const activeStory = stories[activeStoryIndex]
  
  const handleModalOpen = (index) => setActiveStoryIndex(index)
  
  const handleModalClose = () => setActiveStoryIndex(null)
  
  useEffect(() => {
  if(
  (activeStoryIndex < 0) 
  || 
  (activeStoryIndex >= stories.length)
  )
  handleModalClose()
  },[activeStoryIndex,stories.length])
  
  return(
  <>
  
  <StoriesWrapper>
  {
  stories.map((story,index)=>{ 
  return (<StoryThumbnail 
  key={index}
  thumbnail={story.thumbnail.src} 
  username={story.username} 
  index={index}
  setActiveStory={handleModalOpen}
  />)
  })
  }
  </StoriesWrapper>
  
  {activeStory && <Story
  data={activeStory}
  goToPrevStory={() => setActiveStoryIndex(activeStoryIndex - 1)}
  goToNextStory={() => setActiveStoryIndex(activeStoryIndex + 1)}
  handleCloseClick={handleModalClose}
  /> }
  
  </>
  )
}

const StoryThumbnail = ({
  index,
  thumbnail,
  username,
  setActiveStory
}) => {
  return (
  <ThumbnailWrapper>
  <ThumbnailButton
  onClick={()=>setTimeout(() => setActiveStory(index),250)}
  >
  <img 
  src={thumbnail}
  alt={username} />
  </ThumbnailButton>
  <p
  style={{
  fontSize:'.65rem',
  fontWeight: '400',
  color: '#fff',
  marginTop:'3px',
  width: 'max-content'
  }}
  >{username}</p>
  </ThumbnailWrapper>
  )
}

const StoriesWrapper = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
    
     width: 100%;
     padding: 6px;
     
     overflow: auto;
`
const ThumbnailWrapper = styled.div`
     display: grid;
     place-items: center;
     margin: 0 .75rem;
     
     &:first-child,&:last-child{
      margin: 0;
     }
`
const ThumbnailButton = styled
.button`
     border: none;
     border-radius: 50%;
     
     padding: 2px;
     
     width: 4rem;
     height: 4rem;
     
     display: grid;
     place-items: center;
     
     position: relative;
     
     transition: transform .25s ease;
     
     &::before{
     content: '';
     position: absolute;
     inset: -2.5px;
     z-index: -1;
     border-radius: 50%;
     background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
     }
     
     & img{
     width: 100%;
     aspect-ratio: 1/1;
     
     border-radius: 50%;
    
     object-fit: cover;
     }
     &:active{
      transform: scale(.9);
     }
`