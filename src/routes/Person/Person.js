import React from 'react'
import { useParams } from 'react-router-dom'
import { PersonInfo } from 'components/ui'
import AffixHome from 'components/ui/AffixHome/AffixHome'
import { PersonContentStyled, PersonStyled, TitleStyled } from './Person.styles'

const Person = () => {
  const { name } = useParams()

  return (
    <PersonStyled>
      <TitleStyled>{name}</TitleStyled>
      <PersonContentStyled>
        <PersonInfo name={name} />
      </PersonContentStyled>
      <AffixHome />
    </PersonStyled>
  )
}

export default Person
