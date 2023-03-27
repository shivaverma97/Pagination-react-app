import React from 'react'

export default function pagination(props) {
    const {
        setNextPage,
        setPrevPage
    } = props
  return (
    <div>
      {setPrevPage && <button type='submit' onClick={setPrevPage}>Prev</button>}
      {setNextPage && <button type='submit' onClick={setNextPage}>Next</button>}
    </div>
  )
}
