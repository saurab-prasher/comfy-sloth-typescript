import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const button = styled(Link)`
  background-color: #531410;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;
  display: inline-block;

  &:hover {
    background-color: #fff;
    color: #531410;
    border: 1px solid #531410;
  }
`;
