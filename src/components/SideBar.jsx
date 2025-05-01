import styled from "styled-components";

const SideBarContainer = styled.div`
  max-width: 270px;
  border: 1px solid black;
  height: 100vh;
  padding: 1rem 2rem;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <h1>Daily Tunes</h1>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Habits</li>
          <li>Accounts</li>
          <li>Metrics</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </SideBarContainer>
  );
}

export default SideBar;
