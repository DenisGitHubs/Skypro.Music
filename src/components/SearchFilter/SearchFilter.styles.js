import { styled } from "styled-components";
import propTypes from 'prop-types'
export const CenterblockFilter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-bottom: 51px;`

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`

export const Show = styled.div`
display: ${props => props.show ? 'block' : 'none'};
position: absolute;
padding: 34px;
border-radius: 12px;
background-color: #313131;
width: 248px;
height: 305px;
z-index: 100;`

export const NotShow = styled.div`
display: none;`

export const ShowLink = styled.div` 
display:flex;
flex-direction: column;
gap: 28px;
overflow-y: scroll;
height: 237px;
width: 180;
font-family: StratosSkyeng;
&::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
  }
&::-webkit-scrollbar {
    width: 4px;
    background-color: #4B4949;
  }
    `

export const FilterLink = styled.a`
color: ${props => props.isSelected ? '#B672FF' : '#FFF'};
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px;
&:hover {
    color: #B672FF;
    text-decoration-line: underline;
  }
`
export const FilterBox = styled.div`
position: relative;
`
export const CounterImg = styled.div`
display: ${props => props.flag ? 'block' : 'none'};
position: absolute;
background: #B672FF;
background-repeat: no-repeat;
border-radius: 100%;
right: 0;
top: -10px;
width: 26px;
height: 25.5px;
text-align: center
`

export const CounterText = styled.p`
position: relative;
top: 15%;
text-align: 50%;
font-size: 0.8em;
`