import { useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'

export default function ChessGame() {
  const [game, setGame] = useState(new Chess())
  const [moveFrom, setMoveFrom] = useState('')
  const [rightClickedSquares, setRightClickedSquares] = useState({})
  const [optionSquares, setOptionSquares] = useState({})
  const [position, setPosition] = useState(game.fen())

  function getMoveOptions(square: string) {
    const moves = game.moves({
      // @ts-ignore
      square,
      verbose: true,
    })

    if (moves.length === 0) {
      setOptionSquares({})
      return false
    }

    const newSquares: { [key: string]: { background: string } } = {}
    moves.forEach((move) => {
      // @ts-ignore
      newSquares[move.to] = {
        // @ts-ignore
        background: game.get(move.to) ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 255, 0, 0.4)',
      }
    })
    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)',
    }
    setOptionSquares(newSquares)
    return true
  }

  function onSquareClick(square: string) {
    setRightClickedSquares({})
    // @ts-ignore
    const piece = game.get(square)

    if (!moveFrom) {
      if (piece && piece.color === (game.turn() === 'w' ? 'w' : 'b')) {
        const hasMoves = getMoveOptions(square)
        if (hasMoves) setMoveFrom(square)
      }
      return
    }

    try {
      const gameCopy = new Chess(game.fen())
      const move = gameCopy.move({
        from: moveFrom,
        to: square,
        promotion: 'q',
      })

      if (move === null) {
        if (piece && piece.color === (game.turn() === 'w' ? 'w' : 'b')) {
          const hasMoves = getMoveOptions(square)
          if (hasMoves) setMoveFrom(square)
          return
        }
      } else {
        // Valid move
        setGame(gameCopy)
        setPosition(gameCopy.fen())
        setMoveFrom('')
        setOptionSquares({})
      }
    } catch (e: any) {
      if (piece && piece.color === (game.turn() === 'w' ? 'w' : 'b')) {
        const hasMoves = getMoveOptions(square)
        if (hasMoves) setMoveFrom(square)
      }
    }
  }

  function onSquareRightClick(square: string) {
    const colour = 'rgba(0, 0, 255, 0.4)'
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]: {
        background: colour,
      },
    })
  }

  // Update position when game changes
  useEffect(() => {
    setPosition(game.fen())
  }, [game])

  return (
    <div className="container mx-auto px-4">
      <div className="flex min-h-[90vh] flex-col items-center justify-center gap-4">
        <div className="w-full max-w-[600px]">
          <Chessboard
            id="ChessGame"
            animationDuration={200}
            position={position}
            onSquareClick={onSquareClick}
            onSquareRightClick={onSquareRightClick}
            customBoardStyle={{
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
            customSquareStyles={{
              ...optionSquares,
              ...rightClickedSquares,
            }}
          />
        </div>
        <div className="text-center">
          {game.isGameOver() ? (
            <div className="text-lg font-semibold">
              Game Over!
              {game.isCheckmate() ? ' - Checkmate!' : ''}
              {game.isDraw() ? ' - Draw!' : ''}
              {game.isStalemate() ? ' - Stalemate!' : ''}
            </div>
          ) : (
            <div className="text-lg font-semibold">{game.turn() === 'w' ? 'White' : 'Black'} to move</div>
          )}
        </div>
      </div>
    </div>
  )
}
