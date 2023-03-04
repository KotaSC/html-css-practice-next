import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const S_SNSLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const S_SNSIcon = styled.a`
  background: #fff;
  width: 3.75rem;
  height: 3.75rem;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.75rem;
  border-radius: 50%;
  color: #555;
`;

const SNSLinks = () => {
  return (
    <S_SNSLinks>
      <li>
        <S_SNSIcon href='#'>
          <FontAwesomeIcon icon={faTwitter} />
        </S_SNSIcon>
      </li>
      <li>
        <S_SNSIcon href='#'>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </S_SNSIcon>
      </li>
      <li>
        <S_SNSIcon href='#'>
          <FontAwesomeIcon icon={faInstagram} />
        </S_SNSIcon>
      </li>
    </S_SNSLinks>
  );
};

export default SNSLinks;
