/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 furniture4.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model4(props) {
  const { nodes, materials } = useGLTF('/furniture4.glb')
  return (
    <group {...props} dispose={null} scale={5} position={[0,-1.7,0]} rotation={[32,36.5,32]}>
      <mesh geometry={nodes.ChairSoborgOak.geometry} material={materials.Material} rotation={[0, -0.42, 0]}>
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.Circle006.geometry} material={materials.AllenScrew} />
          <mesh geometry={nodes.Circle006_1.geometry} material={materials.AllenScrewHole} />
        </group>
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.Circle004.geometry} material={materials.AllenScrew} />
          <mesh geometry={nodes.Circle004_1.geometry} material={materials.AllenScrewHole} />
        </group>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane001.geometry} material={materials.Material} position={[0, 0, 0.01]} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.AllenScrewHole} />
        <mesh geometry={nodes.Circle005.geometry} material={materials.AllenScrew} />
        <mesh geometry={nodes.Circle005_1.geometry} material={materials.AllenScrewHole} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/furniture4.glb')
