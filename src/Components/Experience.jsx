import React, { useState, useRef } from "react";
import { Float, KeyboardControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { CharacterModel } from "./Character";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Scene } from "./Scene";
import { Shelf } from "../Furniture/Shelf";
import Camera from "./Camera";
import { Boat } from "../models/Boat";
import { WoodenTruss } from "../models/WoodenTruss";

export const Experience = ({ setSelected, selected }) => {
  const ecctrlRef = useRef();

  {/*EcctrlAnimation*/}
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump",
    jumpIdle: "Jump",
    jumpLand: "Jump",
    fall: "Idle",
  };

  {/*Camera*/}
  const [characterPos, setCharacterPos] = useState({
    position: [-34, 5, -64],
    camInitDir: { x: 0, y: 0 },
    characterInitDir: 0,
  });
  
  const handleObjectSelect = (id) => {
    const gateMap = {
      japan: {
        position: [38, 1, 35],
        camInitDir: { x: 0, y: 0 },
        characterInitDir: 0,
      },
    };
  
    if (gateMap[id]) {
      setCharacterPos(gateMap[id]);
      setSelected(id);
    }
  };

  return (
    <>
      <Camera selected={selected} />

      <directionalLight position={[-1, 2, -3]} intensity={4.5} castShadow />
      <ambientLight intensity={1.5} />

      <Shelf />
      <WoodenTruss scale={1500} position={[5, 0, -65]} />
      <Float
        speed={2}
        floatIntensity={2}
        rotationIntensity={0.5}
        floatingRange={[-0.2, 0.2]}
      >
        <Boat  scale={0.5} position={[20, 5, -30]} rotation-y={Math.PI*0.5} />
      </Float>
      <Physics>
        <KeyboardControls map={keyboardMap}>
          <RigidBody type="fixed" colliders="trimesh">
            <Scene onClick={handleObjectSelect} />
          </RigidBody>

          {!selected && (
            <Ecctrl
              ref={ecctrlRef}
              key={characterPos.position.join(',')}
              position={characterPos.position}
              camInitDir={characterPos.camInitDir}
              characterInitDir={characterPos.characterInitDir}
              animated
              camCollision={false}
              autoBalanceSpringK={1.5}
              autoBalanceDampingC={0.02}
              autoBalanceSpringOnY={0.35}
              autoBalanceDampingOnY={0.01}
            >
              <EcctrlAnimation
                characterURL={"/models/character.glb"}
                animationSet={animationSet}
              >
                <CharacterModel />
              </EcctrlAnimation>
            </Ecctrl>
          )}
        </KeyboardControls>
      </Physics>
    </>
  );
};
