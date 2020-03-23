import React, { useEffect, useState, useContext } from './node_modules/react'
import { debounce, chain } from './node_modules/lodash'

import { getScrollPosition } from '../utils/dom'

export const breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1025,
  xl: 1440,
}

const defaultValue = {
  breakpoint: 'xs',
  resizing: false,
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
  scroll: {
    prevValue: 0,
    value: 0,
    direction: 'down',
  },
}

const WindowEventsContext = React.createContext(defaultValue)

const sortedBreakpoints = chain(breakpoints)
  .map((value, key) => ({ breakpoint: key, value }))
  .orderBy(['value'], ['desc'])
  .value()

export const getBreakpoint = (width) => {
  const { breakpoint } = sortedBreakpoints.find(
    ({ value }) => width >= value
  ) || {
    breakpoint: 'sm',
    value: 0,
  }

  return breakpoint
}

export default function WindowEvents({ children }) {
  const [value, setValue] = useState(defaultValue)

  const updateValue = (resizing) => {
    const { innerHeight: height, innerWidth: width } = window
    setValue((prevState) => {
      return {
        ...prevState,
        resizing,
        breakpoint: getBreakpoint(window.innerWidth),
        width,
        height,
      }
    })
  }

  const onResize = () => {
    const { resizing } = value
    if (!resizing) {
      updateValue(!resizing)
    }
    onResizeEnd()
  }

  /** Debounce function that it is executed when resize event stop*/
  const onResizeEnd = debounce(() => {
    const resizing = false
    updateValue(resizing)
  }, 300)

  /**
   * Handle scroll event
   */
  const onScroll = () => {
    const { y } = getScrollPosition()
    setValue((prevState) => {
      const { scroll } = prevState
      const { value: prevValue } = scroll
      const value = y
      const direction = prevValue > y ? 'up' : 'down'

      return { ...prevState, scroll: { prevValue, value, direction } }
    })
  }

  useEffect(() => {
    updateValue(false)
    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <WindowEventsContext.Provider value={value}>
      {children}
    </WindowEventsContext.Provider>
  )
}

export const useWindowEvents = () => useContext(WindowEventsContext)

/* En el Componente usar
*  
  useEffect(() => {
    console.log('El component hizo resize')
  }, [ resizing])
*/
// const { resizing } = useWindowEvents()
