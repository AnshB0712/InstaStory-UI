import styled from 'styled-components'
import HeroImg from '../data/hero/hero.jpg'
import {BlockQuotes} from './BlockQuotes'


export const HeroSection = () => {
  return(
  <Wrapper>
  <img src={HeroImg} alt="Red Tour"/>
  
  <GridView>
  <BlockQuotes 
  text="No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind." 
  />
  <BlockQuotes 
  text="At some point you have to forget about grudges because they only hurt." 
  />
  <BlockQuotes 
  text="Giving up doesn't always mean your weak sometimes your just strong enough to let go." 
  />
  <BlockQuotes 
  text="Life isn't how to survive the storm, it's about how to dance in the rain." 
  />
  </GridView>
  
  </Wrapper>
  )
}

const Wrapper = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     
     gap: 1rem;
     
     padding: 1rem .5rem;
     margin: 1rem 0;
     
     & img{
      width: 100%;
      border-radius: .75rem;
     }
     @media(min-width: 700px){
      flex-direction: row;
      align-items: start;
     }
`

const GridView = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
     gap: 1rem;
`