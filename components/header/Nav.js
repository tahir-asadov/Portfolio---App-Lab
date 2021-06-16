import Link from "next/link";
import styled from "styled-components"

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    list-style: none;
    a {
      padding: 5px 10px;
      margin-left: 15px;
      text-decoration: none;
    }
  }
`;

function Nav() {
  return (
    <NavStyles className="navigation">
      <li><Link href="#"><a>Home</a></Link></li>
      <li><Link href="#"><a>Key Featured</a></Link></li>
      <li><Link href="#"><a>Pricing</a></Link></li>
      <li><Link href="#"><a>Testimonial</a></Link></li>
      <li><Link href="#"><a>FAQ</a></Link></li>
    </NavStyles>
  )
}

export default Nav
