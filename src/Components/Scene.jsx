import React, { useState, useMemo } from 'react'
import { useGLTF, useCursor } from '@react-three/drei'

export function Scene({ onClick, ...props }) {
  const { nodes, materials } = useGLTF('./models/scene.glb')

  const [hovered, setHovered] = useState(null)
  useCursor(!!hovered)

  const handleClick = (id) => (e) => {
    e.stopPropagation()
    onClick?.(id)
  }

  const handlePointerOver = (id) => () => setHovered(id)
  const handlePointerOut = () => setHovered(null)

  const node3HoverMaterial = useMemo(() => {
    const cloned = nodes['3'].material.clone()
    cloned.color.set('#ffaa00')
    return cloned
  }, [nodes])

  return (
    <group {...props} dispose={null}  >
      <group rotation={[0, Math.PI, 0]}>
      <mesh
        position={[0, 0, -10]}
        geometry={nodes['1'].geometry}
        material={nodes['1'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['2'].geometry}
        material={nodes['2'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes['3'].geometry}
        rotation={[Math.PI / 2, 0, 0]}
        onClick={handleClick('japan')}
        onPointerOver={handlePointerOver('japan')}
        onPointerOut={handlePointerOut}
      >
        <primitive
          attach="material"
          object={hovered === 'japan' ? node3HoverMaterial : nodes['3'].material}
        />
      </mesh>
      <mesh
        geometry={nodes['4'].geometry}
        material={nodes['4'].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      </group>
    </group>
  )
}

useGLTF.preload('./models/scene.glb')
