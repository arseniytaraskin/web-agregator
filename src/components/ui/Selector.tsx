import React from "react";
import styled from "styled-components";
import {H2Style} from "../../pages/ProjectEditing/ProjectEditing";
import Select from "../Select";

const SelectorStyle = styled.div`
  margin-bottom: 30px;
`

const SelectBox = styled.div`
  padding: 11px 18px;
  background: var(--dark-grey-color);
`

interface Props {
  labelSelector: string;
  options: any;
  margin?: string;
  width?: string;
  type?: TypeSelector;
}

export type TypeSelector = 'none' | 'role'

function Selector({labelSelector = '', options, margin = '30px', width = '100%', type = 'none'}: Props) {

  return (
      <SelectorStyle style={{
        marginBottom: margin,
        width: width,
      }}>
        <H2Style>{labelSelector}</H2Style>
        <SelectBox>
            <Select height={'37px'} options={options} type={type}/>
        </SelectBox>
      </SelectorStyle>
  )
}

export default Selector