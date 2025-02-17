import React from "react";
import styled from "styled-components";
import searchImg from "../../../assets/images/icons/search.svg";

const SearchStyle = styled.div`
  
`

const SearchBlockStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 15px;
  height: 60px;
  background-color: var(--dark-grey-color);
`

const SearchInputStyle = styled.input`
  flex: 1 1;
  margin-right: 13px;
  padding-left: 10px;
  height: 40px;
  width: 196px;
  border: none;
  border-radius: 4px;
  background-color: #3d3d3d;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: rgba(255, 255, 255, 0.65);
  
  &:focus {
    border: none;
    outline: none;
  }
`


function Search() {
  return (
      <SearchStyle>
        <h2>Проекты</h2>
        <SearchBlockStyle>
          <SearchInputStyle type="text" placeholder="Поиск"/>
          <img src={searchImg} alt="" style={{cursor: "pointer"}}/>
        </SearchBlockStyle>
      </SearchStyle>

  )
}

export default Search