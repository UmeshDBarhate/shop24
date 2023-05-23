import { atom } from 'jotai'

export const Highttolow = atom(true)
export const ChangeHightoLow =atom(get => get(Highttolow), (get,set,_arg)=>set(Highttolow,!get(Highttolow)))
export const searchbyquery = atom("")
export const rating= atom(true) 
export const cart = atom([])
export const addedincart=atom(false)
