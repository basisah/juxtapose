const Intro = document.querySelector(".Intro-text");
const text = [
    "Hi I'm blob.",
    "I look different, but i looked like you a long time ago.",
    "When I was younger, I was much smaller.",
    "These are parts of other people I met over time.",
    "Some of them moved on, but these are some of their parts that makes me.",
    "I didn’t have the choice to meet them.",
    "They just happened to come and happened to go.",
    "But I admired some of the things they did or how they thought.",
    "That’s how I’m me.",
    "Hehe." 
];

function typeWriter(element, text, i = 0) {
   element.textContent += text[i];
   element.textContent= '';
   let j = 0;
   if (i == text.length -1){
    return;
   }
    setTimeout(()=> typeWriter(element, text, i+1),50);
}
typeWriter(Intro, text);


