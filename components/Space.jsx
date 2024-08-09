import { CameraControls, Center, Sky, useGLTF } from "@react-three/drei";
import { editable as e, PerspectiveCamera } from "@theatre/r3f";
import * as THREE from "three";
import Duck from "./Duck";
import VideoAnnotation from "./VideoAnnotation";
import SecurityCamera from "./SecurityCamera";
import Person from "./Person";
import { SecurityCameraModel } from "./SecurityCameraModel";
import Garden from "./house/Garden";
import Level1 from "./house/Level1";
import Level1Other from "./house/Level1Other";
import Level2Other from "./house/Level2Other";
import Level2 from "./house/Level2";
import Roof from "./house/Roof";
import Wall from "./house/Wall";
import Dog from "./Dog";
import Bear from "./Bear";
import { useControls, button } from "leva";
import { useContext, useEffect, useRef, useState } from "react";
import cameraPositions from "@/lib/cameraPositions";
import { ControlsContext, SceneContext } from "@/app/page";
import { useFrame } from "@react-three/fiber";
import { DEG2RAD } from "three/src/math/MathUtils";
import names from "@/data/volunteerNames";
import personPositions from "@/data/personPositions";
import { Jake } from "./Jake";
import { Alice } from "./Alice";
import { Tasha } from "./Tasha";
import { Lucia } from "./Lucia";
import { Katrina } from "./Katrina";
import { Shure } from "./Shure";

const Space = () => {
  const controls = useRef();

  const {
    allowControl,
    homeView,
    showSights,
    showWalls,
    autoRotate,
    showPersonVideos,
    showLevel2Videos,
    showDemo,
    videoDate,
  } = useContext(ControlsContext);

  const selectedPersonPositions = showDemo
    ? personPositions.demo
    : personPositions.default;

  const [wallOpacity, setWallOpacity] = useState(1);
  const [roofOpacity, setRoofOpacity] = useState(1);

  const [level2Opacity, setLevel2Opacity] = useState(1);

  useControls("Helper", {
    getLookAt: button(() => {
      const position = controls.current.getPosition();
      const target = controls.current.getTarget();
      console.log([...position, ...target]);
    }),
    toJson: button(() => console.log(controls.current.toJSON())),
  });

  useEffect(() => {
    controls.current.setLookAt(...cameraPositions.init);
  }, []);

  useEffect(() => {
    controls.current.setLookAt(...cameraPositions[homeView], true);
  }, [homeView]);

  // Animate roofs and walls
  useEffect(() => {
    if (showWalls) {
      setWallOpacity(1);
      setRoofOpacity(1);
    } else {
      setWallOpacity(0);
      setRoofOpacity(0);
    }
  }, [showWalls]);

  useEffect(() => {
    if (homeView === "level-1") {
      setLevel2Opacity(0);
    } else {
      setLevel2Opacity(1);
    }
  }, [homeView]);

  useFrame((state, delta) => {
    // Auto rotate
    if (autoRotate) {
      // controls.current.azimuthAngle += 5 * delta * DEG2RAD;
    }
  });

  return (
    <>
      {/* <PerspectiveCamera theatreKey="Camera" makeDefault /> */}

      <CameraControls
        ref={controls}
        maxDistance={20}
        mouseButtons={
          allowControl
            ? {
                left: 1,
                middle: 8,
                right: 2,
                wheel: 8,
              }
            : {
                left: 0,
                middle: 0,
                right: 0,
                wheel: 0,
              }
        }
        // disable all touch gestures
        touches={
          allowControl
            ? // FIXME: Touch controls
              {
                one: 32,
                two: 1024,
                three: 1024,
              }
            : {
                one: 0,
                two: 0,
                three: 0,
              }
        }
      />

      <Sky />

      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight intensity={2} />

      {/* House */}
      {/* <primitive object={model.scene} position={[-20, 0, 0]} /> */}

      {/* House models */}
      <group theatreKey="House">
        <Garden />
        <Level1 visible={true} />
        <Level1Other visible={true} />
        <Level2Other opacity={level2Opacity} />
        <Level2 opacity={level2Opacity} />
        <Roof opacity={roofOpacity} />
        <Wall opacity={wallOpacity} />
      </group>

      {/* Level 1 Cameras */}
      {[...Array(8).keys()].map((i) => (
        <SecurityCamera
          key={`level-1-camera-${i + 1}`}
          groupId={"Level-1"}
          id={i + 1}
          label={i + 1}
          videoSrc={`videos/${videoDate}/bottom_grid_${i + 1}.mp4`}
          showSight={showSights}
        />
      ))}

      {/* Level 2 Cameras */}
      {[...Array(7).keys()].map((i) => (
        <SecurityCamera
          key={`level-2-camera-${i + 1}`}
          groupId={"Level-2"}
          id={i + 1}
          label={i + 1 + 8}
          videoSrc={`videos/${videoDate}/top_grid_${i + 1}.mp4`}
          visible={homeView !== "level-1"}
          showSight={showSights}
          showVideo={showLevel2Videos}
        />
      ))}

      {/* People */}
      {/* FIXME: Glow instead? */}
      {[...Array(6).keys()].map((i) => (
        <Person
          key={`person-${i + 1}`}
          id={i + 1}
          // label={i + 1}
          label={names[i].en}
          videoSrc={`videos/${videoDate}/middle_grid_${i + 1}.mp4`}
          // model={i < 2 ? Duck : i < 4 ? Dog : Bear}
          model={characterModels[i]}
          showSight={showSights}
          showVideo={showPersonVideos}
          position={selectedPersonPositions[i].position}
          rotation={selectedPersonPositions[i].rotation}
        />
      ))}
    </>
  );
};

const characterModels = [Jake, Alice, Tasha, Lucia, Katrina, Shure];

export default Space;
