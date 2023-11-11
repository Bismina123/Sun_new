import { OrbitControls, useGLTF } from "@react-three/drei";

import styled from "styled-components";
import { Canvas,} from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AeroplaneModel = () => {
  gsap.registerPlugin(ScrollTrigger);
  const group = useRef();
  const helicopter = useGLTF("./jet/scene.gltf");
 
 
  useLayoutEffect(() => {
    helicopter.scene.scale.set(0.2, 0.2, 0.2); // Adjust the scale as needed
    helicopter.scene.position.set(4, 1.3, 0); // Adjust the position as needed
    const animationDuration = 1.5; // Adjust the animation duration as needed
   
    const endPos = -1; // Final X position
    const endYRotation = Math.PI / 2;
    const endXRotation = Math.PI / 2;
    const endYRotationLeft = Math.PI;
    const endXRotationLeft = Math.PI / 9;
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#aeroplane-model",
        start: "top top",
        endTrigger: "#footer",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
      },
    });
    t1.to(helicopter.scene.position, {
      x: endPos,
      duration: 4,
      ease: "power1.out", // Adjust the easing as needed
    });

    t1.to(helicopter.scene.rotation, {
      x: endXRotation,
      y: endYRotation, // Rotate the model downward
      duration: 4,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x: 5, //helicopter moveing to right
      duration: 4,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x: -4, //helicopter moveing to left
      duration: 4,
      ease: "power1.out", // Adjust the easing as needed
    });
    t1.to(helicopter.scene.rotation, {
      x: endXRotationLeft, //helicopter now facing on left
      y: endYRotationLeft,
      duration: 3,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x: 0, //helicopter moveing to right now on center
      duration: 3,
      ease: "power1.out", // Adjust the easing as needed
    });
    t1.to(helicopter.scene.rotation, {
      x: Math.PI / 2, // Rotate to show the backside on the front
      y: Math.PI / -2,
      duration: 3, // Adjust the duration as needed
      ease: "power1.out",
    });
    t1.to(helicopter.scene.scale, {
      x: 0.25, // Set the desired new scale on the x-axis
      y: 0.25, // Set the desired new scale on the y-axis
      z: 0.25, // Set the desired new scale on the z-axis
      duration: animationDuration, // Adjust the duration as needed
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x: 5,
      y:0, // Move to x: -1
      duration: animationDuration,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.rotation, {
      x: Math.PI/12, // Reset the X-axis rotation
      y: Math.PI/12, // Rotate 180 degrees to the left
      
      duration: animationDuration,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x:2.5,
      
      z:-1.5, // Rotate 180 degrees to the left
      
      duration: animationDuration,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.rotation, {
      x:0.5,
      duration: animationDuration,
      ease: "power1.out",
    });
    t1.to(helicopter.scene.position, {
      x:-2.5,
      y:3,
      z:1.3, // Rotate 180 degrees to the left
      
      duration: 3,
      ease: "power1.out",
    });
   
    // t1.to(helicopter.scene.position, {
    //   x:-3,
    //   y:2.3,
    //   z:2.5, // Rotate 180 degrees to the left
      
    //   duration: 2,
    //   ease: "power1.out",
    // });
  });
  return (
    <group ref={group}>
      <primitive object={helicopter.scene} />
    </group>
  );
};
const Airoplane = () => {
  return (
    <Container id="aeroplane-model">
      <Canvas>
        <ambientLight intensity={4} position={[3, 10, 10]}/>
        <directionalLight intensity={4}  position={[3, 10, 3]} />
        <Suspense fallback={null}>
          <AeroplaneModel />
        </Suspense>
      
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;
export default Airoplane;
