"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeJsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scene = new THREE.Scene();
    
    let containerWidth = container.clientWidth || window.innerWidth;
    let containerHeight = container.clientHeight || window.innerHeight;
    
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

    // Tech Stack "Floating Cloud"
    const group = new THREE.Group();
    scene.add(group);

    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.BoxGeometry(0.4, 0.4, 0.4)
    ];

    const colors = [0x00ffff, 0x6366f1, 0xffffff]; // Cyan, Indigo, White

    for (let i = 0; i < 15; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = new THREE.MeshPhongMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)], 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geo, mat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2
      );
      
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(mesh);
    }

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      group.rotation.x += 0.002;
      
      // Subtle mouse follow
      group.position.x += (mouseX - group.position.x) * 0.05;
      group.position.y += (-mouseY - group.position.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      containerWidth = container.clientWidth || window.innerWidth;
      containerHeight = container.clientHeight || window.innerHeight;
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerWidth, containerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(g => g.dispose());
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
