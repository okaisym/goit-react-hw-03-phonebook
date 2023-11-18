import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 5px #b0e0e6;
  background-color: #b0e0e6;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 3px 3px 3px #fff, -1px -1px 5px #fff;
  font-weight: 800;
  color: #6495ed;
`;

export const Label = styled.label`
  font-weight: 700;
  display: flex;
  flex-flow: column;
  margin: 10px 0 10px 0;
  font-size: 14px;
  color: #fff;
`;

export const AddContactBtn = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 0 10px #fff;
  }
  &:active {
    background-color: #2a56c8;
    box-shadow: 0 0 10px #fff;
  }
  font-weight: 700;
  margin: 20px auto; 
`;

export const PhonebookContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 5px;
  outline: none;
  border: none;
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 0 10px #fff;
  }
  &:active {
    background-color: #2a56c8;
    box-shadow: 0 0 10px #fff;
  }
  font-weight: 700;
  margin-left: auto; 
  display: flex;
  justify-content: space-between;
`

export const ListItem = styled.li`
  color: white;
  font-weight: 600;
  list-style: none;
  &:before {
    content: '•';
    color: #6495ed;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  display: flex;
  justify-content: space-between; 
  list-style: none;
  margin: 10px;
  > span {
    margin-right: 20px; 
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FindInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 100%; 
`