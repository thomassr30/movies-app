/* import {useEffect, useState} from 'react'

interface Props{
    visorRef: string
}

export const useVisible = ({visorRef}: any) => {
  const [visible, setvisible] = useState(false)
  useEffect(() => {
    const {current} = visorRef
    const callbackFunction = (entries: any) => {
        const {isIntersecting} = entries[0]
        setvisible(isIntersecting)
    }

    const option = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }

    const observer = new IntersectionObserver(callbackFunction, option)

    if(current) observer.observe(current)

    return () => {
        if(current) observer.disconnect()
    }

  }, [visorRef])

  return {visible}
  
}
 */

import { useEffect, useState } from 'react'

export function useVisible({ visorRef }: any) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const { current } = visorRef
    const callbackFunction = (entries: any) => {
      const [entry] = entries

      setVisible(entry.isIntersecting) //Sí esta en pantalla, pone el estado en true, de lo contrario, lo pone en false
    }

    const options = {
      //Configuraciones del intersection observer
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(callbackFunction, options) //Creamos la instancia del intersection observer
    if (current) observer.observe(current) //Sí tenemos al visor, lo observamos

    return () => {
      //Debemos desobservar si salimos del componente
      if (current) observer.disconnect()
    }
  }, [visorRef])

  return { visible }
}