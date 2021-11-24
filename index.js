const {spawnSync , exec} = require("child_process");

exec('ffmpeg -y -i ./input.mp4 output.mp3' , (error , stdout , stderr)=>{
    if(error){
        console.log(error);
    }else{
        console.log(stderr);
    }
});
