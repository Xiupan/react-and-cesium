# React + Cesium

## The Path So Far

- Vanilla Cesium + React was a bit harder than expected until I found `Resium`, a React wrapper library for Cesium. With
  some webpack alterations using `craco` and `craco-cesium`, it worked!
- Shortly after that, was able to get some basic GeoJSON formatted data to be displayed on the Cesium Viewer.
- Looked into CZML type data and how to load and display that.
- After finding no useable sample CZML data, I looked into how to create a CZML myself. Found `czml-writer`.
- Using this, I was able to create CZML formatted data client-side and display that on the Cesium Viewer.
