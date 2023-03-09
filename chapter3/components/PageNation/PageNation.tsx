import styled from "styled-components";

const S_PageNation = styled.ul`
  display: flex;
  justify-content: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 1.5rem;
  text-align: center;

  a:hover {
    background: #93d8d0;
    color: #fff;
  }

  a,
  .current {
    border-radius: 50%;
    padding: 9px 4px 0 4px;
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 0 6px;
    text-decoration: none;
  }

  .current {
    background: #ccc;
    color: #fff;
  }
`;

const PageNation = () => {
  return (
    <S_PageNation>
      <li>
        <span className="current">1</span>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">&gt;</a>
      </li>
    </S_PageNation>
  );
};

export default PageNation;
