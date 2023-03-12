import styled from "styled-components";

const S_Footer = styled.footer`
  background: #949087;
  text-align: center;
  padding: 3rem;
  margin-top: 3rem;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #c7c3ba;
    }
  }

  small {
    color: #c7c3ba;
    font-size: 0.875rem;
  }
`;

const S_FooterUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const S_FooterLi = styled.li`
  margin: 0 12px;
`;

const Footer = () => {
  return (
    <S_Footer>
      <S_FooterUl>
        <S_FooterLi>
          <a href="https://twitter.com/">Twitter</a>
        </S_FooterLi>
        <S_FooterLi>
          <a href="https://facebook.com/">Facebook</a>
        </S_FooterLi>
        <S_FooterLi>
          <a href="https://youtube.com/">Youtube</a>
        </S_FooterLi>
        <S_FooterLi>
          {" "}
          <a href="https://instagram.com/">Instagram</a>
        </S_FooterLi>
      </S_FooterUl>
      <p>
        <small>&copy; 2023 Cat Blog</small>
      </p>
    </S_Footer>
  );
};

export default Footer;
