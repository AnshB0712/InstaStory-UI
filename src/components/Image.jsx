import { useState,useEffect,useRef} from 'react'

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

  <p 
  style={{
  color:'#fff',
  display: inViewImageLoaded ? 'none':'block'
  }}>
  Loading...
  </p>
  
  </figure>
  )
  
}