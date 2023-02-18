/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 furniture3.glb
*/


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model3(props) {
  const { nodes, materials } = useGLTF('/furniture3.glb')
  return (
    <group {...props} dispose={null} scale={0.65} position={[-0.5,0,0.9]} 
    rotation={[0,0,0]} >
      <mesh geometry={nodes.Object002.geometry} material={materials.Wood_01} position={[0, -1.5, 0]} scale={0.007}/>
      <mesh geometry={nodes.Plane001.geometry} material={materials.Metall_Hrom_01} position={[0, -1.5, 0]} scale={0.007}/>
      <mesh geometry={nodes.Object001.geometry} material={materials.Pupki_01} position={[-1.53,-0.07,-1.05]} scale={0.007} />
      <mesh geometry={nodes.Box029.geometry} material={materials.Skin_02} position={[-0,1.45,-1.6]} scale={0.007} />
      <mesh geometry={nodes.Shape001.geometry} material={materials.Strochka_02} position={[-0,1.45,-1.6]} scale={0.007} />
    </group>
  )
}

useGLTF.preload('/furniture3.glb')