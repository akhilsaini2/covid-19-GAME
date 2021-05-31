class Form{
cunstructor(){
this.title = createElement("h3");
this.button = createButton("play");
this.input = createInput("name");
this.greeting = createGreeting("h2");
}
hide(){
this.button.hide();
this.input.hide();
this.greeting.hide();
}

display(){
this.title.html("COVID - 19 Game");
this.title.position(400,50);
this.input.position(380,300);
this.button.position(420,300)

this.button.mousePressed(()=>{
this.button.hide();
this.input.hide();
player.name = this.input.value();
this.greeting.html("HELLO" + player.name);
this.greeting.position(200,200);
})
}
}