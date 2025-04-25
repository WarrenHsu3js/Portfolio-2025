import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export function DimensionLine({ start = [0, 0, 0], end = [1, 0, 0], label = "100cm", visible = true }) {
  const mid = new THREE.Vector3()
    .fromArray(start)
    .add(new THREE.Vector3().fromArray(end))
    .multiplyScalar(0.5);

  const direction = new THREE.Vector3().subVectors(new THREE.Vector3(...end), new THREE.Vector3(...start)).normalize();
  const angle = Math.atan2(direction.z, direction.x);
  const isVertical = Math.abs(direction.y) > Math.abs(direction.x) && Math.abs(direction.y) > Math.abs(direction.z);
  const rotationStart = isVertical ? [Math.PI / 2, 0, 0] : [0, 0, angle + Math.PI];
  const rotationEnd = isVertical ? [-Math.PI / 2, 0, 0] : [0, 0, angle];

  return (
    <group visible={visible}>
      <Line points={[start, end]} color="black" lineWidth={1} />
      {/* Arrow at start */}
      <mesh position={start} rotation={rotationStart}>
        <boxGeometry args={[0.01, 0.01, 0.01]} />
        <meshBasicMaterial color="black" />
      </mesh>
      {/* Arrow at end */}
      <mesh position={end} rotation={rotationEnd}>
        <boxGeometry args={[0.01, 0.01, 0.01]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <Html position={mid.toArray()} center>
        <div className="text-xs text-black font-semibold select-none bg-white/80 px-2 rounded">
          {label}
        </div>
      </Html>
    </group>
  );
}
