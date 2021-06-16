import styled from 'styled-components'

const Wrapper = ({className="default", children}) => {
  return <WrapperStyle className={className}>{children}</WrapperStyle>
}

const WrapperStyle = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default Wrapper;