import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const S_SNSLinks = styled.ul``;

const SNSLinks = () => {
  return (
    <S_SNSLinks>
      <li>
        <a href='#'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href='#'>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </li>
      <li>
        <a href='#'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </S_SNSLinks>
  );
};

export default SNSLinks;
