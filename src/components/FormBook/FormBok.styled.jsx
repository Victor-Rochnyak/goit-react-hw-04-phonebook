import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Input = styled.input`
  margin-left: 3px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-image: initial;
  border-bottom: 2px solid rgb(34, 145, 135);
  outline: none;
  &::placeholder {
    text-align: center;
  }
`;

export const Button=styled.button`
    border-radius: 5px;
    border: 1px solid rgba(14, 185, 190, 0.925);
    transition: all 250ms ease 0s;
    &:hover{
        color: rgb(255, 255, 255);
        background: linear-gradient(281deg, rgb(23 145 128) 0%, rgb(59 207 70) 100%);
    }
`