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
    var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    var poligono = new THREE.Line(geometry, material);

    return poligono;
}
function crearPoliedro(nlados, radio, altura) {
    var geometry = new THREE.BufferGeometry();
    var vertices = [];
    var indices = [];
  
    for (var i = 0; i < nlados; i++) {
      var angle = (2 * Math.PI * i) / nlados;
      var x = radio * Math.cos(angle);
      var z = radio * Math.sin(angle);
      vertices.push(x, altura, z); // Modificación aquí
  
      indices.push(i, (i + 1) % nlados, (i + 2) % nlados); // Modificación aquí
    }
  
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setIndex(indices);
  
    var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
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