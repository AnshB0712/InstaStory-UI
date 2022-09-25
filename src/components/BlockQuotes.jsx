import Quotes from './Quotes'
import styled from 'styled-components'

export const BlockQuotes = ({text}) => {
  return (
  <Wrapper>
  <Quotes style={{
  position:'absolute',
  top: '5px',
  left: '5px',
  zIndex: '-1',
  borderRadius: '50%',
  padding: '10px',
  background: 'rgba(249,198,154,.25)'
  }}/>
  <p>
  {text}
  </p>
  <Quotes style={{
  position:'absolute',
  bottom: '5px',
  right: '5px',
  
  transform: 'rotate(180deg)',
  
  borderRadius: '50%',
  
  padding: '10px',
  
  background:'rgba(249,198,154,.25)',
  zIndex: '-1',
  }}/>
  </Wrapper>
  )
}

const Wrapper = styled.div`
      position: relative;
      isolation: isolate;
      
      width: 100%;
      
      display: grid;
      place-items: center;
      
      background: #fff;
      padding: 1.5rem;
      
      border-radius: 8px;
      border-top: 4px solid rgb(249,198,154);
      
      & p{
      font-size: 1rem;
      font-style: italic;
      font-weight: 500;
      
      color: #505050;

      padding: 1.25rem;
      }
`