var canvas = new fabric.Canvas("myCanvas")
block_width=30;
block_height=30;
player_x=5
player_y=90
var Player_image=""
var block_image=""
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        Player_image=Img;
        Player_image.scaleToWidth(150);
        Player_image.scaleToHeight(150);
        Player_image.set({
            top:player_y,left:player_x
        });
        canvas.add(Player_image)
    });
}
function block_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image)
    });

}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyValue=e.keyCode;
    console.log(keyValue)
    if(e.shiftKey==true && keyValue=="80"){
        console.log("p and shift is pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyValue=="77"){
        console.log("m and shift is pressed together");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyValue=="71"){
        block_update("ground.png");
        console.log("g");
    }
    if(keyValue=="84"){
        block_update("trunk.jpg");
        console.log("t");
    }
    if(keyValue=="85"){
        block_update("unique.png");
        console.log("u");
    }
    if(keyValue=="89"){
        block_update("yellow_wall.png");
        console.log("y");
    }
    if(keyValue=="87"){
        block_update("wall.jpg");
        console.log("w");
    }
    if(keyValue=="67"){
        block_update("cloud.jpg");
        console.log("c");
    }
    if(keyValue=="82"){
        block_update("roof.jpg");
        console.log("r");
    }
    if(keyValue=="68"){
        block_update("dark_green.png");
        console.log("d");
    }
    if(keyValue=="76"){
        block_update("light_green.png");
        console.log("l");
    }
    if(keyValue=="37"){
        left();
        console.log("left");
    }
    if(keyValue=="38"){
        up();
        console.log("up");
    }
    if(keyValue=="39"){
        right();
        console.log("right");
    }
    if(keyValue=="40"){
        down();
        console.log("down");
    }
}
function up(){
    if (player_y>0) {
        player_y=player_y-block_height;
        console.log("block image height= "+block_height);
        console.log("when up arrow is pressed x=" + player_x+", y= "+player_y);
        canvas.remove(Player_image);
        player_update();
    }
}
function down(){
    if (player_y<650) {
        player_y=player_y+block_height;
        console.log("block image height= "+block_height);
        console.log("when down arrow is pressed x=" + player_x+", y= "+player_y);
        canvas.remove(Player_image);
        player_update();
    }
}
function right(){
    if (player_x<850) {
        player_x=player_x+block_width;
        console.log("block image height= "+block_width);
        console.log("when right arrow is pressed x=" + player_x+", y= "+player_y);
        canvas.remove(Player_image);
        player_update();
    }
}
function left(){
    if (player_x>0) {
        player_x=player_x-block_width;
        console.log("block image height= "+block_width);
        console.log("when left arrow is pressed x=" + player_x+", y= "+player_y);
        canvas.remove(Player_image);
        player_update();
    }
}
