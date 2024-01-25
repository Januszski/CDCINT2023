import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Threebox from "threebox/src/Threebox";
import "./styles.css";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { atom, useAtom } from "jotai";
import { mapPosAtom } from "@/app/atom";

import * as THREE from "three";

import ReactMapGL from "react-map-gl";

const Map2 = () => {
  const mapContainer = useRef(null);
  const [mapPos, setMapPos] = useAtom(mapPosAtom);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map === null) {
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

      const tempMap = new mapboxgl.Map({
        container: mapContainer.current,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/iseman/clrgwcl7c00bw01pdatkc8gzo",
        //mapbox://styles/iseman/clrch7ga5007k01pi8ax94dsj
        //mapbox://styles/mapbox/dark-v11
        //mapbox://styles/iseman/clrgwcl7c00bw01pdatkc8gzo?optimize=true
        minZoom: 5,

        zoom: mapPos.zoom,
        //41.90901463647203, -92.18456352808276
        // ORIGINALLY -93.65096, 42.02842
        center: [mapPos.center.lng, mapPos.center.lat],
        pitch: mapPos.pitch,
        antialias: false, // create the gl context with MSAA antialiasing, so custom layers are antialiased
        projection: "mercator",
      });
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",

            properties: {},
            geometry: {
              coordinates: [
                [-93.65107091233199, 42.028252243975224],
                [-93.65034630988335, 42.02293673512968],
                [-93.61080806661087, 42.022764695265],
                [-93.56982544547053, 42.00849095928635],
                [-93.5672602242228, 41.76224805947765],
                [-93.57584883842618, 41.7333388969314],
                [-93.57051610258374, 41.656222138776585],

                [-93.34719533622217, 41.68345702235849],
                [-93.32384961062884, 41.632992292783015],
              ],
              type: "LineString",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [
                //,
                [-93.65107091233199, 42.028252243975224],
                [-93.57245897322866, 42.02756755600038],

                [-93.56909900925851, 42.00974923651135],

                [-92.61062684915248, 41.9989883126831],
                [-92.53609843918878, 41.969969837348486],
                [-91.78731163536833, 41.969922645719734],
                [-91.66468855080306, 41.931232818774774],
                [-91.50639329744888, 41.92846836119869],
                [-91.43207627786197, 41.916856331384764],
                [-91.38525655241747, 41.90911380370224],
                [-91.3406285187728, 41.92178530284582],
                [-91.18970965343942, 41.89335464442569],
                [-91.12837919553166, 41.89077351569668],
                [-91.1305842166394, 41.813775870663875],
                [-91.12497678460831, 41.805416710826194],
                [-91.1104403622368, 41.650448489354055],
                [-90.83749107743951, 41.635786750776305],
                [-90.72139117963349, 41.606191339679505],
                [-90.52210859554967, 41.59887352608476],
                [-90.51899480453619, 41.55028882973001],
                [-90.50920860635983, 41.52365158166917],
                [-90.50609481603101, 41.51066194569944],
                [-90.43294584221589, 41.51755190010231],
                [-90.42556074930543, 41.535733737671556],
                [-90.3903138939476, 41.54905396880391],
              ],
              type: "LineString",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [
                [-93.65107091233199, 42.028252243975224],

                [-93.64817245935888, 42.035198338731924],
                [-93.62165819735559, 42.035001408072965],
                [-93.62261680151323, 42.060015976715945],
                [-93.62003334569022, 42.082006037181415],
                [-93.61852102522084, 42.24045187427291],
                [-93.64236868176599, 42.241313094707444],
                [-93.6464402329154, 42.26972677593001],
                [-93.6417870316383, 42.284789441821786],
                [-93.64353198178148, 42.446378376192484],
                [-93.22849816078904, 42.44377471757702],
                [-93.19929341948671, 42.423759558124054],
                [-93.07934537485211, 42.425299412708846],
                [-93.03866734232385, 42.45685809646594],
                [-92.63111385929656, 42.458136647843276],
                [-92.55009212574228, 42.53315250071414],
              ],
              type: "LineString",
            },
          },
        ],
      };
      tempMap.on("load", () => {
        tempMap.addSource("line", {
          type: "geojson",
          data: geojson,
        });
      });

      setMap(tempMap);
    }
  }, []);

  useEffect(() => {
    if (map === null) {
      return;
    }

    map.on("load", () => {
      map.addLayer({
        type: "line",
        source: "line",
        id: "line-background",
        paint: {
          "line-color": "gray",
          "line-width": 6,
          "line-opacity": 0.4,
        },
      });

      map.addLayer({
        type: "line",
        source: "line",
        layout: { visibility: "visible" },

        id: "line-dashed",
        paint: {
          "line-color": "yellow",
          "line-width": 6,
          "line-dasharray": [0, 4, 3],
        },
      });

      const dashArraySequence = [
        [0, 4, 3],
        [0.5, 4, 2.5],
        [1, 4, 2],
        [1.5, 4, 1.5],
        [2, 4, 1],
        [2.5, 4, 0.5],
        [3, 4, 0],
        [0, 0.5, 3, 3.5],
        [0, 1, 3, 3],
        [0, 1.5, 3, 2.5],
        [0, 2, 3, 2],
        [0, 2.5, 3, 1.5],
        [0, 3, 3, 1],
        [0, 3.5, 3, 0.5],
      ];

      let step = 0;

      function animateDashArray(timestamp) {
        const newStep = parseInt((timestamp / 50) % dashArraySequence.length);

        if (newStep !== step) {
          map.setPaintProperty(
            "line-dashed",
            "line-dasharray",
            dashArraySequence[step]
          );
          step = newStep;
        }

        requestAnimationFrame(animateDashArray);
      }

      animateDashArray(0);
    });
  }, [map]);

  useEffect(() => {
    if (map === null) {
      return;
    }
    const modelOrigin = [-93.32384961062884, 41.632992292783015];
    const modelAltitude = 35;
    const modelRotate = [Math.PI / 2, 0, 0];

    const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin,
      modelAltitude
    );

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since the 3D model is in real world meters, a scale transform needs to be
       * applied since the CustomLayerInterface expects units in MercatorCoordinates.
       */
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
    };

    //const THREE = window.THREE;

    // configuration of the custom layer for a 3D model per the CustomLayerInterface
    const customLayer = {
      id: "3d-model",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);
        //"https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf"
        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new GLTFLoader();
        loader.load("/mapass/substation/scene.gltf", (gltf) => {
          this.scene.add(gltf.scene);
        });

        this.map = map;

        // use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: false,
        });

        this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform.translateX,
            modelTransform.translateY,
            modelTransform.translateZ
          )
          .scale(
            new THREE.Vector3(
              modelTransform.scale,
              -modelTransform.scale,
              modelTransform.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };

    const modelOrigin2 = [-90.3903138939476, 41.54905396880391];
    const modelAltitude2 = 35;

    const modelAsMercatorCoordinate2 = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin2,
      modelAltitude2
    );

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const modelTransform2 = {
      translateX: modelAsMercatorCoordinate2.x,
      translateY: modelAsMercatorCoordinate2.y,
      translateZ: modelAsMercatorCoordinate2.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since the 3D model is in real world meters, a scale transform needs to be
       * applied since the CustomLayerInterface expects units in MercatorCoordinates.
       */
      scale: modelAsMercatorCoordinate2.meterInMercatorCoordinateUnits(),
    };

    //SECOND GRID HERE ///////////////////////////////////////
    const customLayer2 = {
      id: "3d-model2",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);
        //"https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf"
        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new GLTFLoader();
        loader.load("/mapass/substation/scene.gltf", (gltf) => {
          this.scene.add(gltf.scene);
        });

        this.map = map;

        // use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: false,
        });

        this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform2.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform2.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform2.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform2.translateX,
            modelTransform2.translateY,
            modelTransform2.translateZ
          )
          .scale(
            new THREE.Vector3(
              modelTransform2.scale,
              -modelTransform2.scale,
              modelTransform2.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };

    //42.51884268158338, -92.47860570476456
    //THIRD HERE ////////////////////////////////////

    //42.53315250071414, -92.55009212574228
    const modelOrigin3 = [-92.55009212574228, 42.53315250071414];
    const modelAltitude3 = 35;

    const modelAsMercatorCoordinate3 = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin3,
      modelAltitude3
    );

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const modelTransform3 = {
      translateX: modelAsMercatorCoordinate3.x,
      translateY: modelAsMercatorCoordinate3.y,
      translateZ: modelAsMercatorCoordinate3.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],

      scale: modelAsMercatorCoordinate3.meterInMercatorCoordinateUnits(),
    };

    const customLayer3 = {
      id: "3d-model3",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);
        //"https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf"
        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new GLTFLoader();
        loader.load("/mapass/substation/scene.gltf", (gltf) => {
          this.scene.add(gltf.scene);
        });

        this.map = map;

        // use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: false,
        });

        this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform3.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform3.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform3.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform3.translateX,
            modelTransform3.translateY,
            modelTransform3.translateZ
          )
          .scale(
            new THREE.Vector3(
              modelTransform3.scale,
              -modelTransform3.scale,
              modelTransform3.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };

    //42.028406523989474, -93.65091505315185
    ///mapass/coover/1437042.gltf

    const modelOrigin4 = [-93.6508888, 42.028436523989474];
    const modelAltitude4 = 0;

    const modelAsMercatorCoordinate4 = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin4,
      modelAltitude4
    );

    // transformation parameters to position, rotate and scale the 3D model onto the map
    const modelTransform4 = {
      translateX: modelAsMercatorCoordinate4.x,
      translateY: modelAsMercatorCoordinate4.y,
      translateZ: modelAsMercatorCoordinate4.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since the 3D model is in real world meters, a scale transform needs to be
       * applied since the CustomLayerInterface expects units in MercatorCoordinates.
       */
      scale: modelAsMercatorCoordinate2.meterInMercatorCoordinateUnits(),
    };

    const customLayer4 = {
      id: "3d-model4",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

        const loader = new GLTFLoader();
        loader.load("/mapass/coover/1437042.gltf", (gltf) => {
          this.scene.add(gltf.scene);
        });

        this.map = map;

        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: false,
        });

        this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform4.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform4.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform4.rotateZ
        );

        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform4.translateX,
            modelTransform4.translateY,
            modelTransform4.translateZ
          )
          .scale(
            new THREE.Vector3(
              modelTransform4.scale,
              -modelTransform4.scale,
              modelTransform4.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };

    map.on("load", () => {
      map.addLayer(customLayer, "waterway-label");
      map.addLayer(customLayer2, "waterway-label");
      map.addLayer(customLayer3, "waterway-label");
      map.addLayer(customLayer4, "waterway-label");
    });
  }, [map]);

  return (
    <div
      ref={mapContainer}
      style={{ width: "77vw", minHeight: "95vh", height: "100%" }}
    />
  );
};

export default Map2;
