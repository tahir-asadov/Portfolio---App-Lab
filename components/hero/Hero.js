import styled from "styled-components"
import Button from '../../components/Button'
import Container from '../../components/Container'
import { BiBadgeCheck } from 'react-icons/bi';
import Link from "next/link";

const Section = styled.div`
  background-image: url(/hero-left-bg.png), url(/hero-center-bg.png), url(/hero-bottom-bg.png);
  background-size: auto, auto, 100%;
  background-repeat: no-repeat;
  background-position: center left, center top, center bottom;
`;

const StyledContainer = styled(Container)`
  min-height: 800px;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 992px) {
    margin-top: 50px;
    grid-template-columns: 1fr;
    .hero-left {
      padding-bottom: 50px;
    }
    .hero-right {
      justify-content: center;
      order: -1;
    }
  }
`;

const Left = styled.div``

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 28px;
  color: #242f51;
  font-weight: 400;
  max-width: 362px;
  height: 35px;
  border-radius: 17px;
  background-color: #e2eaed;
  position: relative;
  span {
    width: 39px;
    height: 35px;
    border-radius: 17px;
    background-color: #feaa25;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    svg {
      font-size: 24px;
      color: white;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  line-height: 75px;
  color: #242f51;
  font-weight: 600;
  margin: 15px 0;
  @media only screen and (max-width: 400px) {
    font-size: 30px;
    line-height: 45px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  > *:first-child {
    margin-right: 15px;
  }
`;

function Hero() {
  return (
    <Section>
      <StyledContainer>
        <Left className="hero-left">
          <Center>
            <Badge>
              <span><BiBadgeCheck /></span>#1 Editiors Choice App of 2020
            </Badge>
            <Heading>Best app for your modern lifestyle</Heading>
            <p>Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
            
            <ButtonGroup>
              <Button href="">Try for free</Button>
              <Link href="">Watch demo video</Link>
            </ButtonGroup>
          </Center>
        </Left>
        <Right className="hero-right">
          <img src="/phone.png" />
        </Right>
      </StyledContainer>
    </Section>
  )
}

export default Hero
