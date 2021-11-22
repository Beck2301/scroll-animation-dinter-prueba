
console.clear();

const threshold = 0.7; // trigger
const options = {
  root: null,
  rootMargin: '0px',
  threshold: threshold
};
const observer = new IntersectionObserver(animHandler, options);
const targets = document.querySelectorAll("section");
const ar = [].slice.call(targets); 
let animations = [];


let count = 0;

for (let target of ar) {
  animations[count] = new TimelineMax({paused:true});  
  observer.observe(target);
  count++;
}

// timeline for each section
animations[0]

animations[1].to("#apple",1, {scale:1.4, ease: Sine.easeOut});

animations[2].to("#apple",2, {scale:0.4, ease: Sine.easeOut})
  .to('#small',1,{scale:0.5, transformOrigin:"center"},0);

animations[3].to("#apple",1, {rotation:360, ease: Sine.easeOut});

// observer handler
function animHandler(targets, observer) {
  for (var entry of targets) {
    let i = ar.indexOf(entry.target);
    if (entry.isIntersecting) {
      
      
      animations.forEach(tl => tl.pause(0));
      animations[i].play();

    } else {
        //return;
      animations[i].reverse();
    }
  }
}