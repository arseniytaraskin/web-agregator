import React from "react";
import styled from "styled-components";
import {H2Style} from "../../../pages/ProjectEditing/ProjectEditing";
import {Link} from "react-router-dom";

const ProjectPlayStyle = styled.div`
  margin-bottom: 50px;
`

const ImageStyled = styled.img`
  display: inline-block;
  margin-bottom: 25px;
  object-fit: cover;
  width: 261px;
  height: 153px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
`


const ButtonStyled = styled(Link)`
  width: 100%;
  height: 51px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  background: linear-gradient(180deg, #60FB9E 0%, #1EFE77 0.01%, #0D9834 100%);
  border-radius: 3px;
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1165px) {
    max-width: 262px;
    width: auto;
  }
`

interface ProjectPlayProps {
    name: string;
    image: any;
    path?: string;
}

const ProjectPlay = ({name, image, path = ''}: ProjectPlayProps) => {
    return (
        <ProjectPlayStyle>
            <H2Style>{name}</H2Style>
            <ImageStyled src={image}/>
            <ButtonStyled to={path}> Играть </ButtonStyled>
        </ProjectPlayStyle>
    )
}

export default ProjectPlay