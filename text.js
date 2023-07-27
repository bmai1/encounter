export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export async function wr(text) {
    let index = 0;
    let speed = 20
    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
      } else {
        process.stdout.write(text[index]);
        index++;
      }
    }, speed);
    await sleep(text.length * 33 + 100);
}
export function textWrap(text) {
  let maxWidth = 75

  const words = text.split(' ');
  let lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).length <= maxWidth) {
      currentLine += (currentLine === '' ? '' : ' ') + word;
    } else {
      lines.push(' ' + currentLine); // Add a space at the start of the line
      currentLine = word;
    }
  }
  lines.push(' ' + currentLine); // Add a space at the start of the last line
  return lines.join('\n');
}