import styled from "styled-components"
import Container from '../../components/Container'
import Feature from "./Feature";
import {GiSpeedometer} from "react-icons/gi"
import {AiOutlineSchedule} from "react-icons/ai"
import {BiVector} from "react-icons/bi"

const ContainerStyle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    > div {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const Left = styled.div``;
const Right = styled.div`
`;

const H3 = styled.h3`
  font-size: 36px;
  line-height: 46px;
  color: #242f51;
  font-weight: 600;
  @media only screen and (max-width: 992px) {
    text-align: center;
  }
`;

const P = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #616368;
  font-weight: 400;
  @media only screen and (max-width: 992px) {
    text-align: center;
  }
`;

const FeatureStyle = styled(Feature)`
  display: grid;
  grid-template-columns: 100px auto;
  color: ${props => props.color};
  > div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.bgColor};
      border-radius: 88px;
      width: 88px;
      height: 88px;
      margin-top: 40px;
      svg {
        font-size: 65px;
      }
    }
    &:last-child {
      margin-left: 20px;
      max-width: 280px;
      h4 {
        margin-bottom: 10px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

function Features() {
  return (
    <ContainerStyle>
      <Left>
        <img src="/features-left.png" />
      </Left>
      <Right>
        <H3>Awesome apps features</H3>
        <P>Increase productivity with a simple to-do app. app for managing your personal budgets.</P>
        <FeatureStyle
          color="#f55767"
          bgColor="#ffecef"
          Icon={GiSpeedometer}
          title="Fast Performance"
          description="Get your blood tests delivered at home collect a sample from the news your blood tests."  
        />
        <FeatureStyle
          color="#2563ff"
          bgColor="#f4f4ff"
          Icon={AiOutlineSchedule}
          title="Prototyping"
          description="Get your blood tests delivered at home collect a sample from the news your blood tests."
        />
        <FeatureStyle
          color="#40975f"
          bgColor="#e4ffee"
          Icon={BiVector}
          title="Vector Editing"
          description="Get your blood tests delivered at home collect a sample from the news your blood tests."
        />
      </Right>
    </ContainerStyle>
  )
}

export default Features
