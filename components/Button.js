import Link from "next/link"
import styled from "styled-components"

const ButtonStyle = styled.div`
  a {
    background-color: #2500f9;
    border-radius: 29px;
    text-align: center;
    color: white!important;
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    padding: 6px 40px;
  }
  @media only screen and (max-width: 400px) {
    a {
      padding: 0px 10px;
      font-size: 13px;
    }
  }
`;

function Button({children, ...props}) {
  return (
    <ButtonStyle>
      <Link {...props}>{children}</Link>
    </ButtonStyle>
  )
}

export default Button;
