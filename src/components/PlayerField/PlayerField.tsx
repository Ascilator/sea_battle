import { FC, useState } from 'react'
import { FieldRow } from '@/components/FieldRow'
import { alphabet, matrix } from '@/constants'
import { FieldState } from '@/types'

import { StyledField, StyledCoords, StyledCell } from './styles'

const PlayerField: FC = () => {
  const [gameState] = useState<FieldState>(matrix)

  const renderRows = () => {
    return gameState.map((row, index) => <FieldRow key={index} value={index + 1} rowData={row} />)
  }

  const renderCoords = () => {
    return (
      <StyledCoords>
        <StyledCell />
        {alphabet.map((el) => (
          <StyledCell key={el}>{el}</StyledCell>
        ))}
        <StyledCell />
      </StyledCoords>
    )
  }
  return (
    <StyledField>
      {renderCoords()}
      {renderRows()}
      {renderCoords()}
    </StyledField>
  )
}

export { PlayerField }
