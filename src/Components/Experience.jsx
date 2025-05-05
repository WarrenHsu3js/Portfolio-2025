import React, { useState, useRef, useMemo } from "react";
import { Float, Html, KeyboardControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { CharacterModel } from "./Character";
import Ecctrl, { EcctrlAnimation, useJoystickControls } from "ecctrl";
import { Scene } from "./Scene";
import { Shelf } from "../Furniture/Shelf";
import Camera from "./Camera";
import { Boat } from "../Objects/Boat";
import { WoodenTruss } from "../Objects/WoodenTruss";
import { useKeyboardControls } from "@react-three/drei";
import TextMesh from "../Objects/Text";

export const Experience = ({ setSelected, selected }) => {
  const ecctrlRef = useRef();
  const joystickControls = useJoystickControls();

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

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <Camera selected={selected} />

      <directionalLight position={[-1, 2, -3]} intensity={4.5} castShadow />
      <ambientLight intensity={1.5} />
      
      <TextMesh />
      
      <Shelf />
      
      <WoodenTruss scale={1500} position={[5, 0, -65]} />
      
      <Float
        speed={2}
        floatIntensity={2}
        rotationIntensity={0.5}
        floatingRange={[-0.2, 0.2]}
      >
        <Boat scale={0.5} position={[20, 5, -30]} rotation-y={Math.PI * 0.5} />
      </Float>

      <Physics>
        <KeyboardControls map={keyboardMap}>
          <RigidBody type="fixed" colliders="trimesh">
            <Scene onClick={handleObjectSelect} />
          </RigidBody>
          <CharacterController
            ecctrlRef={ecctrlRef}
            joystickControls={joystickControls}
            characterPos={characterPos}
            selected={selected}
          />
        </KeyboardControls>
      </Physics>
    </>
  );
};

const CharacterController = ({ ecctrlRef, joystickControls, characterPos, selected }) => {
  const [keyboard] = useKeyboardControls();

  const mergedControls = useMemo(() => {
    if (!joystickControls) return null;
  
    return {
      getAxes: () => {
        const { forward, backward, leftward, rightward } = keyboard;
        let x = 0;
        let y = 0;
        if (leftward) x -= 1;
        if (rightward) x += 1;
        if (forward) y += 1;
        if (backward) y -= 1;
        const [jx, jy] = joystickControls.getAxes ? joystickControls.getAxes() : [0, 0];
        const combinedX = jx + x;
        const combinedY = jy + y;
        const magnitude = Math.hypot(combinedX, combinedY);
        if (magnitude > 1) {
          return [combinedX / magnitude, combinedY / magnitude];
        }
        return [combinedX, combinedY];
      },
      jump: () => {
        return joystickControls.jump() || keyboard.jump;
      }
    };
  }, [joystickControls, keyboard]);

  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump",
    jumpIdle: "Jump",
    jumpLand: "Jump",
    fall: "Idle",
  };

  if (selected) return null;

  return (
    <Ecctrl
      mode="Joystick"
      joystick={mergedControls}
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
        characterURL={"./models/character.glb"}
        animationSet={animationSet}
      >
        <CharacterModel />
      </EcctrlAnimation>
    </Ecctrl>
  );
};
