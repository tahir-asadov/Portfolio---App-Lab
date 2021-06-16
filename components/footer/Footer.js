import Link from "next/link";
import Image from "next/image";
import { FaSlackHash, FaFacebookF, FaTwitter, FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";
import Container from "../Container";

const FooterStyle = styled.div`
  min-height: 567px;
  background-color: #09142e;
  padding: 50px 0 30px 0;
  display: flex;
`;
const ContainerStyle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  > div {
    width: 100%;
  }
`;

const FooterNav = styled.div`
  padding: 30px 0;
  a {
    font-size: 16px;
    line-height: 44px;
    color: #ffffff;
    font-weight: 400;
    margin-right: 30px;
    &:last-item {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 400px) {
    a {
      margin: 0;
      display: block;
    }
  }
`;

const SocialLinks = styled.div`
  padding: 30px 0;
  svg {
    font-size: 30px;
    line-height: 44px;
    color: #ffffff;
    font-weight: 400;
    margin-right: 30px;
    &:last-item {
      margin-right: 0;
    }
  }
`;

const Copy = styled.div`
  margin-top: 10px;
  p {
    font-size: 14px;
    line-height: 44px;
    color: rgba(255,255,255,0.21);
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <ContainerStyle>
        

        <div>

          <div>
            <Link href="/#aa">
              <a><Image src="/logo@2x.png" width={117} height={32} /></a> 
            </Link>
          </div>

          <FooterNav>
            <Link href="#Home"><a>Home</a></Link>
            <Link href="#Key Featurs"><a>Key Featurs</a></Link>
            <Link href="#Pricing"><a>Pricing</a></Link>
            <Link href="#Testiminial"><a>Testiminial</a></Link>
            <Link href="#FAQ"><a>FAQ</a></Link>
          </FooterNav>

          <SocialLinks>
            <Link href="#"><a><FaSlackHash /></a></Link>
            <Link href="#"><a><FaFacebookF /></a></Link>
            <Link href="#"><a><FaTwitter /></a></Link>
            <Link href="#"><a><FaGithubSquare /></a></Link>
          </SocialLinks>

          <Copy>
            <p>Copyright&copy; Arifur Rahman Rushar 2019. All rights reserved.</p>
          </Copy>

        </div>


      



        </ContainerStyle>
    </FooterStyle>
  )
}

export default Footer
