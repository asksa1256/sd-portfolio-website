"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Hands() {
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isTouchDevice =
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

    if (canvasRef.current) {
      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setSize(window.innerWidth, window.innerHeight);

      const camera = new THREE.PerspectiveCamera(
        10,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(5, 0, 5);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      // if (isTouchDevice) {
      //   controls.enabled = false;
      // }

      const light = new THREE.DirectionalLight(0xffffff, 0);
      scene.add(light);

      // load 3d object
      const loader = new GLTFLoader();
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("textures/hand_lowpoly_normal.png");
      texture.flipY = false;

      loader.load("/scene.gltf", (object) => {
        const model = object.scene;

        model.traverse((o) => {
          if (o.isMesh) {
            o.material.map = texture;
          }
        });

        // setting pivot
        const box = new THREE.Box3().setFromObject(model);
        box.getCenter(model.position); // this resets the mesh position
        model.position.multiplyScalar(-1);

        const pivot = new THREE.Group();
        scene.add(pivot);
        pivot.add(model);
        pivot.position.x = -0.1;

        // object rotation animate
        function animate() {
          requestAnimationFrame(animate);
          pivot.rotation.y += 0.005;
          controls.update();
          renderer.render(scene, camera);
        }
        animate();

        // object fadeIn on scroll
        gsap.to(light, {
          scrollTrigger: {
            trigger: canvasRef.current,
            start: "top-=300px",
            end: "+=200px",
            scrub: true,
            toggleActions: "restart pause resume pause",
          },
          intensity: 2,
        });
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
}
