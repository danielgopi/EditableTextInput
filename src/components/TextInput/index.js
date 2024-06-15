import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  EditableBtnContainer,
  Paragraph,
  Input,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {
    userInput: '',
    isButtonClicked: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {isButtonClicked, userInput} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <EditableBtnContainer>
            {isButtonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <Input
                type="text"
                value={userInput}
                onChange={this.onChangeInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </EditableBtnContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default TextInput
