import React from 'react'
import styled, { css } from 'react-emotion'
import { Icon } from 'Elements/Icons/icon'

// Components
const Chip = props => css`
  background-color: ${props.theme.chip.background};
  border-color: ${props.theme.chip.border};

  &:hover {
    color: ${props.theme.chip.hover.color};
    border-color: ${props.theme.chip.hover.border};
    background-color: ${props.theme.chip.hover.background};
  }
`
const ChipActive = props => css`
  background-color: ${props.theme.chip.active.background};
  border-color: ${props.theme.chip.active.border};
  color: ${props.theme.chip.active.color};

  &:hover {
    color: ${props.theme.chip.active.color};
    border-color: ${props.theme.chip.active.border};
    background-color: ${props.theme.chip.active.background};
  }
`
const ChipDelete = styled('div')`
  display: inline-block;
  padding: 0.3em;
  border-left-width: 1px;
  border-left-style: solid;
  border-color: inherit;
  color: ${props =>
    props.isActive ? props.theme.chip.active.color : props.theme.chip.border};
  &:hover {
    color: ${props =>
      props.isActive ? props.theme.chip.active.color : props.theme.chip.color};
  ;
`
const ChipCopy = styled('div')`
  display: inline-block;
  padding: 0.3em 0.6em;
`

const ChipWrapper = styled('div')`
  ${props => (props.isActive ? ChipActive : Chip)};
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  text-transform: lowercase;
  user-select: none;
  margin-right: 0.7em;
  margin-bottom: 0.7em;
  &:last-child {
    margin-right: 0;
  }
`

// Chip
export const TagChip = ({
  tag,
  handleChipClick,
  handleChipRemove,
  isActive
}) => {
  const onChipClick = () => handleChipClick(tag)
  const onRemoveClick = e => {
    e.stopPropagation()
    handleChipRemove(tag)
  }
  return (
    <ChipWrapper isActive={isActive} onClick={onChipClick}>
      <ChipCopy>{tag}</ChipCopy>
      <ChipDelete onClick={onRemoveClick}>
        <Icon name="close" />
      </ChipDelete>
    </ChipWrapper>
  )
}