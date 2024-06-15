import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
`

export const CardContainer = styled.div`
  padding: 30px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`

export const EditableBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #323f4b;
  margin-right: 10px;
`

export const Input = styled.input`
  padding: 10px;
  height: 30px;
  width: 250px;
  background-color: transparent;
  margin-right: 20px;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
