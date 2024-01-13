mapboxgl.accessToken =
  "pk.eyJ1IjoiaXNlbWFuIiwiYSI6ImNscmIyZTJkNDBsYWUyb2xlYmxtcnVlcWkifQ.wFVOdt5wyd_FEvXvRduOkw";
const map = new mapboxgl.Map({
  container: "map",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/light-v11",
  center: { lng: -73.97627, lat: 40.75155 },
  zoom: 15.4,
  pitch: 64.9,
  bearing: 172.5,
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
});

// eslint-disable-next-line no-undef
const tb = (window.tb = new Threebox(map, map.getCanvas().getContext("webgl"), {
  defaultLights: true,
}));

map.on("style.load", () => {
  map.addLayer({
    id: "custom-threebox-model",
    type: "custom",
    renderingMode: "3d",
    onAdd: function () {
      // Creative Commons License attribution:  Metlife Building model by https://sketchfab.com/NanoRay
      // https://sketchfab.com/3d-models/metlife-building-32d3a4a1810a4d64abb9547bb661f7f3
      const scale = 3.2;
      const options = {
        obj: "https://docs.mapbox.com/mapbox-gl-js/assets/metlife-building.gltf",
        type: "gltf",
        scale: { x: scale, y: scale, z: 2.7 },
        units: "meters",
        rotation: { x: 90, y: -90, z: 0 },
      };

      tb.loadObj(options, (model) => {
        model.setCoords([-73.976799, 40.754145]);
        model.setRotation({ x: 0, y: 0, z: 241 });
        tb.add(model);
      });
    },

    render: function () {
      tb.update();
    },
  });
});
