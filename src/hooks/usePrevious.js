import {useState, useEffect, useRef} from 'react'

const usePrevious = (value) => {
  const currentRef = useRef()

  useEffect(() => {
    currentRef.current = value
  })
}

export default usePrevious