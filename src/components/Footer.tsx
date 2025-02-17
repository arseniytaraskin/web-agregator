import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo/logo.svg"
import vkIcon from "../assets/images/icons/social/vk.svg"
import internetIcon from "../assets/images/icons/social/InternetIcon.svg"
import tgIcon from "../assets/images/icons/social/TGIcon.svg"
import {Link} from "react-router-dom";


const FooterStyle = styled.div`
  margin: 90px auto 0;
  padding: 46px 117px 80px;
  max-width: 926px;
  border-top: 2px solid #2D2D2D;

  @media (max-width: 410px) {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

function Footer() {
  return (
      <FooterStyle>
        <SectionOneFooter/>
        <SectionTwoFooter/>
      </FooterStyle>
  )
}

const SectionOneFooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 27px;
  flex-wrap: wrap;
  row-gap: 20px;
  
  @media (max-width: 410px) {
    > a {
      max-width: 100%;
    }
  }
`


function SectionOneFooter() {
  return (
      <SectionOneFooterStyle>
        <Link to={'/'}><img src={logo} style={{marginRight: 30}} alt=""/></Link>
        <img src={vkIcon} style={{marginRight: 15}} alt=""/>
        <img src={internetIcon} style={{marginRight: 15}} alt=""/>
        <img src={tgIcon} style={{marginRight: 15}} alt=""/>
      </SectionOneFooterStyle>
  )
}

const SectionTwoFooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 10px;
  }
`

const LinkForFooterStyle = styled(Link)`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #99A2AD;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--blue-bg);
  }
`

function SectionTwoFooter() {
  return(
      <SectionTwoFooterStyle>
        <LinkForFooterStyle to={'/editing'}>Площадка проектов</LinkForFooterStyle>
        <LinkForFooterStyle to={'/'}>Защиты проектов</LinkForFooterStyle>
        <LinkForFooterStyle to={'/'}>Заказать проект</LinkForFooterStyle>
        <LinkForFooterStyle to={'/'}>Обучение команды</LinkForFooterStyle>
      </SectionTwoFooterStyle>
  )
}


export default Footer