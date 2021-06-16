import styled from 'styled-components'

const TitleStyle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Title = ({ className="default", children}) => {
  return <TitleStyle className={className}>{children}</TitleStyle>
}

  
export default Title;