import React from "react";
import styled from "styled-components";
import {InputBox, ProfileInput, TitleInput} from "../../pages/Profile/components/Information";
import {TeamInterface} from "../../interfaces/Team.interface";
import {Contacts, Role, WrapperComponent} from "../CreateTeamBlock";


const dataTeam: TeamInterface = {
  teamName: 'DreamTeam',
  members: [
    {name: 'Петров Игорь Васильевич', group: 'РИ-210912', role: 'Конципт дизанер', contacts: '+79564756354'},
    {name: 'Кашевников Игорь Николаевич', group: 'РИ-210912', role: 'Художнк', contacts: '+79564756354'},
    {name: 'Дробцов Игорь Ильич', group: 'РИ-210912', role: 'Девелопер', contacts: '+79564756354'},
    {name: 'Моветонов Игорь Догматович', group: 'РИ-210912', role: 'Аналитик', contacts: '+79564756354'},
  ]

}

const TeamBlock = () => {
  return (
      <>
        <TitleInput>Ваша команда</TitleInput>
        <InputBox style={{marginBottom: '47px'}}>
          <ProfileInput disabled={true} readOnly={true} value={dataTeam.teamName}/>
        </InputBox>
        <div style={{marginBottom: '109px'}}>
          {dataTeam.members.map((member, id) => (
              <>
                <TitleInput>Участник команды #{id + 1}</TitleInput>
                <InputBox>
                  <ProfileInput disabled={true} readOnly={true} value={member.name + ' ' + member.group}/>
                </InputBox>
                <WrapperComponent style={{marginBottom: '47px'}}>
                  <Role>Роль: {member.role}</Role>
                  <Contacts>Контакты: {member.contacts}</Contacts>
                </WrapperComponent>
              </>)
          )}
        </div>


        <ButtonLeaveTeam>Выйти из команды</ButtonLeaveTeam>
      </>
  )
}

const ButtonLeaveTeam = styled.button`
  margin-left: auto;
  width: 356px;
  height: 58px;
  padding: 0 16px;
  border-radius: 3px;
  border: 1px solid var(--ff-8197, #FF8197);
  background: #282828;

  color: var(--ff-8197, #FF8197);
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: var(--ff-8197, #FF8197);
    color: white;
  }
`

export default TeamBlock