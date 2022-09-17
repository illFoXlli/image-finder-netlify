import styled from 'styled-components';

export const Contacts = styled.ul`
  margin-bottom: 8px;
`;

export const ContactsItem = styled.li``;

export const Button = styled.button`
  border-radius: 5px;
  margin: 0 0 0 50px;
  cursor: pointer;
  border: 2px solid purple;

  :hover,
  :focus {
    background-color: rgb(79, 76, 255);
    color: white;
    box-shadow: 0px 4px 16px 0px rgba(227, 102, 212, 0.2);
  }
  :active {
    background-color: rgb(76, 103, 255);
  }
`;
