const img = document.getElementById("protein");
const frameCount = 18;
let ticking = false;

if (img) {
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollFraction =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );

        const frameNumber = String(frameIndex + 1).padStart(3, "0");
        img.src = `./images/proteins/ezgif-frame-${frameNumber}.png`;

        ticking = false;
      });
      ticking = true;
    }
  });
}