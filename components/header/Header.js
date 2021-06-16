import styled from "styled-components"
import Button from '../../components/Button'
import Container from '../../components/Container'
import Logo from '../../components/header/Logo'
import Nav from '../../components/header/Nav'

const HeaderStyles = styled.div`
  margin-top: 95px;
  > div {
    display: grid;
    grid-template-columns: 100px auto 190px;
    > div {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &:first-child {
        justify-content: start-end;
      }
      > a {
        display: flex;
      }
    }
  }
  a {
    color: #242f51;
  }
  @media only screen and (max-width: 992px) {
    margin-top: 30px;
    > div {
      display: flex;
      justify-content: space-between;
    }
    .navigation {
      display: none;
    }
  }
`;

function Header() {
  return (
    <HeaderStyles>
      <Container>
        <Logo />
        <Nav />
        <Button href="#/asd">Try it for free</Button>
      </Container>
    </HeaderStyles>
  )
}

export default Header
