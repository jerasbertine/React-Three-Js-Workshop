import React from 'react';
import { useFrame } from 'react-three-fiber';

function Experience() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </>
  );
}

export default Experience;
