import { useMatcapTexture, Text3D } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

// const material = new THREE.MeshMatcapMaterial()

export default function TextMesh()
{


    // const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

    // useEffect(() =>
    // {
    //     matcapTexture.colorSpace = THREE.SRGBColorSpace
    //     matcapTexture.needsUpdate = true

    //     material.matcap = matcapTexture
    //     material.needsUpdate = true
    // }, [])

    return <>
        <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 0.75 }
            height={ 0.2 }
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.02 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            rotation-y={Math.PI}
            position={[-35, 0.2, -40]}
            castShadow
        >
            Furniture
        </Text3D>

        <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 0.8 }
            height={ 0.2 }
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.02 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            rotation-y={Math.PI*1.5}
            position={[19, 0.5, -36]}
            castShadow
        >
            Ship Models
        </Text3D>

        <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={ 0.75 }
            height={ 0.2 }
            curveSegments={ 12 }
            bevelEnabled
            bevelThickness={ 0.02 }
            bevelSize={ 0.02 }
            bevelOffset={ 0 }
            bevelSegments={ 5 }
            rotation-y={Math.PI*-0.1}
            position={[5, 0.3, -59]}
            castShadow
        >
            Material Drafting and Processing
        </Text3D>


    </>
}