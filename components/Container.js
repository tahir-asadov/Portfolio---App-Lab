import styled from "styled-components";

const ContainerStyles = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;


function Container({children, ...props}) {
  return (
    <ContainerStyles {...props}>{children}</ContainerStyles>
  )
}

export default Container;