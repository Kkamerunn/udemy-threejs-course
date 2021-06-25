var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const fov = 60;
const aspect = 1920 / 1080;
const near = 1;
const far = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(75, 20, 0);

const scene = new THREE.Scene();

//let light = new THREE.DirectionalLight(0xffffff, 1.0);
//light.position.set(20,100,10);
//light.target.position.set(0,0,0);
//light.castShadow = true;
//scene.add(light);

//let ambientLightColor = 0xffffffff;
//let ambientLightIntensity = 1;
//const ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity);
//scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0xffff80,0x4040ff,1);
scene.add(hemisphereLight);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

let geometry = new THREE.PlaneGeometry(70, 70, 10, 10);
let material = new  THREE.MeshStandardMaterial({
    color: 0xffffff,
});

const plane = new THREE.Mesh(geometry, material);
plane.castShadow = true;
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

let stats = new Stats();
document.body.appendChild(stats.dom);

const box = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new  THREE.MeshStandardMaterial({
        color: 0xffffff,
    })   
);
box.position.set(0,3,0);
box.castShadow = true;
box.receiveShadow = true;
scene.add(box);

const animate = () => {
    requestAnimationFrame(animate);
    stats.update();
    renderer.render(scene, camera);
};

animate();