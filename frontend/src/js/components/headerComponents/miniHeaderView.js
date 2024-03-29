import React from 'react'
import styled from 'styled-components'
import Colors from '../../utils/colors'
import miniBackGroundImage from '../../../assets/img/headerView/mini-header.png'

const Wrapper = styled.div`
  display: grid;
  grid-row:1;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  background-image: url(${miniBackGroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
`

export const MiniHeaderView = ({openInstagramLink}) => (
  <Wrapper/>
)

export default MiniHeaderView
