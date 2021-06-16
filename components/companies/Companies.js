
import styled from 'styled-components';
import Container from '../../components/Container'


const ContainerStyle = styled(Container)`
  padding-top: 110px;
  padding-bottom: 110px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    margin-right: 70px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    > img {
      margin-bottom: 30px;
      margin-right: 0;
    }
  }
`;

const Heading = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #242f51;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

function Companies() {
  return (
    <ContainerStyle>
      <Heading>Trusted by companies like</Heading>
      <Center>
        <img src="/companies/1.png" />
        <img src="/companies/2.png" />
        <img src="/companies/3.png" />
        <img src="/companies/4.png" />
        <img src="/companies/5.png" />
      </Center>
    </ContainerStyle>
  )
}

export default Companies
