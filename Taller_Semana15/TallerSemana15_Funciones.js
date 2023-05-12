/**
* crearPoligonmo: Genera un polígono en 3D utilizando la biblioteca THREE.js  de n lados y radio r determinado por el usuario.
* ENTRADAS: *nlados (tipo: número) - Número de lados del poliedro.
            *x0 (tipo: número) - Posicion inicial.
            *radio (tipo: número) - Posicion inicial.
* SALIDAS: poligono (tipo: objeto THREE.Line) - El polígono generado, representado como un objeto THREE.Line en THREE.js. Este objeto contiene la geometría y el material del polígono.
*/
function crearPoligono(nlados, x0, z0, radio) {

  var geometry = new THREE.BufferGeometry();
  var vertices = [];
  var numVertices = nlados;

  for (var i = 0; i < numVertices + 1; i++) {
      var angle = (2 * Math.PI * i) / numVertices;
      var x = radio * Math.cos(angle) + x0;
      var z = radio * Math.sin(angle) + z0;
      vertices.push(new THREE.Vector3(x, 0, z));
  }

  geometry.setFromPoints(vertices);
  var material = new THREE.LineBasicMaterial({ color: 0x8c00ff});
  var poligono = new THREE.Line(geometry, material);

  return poligono;

}
/**
* crearPoliedro: Genera un poliedro en 3D utilizando la biblioteca THREE.js de n lados y radio r determinado por el usuario.
* ENTRADAS: *nlados (tipo: número) - Número de lados del poliedro.
            *x0 (tipo: número) - Posicion inicial.
            *radio (tipo: número) - Posicion inicial.
            *altura (tipo: número) - Altura del poliedro.
* SALIDAS: poliedro (tipo: objeto THREE.Line) - El poliedro generado, representado como un objeto THREE.Line en THREE.js. Este objeto contiene la geometría y el material del poliedro.
*/
function crearPoliedro(nlados, x0, z0, radio, altura) {

  var geometry = new THREE.BufferGeometry();
  var vertices = [];
  var indices = [];

  // Generar los vértices de la base
  for (var i = 0; i < nlados; i++) {

    var angle = (2 * Math.PI * i) / nlados;
    var x = radio * Math.cos(angle) + x0;
    var z = radio * Math.sin(angle) + z0;
    vertices.push(x, 0, z);

  }

  // Generar los vértices de la parte superior del poliedro
  for (var i = 0; i < nlados; i++) {

    var angle = (2 * Math.PI * i) / nlados;
    var x = radio * Math.cos(angle) + x0;
    var z = radio * Math.sin(angle) + z0;
    vertices.push(x, altura, z);

  }

  // Generar los índices que conectan los vértices de la base con los vértices de la parte superior
  for (var i = 0; i < nlados; i++) {

    indices.push(i, i + nlados, (i + 1) % nlados + nlados);
    indices.push(i, (i + 1) % nlados + nlados, (i + 1) % nlados);

  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);

  var material = new THREE.LineBasicMaterial({ color: 0x8c00ff});
  var poliedro = new THREE.Line(geometry, material);

  return poliedro;

}
 
/**
* Animate: Funcion creada para trabajar con una escena, una cámara y un objeto de control de cámara.
*/
function animate() {

    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);   
  
}