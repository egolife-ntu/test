/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/level1_v3.glb
*/

import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import useGltfKtx2 from "@/lib/useGltfKtx2";

export default function Level1(props) {
  const { gl } = useThree();

  const { nodes, materials, scene } = useGltfKtx2(
    "/models/house/level1_v3.glb",
    gl,
  );

  return <primitive object={scene} {...props} />;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["0"].geometry}
        material={materials.PaletteMaterial001}
        position={[0.982, 0.594, -1.635]}
        rotation={[1.457, 0.203, -2.386]}
        scale={3.767}
      />
      <mesh
        geometry={nodes["Obj3d66-19327086-30-401001"].geometry}
        material={materials.PaletteMaterial002}
        position={[0.8, 1.629, -1.437]}
        scale={[3.864, 2.971, 2.971]}
      />
      <mesh
        geometry={nodes["Obj3d66-19327086-346-309002"].geometry}
        material={materials["3d66-CoronaLegacyMtl-19327086-035"]}
        position={[1.028, 1.437, -3.189]}
        scale={[1.803, 2.924, 2.171]}
      />
      <mesh
        geometry={nodes.主卧_门框.geometry}
        material={materials.PaletteMaterial001}
        position={[0.915, 1.534, -2.754]}
        scale={2.182}
      />
      <mesh
        geometry={nodes.厨房吊顶.geometry}
        material={nodes.厨房吊顶.material}
        position={[0.801, 2.495, -4.29]}
        scale={2.068}
      />
      <mesh
        geometry={nodes.厨房玻璃.geometry}
        material={materials.PaletteMaterial003}
        position={[0.296, 1.623, -4.489]}
        scale={[1.379, 1.368, 1.379]}
      />
      <mesh
        geometry={nodes.吸顶灯01003.geometry}
        material={materials.PaletteMaterial004}
        position={[0.725, 2.944, -0.817]}
        scale={[0.194, 0.359, 0.194]}
      />
      <group position={[0.801, 1.392, -1.192]} scale={3.906}>
        <mesh geometry={nodes.平面071.geometry} material={materials.木地板} />
        <mesh
          geometry={nodes.平面071_1.geometry}
          material={materials.乳胶漆墙面}
        />
      </group>
      <group position={[0.801, 1.534, -4.335]} scale={2.276}>
        <mesh geometry={nodes.平面065.geometry} material={materials.外墙蓝} />
        <mesh
          geometry={nodes.平面065_1.geometry}
          material={materials.厨房瓷砖}
        />
        <mesh geometry={nodes.平面065_2.geometry} material={materials.外墙白} />
      </group>
      <mesh
        geometry={nodes.平面001.geometry}
        material={materials["材质.002"]}
        position={[0.55, 1.216, -4.343]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.57, 1.558, 1.44]}
      />
      <group
        position={[-1.026, 1.272, -4.116]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.432}
      >
        <mesh
          geometry={nodes.平面044.geometry}
          material={materials.PaletteMaterial006}
        />
        <mesh
          geometry={nodes.平面044_1.geometry}
          material={materials.PaletteMaterial005}
        />
      </group>
      <mesh
        geometry={nodes.踢脚线003.geometry}
        material={materials.室外地板}
        position={[0.905, 0.13, -1.088]}
        scale={[3.802, 3.772, 3.802]}
      />
      <mesh
        geometry={nodes["Obj3d66-1230454-138-274001"].geometry}
        material={materials.PaletteMaterial007}
        position={[-0.962, 2.396, -3.134]}
        rotation={[-Math.PI / 2, -0.028, Math.PI]}
        scale={[-0.19, 0.19, 0.19]}
      />
    </group>
  );
}

// useGLTF.preload("/models/level1_v3.glb");
