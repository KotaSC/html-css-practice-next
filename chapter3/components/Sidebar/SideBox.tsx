import styled from "styled-components";

const S_SideBox = styled.div`
  margin-bottom: 4rem;
  border: 1px solid #ccc;
  outline: 2px solid #ccc;
  outline-offset: 4px;
  border-radius: 6px;
  padding: 0.875rem;
  position: relative;
  line-height: 3.5rem;

  h3 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #949087;
  }

  li {
    color: #949087;
    border-bottom: 1px dashed #949087;
  }

  li::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #93d8d0;
    display: inline-block;
    margin: 0 8px 2px 0;
  }

  a {
    color: #949087;
    text-decoration: none;
  }
`;

const SideBox = () => {
  return (
    <S_SideBox>
      <h3>Category</h3>
      <ul>
        <li>
          <a href="#">猫の種類</a>
        </li>
        <li>
          <a href="#">食事</a>
        </li>
        <li>
          <a href="#">健康・病気</a>
        </li>
        <li>
          <a href="#">猫の生態</a>
        </li>
        <li>
          <a href="#">猫と暮らす</a>
        </li>
      </ul>
    </S_SideBox>
  );
};

export default SideBox;
