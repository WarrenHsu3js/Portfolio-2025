import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export function CharacterModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/character.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01} position-y={-0.9} visible={true} >
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/character.glb')
