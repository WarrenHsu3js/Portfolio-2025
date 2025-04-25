import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Camera({ selected }) {
  const camRef = useRef();
  const targetPosition = useRef(new THREE.Vector3());
  const lookAtTarget = useRef(new THREE.Vector3());

  useEffect(() => {
    if (!selected) return;

    if (selected === "japan") {
      targetPosition.current.set(0, 2, -5);
      lookAtTarget.current.set(5, 15, 30);
    } else if (selected === "item2") {
      targetPosition.current.set(0, 2, 5);
      lookAtTarget.current.set(0, 1, 0);
    }
  }, [selected]);

  useFrame(() => {
    if (!selected || !camRef.current) return;

    camRef.current.position.lerp(targetPosition.current, 0.1);
    camRef.current.lookAt(lookAtTarget.current);
  });

  if (!selected) return null;

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      fov={60}
      position={[0, 2, 10]}
    />
  );
}
