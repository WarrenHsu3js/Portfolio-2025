import React from "react";
import { useControls } from "leva";
import { DimensionLine } from "./DimensionLine";

export function Shelf() {
  const { width, height, depth, visibleObject, visibleLabel } = useControls("Shelf 顯示控制", {
    width: { value: 120, min: 60, max: 200, step: 1 },
    height: { value: 150, min: 60, max: 200, step: 1 },
    depth: { value: 45, min: 30, max: 60, step: 1 },
    visibleObject: { value: true, label: "顯示架子物件" },
    visibleLabel: { value: false, label: "顯示尺寸標記" },
  });

  const shelfCount = 5;
  const shelfThickness = 3;
  const shelfSpacing = (height - shelfThickness) / (shelfCount - 1);

  const w = width / 100;
  const h = height / 100;
  const d = depth / 100;
  const t = shelfThickness / 100;

  return (
    <group position={[-34, 0, -40]}>
      {/* 架子本體 */}
      {visibleObject && (
        <>
          {[[-1, 0, -1], [1, 0, -1], [-1, 0, 1], [1, 0, 1]].map(([x, _, z], i) => (
            <mesh key={`leg-${i}`} position={[x * w / 2, h / 2, z * d / 2]}>
              <boxGeometry args={[0.03, h, 0.03]} />
              <meshStandardMaterial color="#333" />
            </mesh>
          ))}
          {Array.from({ length: shelfCount }).map((_, i) => (
            <mesh key={i} position={[0, i * shelfSpacing / 100, 0]}>
              <boxGeometry args={[w, t, d]} />
              <meshStandardMaterial color="#D8B46E" />
            </mesh>
          ))}
        </>
      )}

      {/* 尺寸標記線 */}
      {visibleLabel && (
        <>
          <DimensionLine
            start={[-w / 2, h + 0.05, 0]}
            end={[w / 2, h + 0.05, 0]}
            label={`${width}cm`}
          />
          <DimensionLine
            start={[w / 2 + 0.05, 0, 0]}
            end={[w / 2 + 0.05, h, 0]}
            label={`${height}cm`}
          />
          <DimensionLine
            start={[w / 2 + 0.05, h + 0.05, -d / 2]}
            end={[w / 2 + 0.05, h + 0.05, d / 2]}
            label={`${depth}cm`}
          />
        </>
      )}
    </group>
  );
}
