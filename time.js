export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function wr(text) {
    let index = 0;
    let speed = 50
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
      } else {
        process.stdout.write(text[index]);
        index++;
      }
    }, speed);
    await sleep(text.length * 50 + 100);
}