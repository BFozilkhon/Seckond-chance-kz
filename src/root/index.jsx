import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { navbarData } from '../utils/navbar'


const Root = () => {
  return (
    <Routes>
 
         {
             navbarData?.map(({id, path, element}) => {
                 return <Route key={id} path={path} element={element} />
             })
         }

        <Route path='/' element={<Navigate to={'/asosiy'} />} />
    </Routes>
  )
}


export default Root