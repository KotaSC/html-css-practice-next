import styled from "styled-components";

const S_Button = styled.p`
  a {
    color: #fff;
    padding: 10px 20px;
    background: #eda1a1;
    box-shadow: 0 0 0 5px #eda1a1;
    border: 2px dashed #e38787;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
  }

  a:hover {
    color: #fff;
    background: #e38787;
    box-shadow: 0 0 0 5px #e38787;
    border: 2px dashed #eda1a1;
  }
`;

const Button = (props: { text: string }) => {
  return (
    <S_Button>
      <a href="#">{props.text}</a>
    </S_Button>
  );
};

export default Button;
