const txt = "Hi I'm blob. I look different, but I looked like you a long time ago. When I was younger, I was much smaller. These are parts of other people I met over time. Some of them moved on, but these are some of their parts that makes me. I didn’t have the choice to meet them. They just happened to come and happened to go. But I admired some of the things they did or how they thought. That’s how I’m me. Hehe.";
let i = 0;
const speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();