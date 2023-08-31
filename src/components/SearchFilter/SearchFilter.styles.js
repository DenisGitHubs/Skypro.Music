import { styled } from "styled-components";

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
  }`

export const FilterLink = styled.a`
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px;
&:hover {
    color: #B672FF;
    text-decoration-line: underline;
  }`