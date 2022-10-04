import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Landing(params) {
  const LandingStyle = styled.div`
    background-color: whitesmoke;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <LandingStyle>
      <div>
        <Link to="/main">dd</Link>
      </div>
    </LandingStyle>
  );
}
