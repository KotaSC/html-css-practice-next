import styled from "styled-components";
import SideBox from "./SideBox";

const S_Container = styled.aside`
  @media screen and (min-width: 600px) {
    width: 26%;
  }
`;

const Sidebar = () => {
  return (
    <S_Container>
      <SideBox />
    </S_Container>
  );
};

export default Sidebar;
