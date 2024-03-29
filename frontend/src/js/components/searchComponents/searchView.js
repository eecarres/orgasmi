import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import { SimpleButton } from '../muiComponents/buttons'
import pinkBackGround from '../../../assets/img/searchView/background.png'
import { TextFieldDownshift, TextfieldOutline } from '../muiComponents/textFields'
import calendarIcon from '../../../assets/img/searchView/icon_calendar.jpg'
import nailPolishIcon from '../../../assets/img/searchView/icon_nail_polish.jpg'
import locationIcon from '../../../assets/img/searchView/icon_location.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 20% 30% 7% 40%;
  background-image: url(${pinkBackGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
`

const InputDataWrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-column:2;
  grid-template-columns: 100%;
  grid-template-rows: 10% 20% 60% 10%;
  border-radius: 1vw;
  align-self: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`

const Title = styled.h1`
  display: grid;
  grid-row:2;
  font-size: 2.5vw;
  text-align: center;
  font-family: 'Rozha One', serif;
`

const TextFieldsWrapper = styled.div`
  display: grid;
  grid-row:3;
  grid-template-columns: 100%;
  grid-template-rows: 10% 80% 10%;
`

const TextFieldsUpWrapper = styled.div`
  display: grid;
  grid-row:2;
  grid-template-columns: 10% 40% 40% 10%;
  grid-template-rows: 100%;
`

const DefaultWrapper = styled.div`
  display: grid;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  justify-content:center;
`

const SearchView = ({setServiceSearch, setPostalCodeSearch, setDateSearch, serviceTypeSearch, postalCodeSearch, dateSearch}) => (
  <Wrapper>
    <InputDataWrapper>
      <Title>
        DINOS QUÉ Y DÓNDE
      </Title>
      <TextFieldsWrapper>
        <TextFieldsUpWrapper>
          <DefaultWrapper gridColumn="2">
              <TextFieldDownshift placeholder = "Escoge tu tratamiento" style={{width: '25vw', margin:'1vw'}} icon={nailPolishIcon} onChange={() => console.log('@@@@@@@change')}/>
          </DefaultWrapper>
          <DefaultWrapper gridColumn="3">
            <TextfieldOutline placeholder = "Código postal" style={{width: '25vw', margin:'1vw'}} icon={locationIcon} onChange={(e) => setPostalCodeSearch(e)}/>
          </DefaultWrapper>
        </TextFieldsUpWrapper>
      </TextFieldsWrapper>
    </InputDataWrapper>
    <DefaultWrapper gridColumn="2" gridRow="4">
      <Link to="/professionals" style={{ textDecoration: 'none', justifySelf: 'center' }}>
        <SimpleButton text="RESERVAR" style={{width: '15vw', height: '4.60vw', fontSize: '1.3vw', padding:'inherit'}} onClick={() => null}/>
      </Link>
    </DefaultWrapper>
  </Wrapper>
)


export default SearchView
