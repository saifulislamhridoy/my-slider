const images =[
    "images/airpod.png",
    "images/action.png",
    "images/camera.png",
    "images/drone.png",
    "images/lights.png",
    "images/gear.png",
    "images/mic.png",

];
const imgSlider = document.getElementById('img-slider')
let imgIndex=0
setInterval( ()=>{
    if(imgIndex >= images.length){
        imgIndex=0
    }
 const img = images[imgIndex]
 imgIndex++
 imgSlider.setAttribute('src',img)
}, 2000)