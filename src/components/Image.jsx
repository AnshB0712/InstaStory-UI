import { useState,useEffect,useRef} from 'react'
import styled,{keyframes} from 'styled-components'

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const Image = ({
  src,
  alt,
  setInViewImageLoaded,
  inViewImageLoaded
}) => {
  
  const imgRef = useRef(null)
  
  const observerCallback = ([e]) => {
    if(e.isIntersecting)
    e.target.src = e.target.dataset.src
  }
  
  useEffect(() => {
  const observer = new IntersectionObserver(observerCallback,options)
    
  if(imgRef.current)
  observer.observe(imgRef.current)
    
  return () => observer.disconnect()
  },[src])
  
  return (
  <figure>

  <img 
  ref={imgRef}
  style={{opacity: inViewImageLoaded ? '1':'0'}}
  data-src={src}
  onLoad = {() => setInViewImageLoaded(true)}
  />

  <ImageLoader 
  inViewImageLoaded
  ={inViewImageLoaded}
  />
  
  </figure>
  )
  
}

const ImageFigure = styled.figure`
     position: relative;
`

const spin = keyframes`
  from{
  transform: 
  translate(-50%,-50%) rotate(0deg);
  }
  to{
  transform: 
  translate(-50%,-50%) rotate(360deg);
  }
`

const ImageLoader = styled.div`
     display: ${({inViewImageLoaded}) => inViewImageLoaded ? 'none':'block'};
      
     height: 35px;
     width: 35px;
     
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     
     border: 2px solid transparent;
     border-top: 2px solid #fff;
     border-radius: 50%;
     
     animation: ${spin} .5s linear infinite;
`