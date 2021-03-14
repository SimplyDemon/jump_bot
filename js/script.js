function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

start = new Date().getTime();

terrain = window.terrain;
character = window.character;
const jumpDistance = 0; // always jumping
async function stepForward() {
    character.jump();
    await sleep(200);
    character.run();
    await sleep(600);
    character.stop();
}

function finish(result) {
    let end = new Date().getTime();
    let rockPosition = terrain.rockPosition;
    let timeWasted = ((end - start) / 1000).toString();
    let rockSize = terrain.rockSize;

    console.log(rockPosition);
    console.log(timeWasted);
    console.log(rockSize);
    console.log(jumpDistance);
    console.log(result);
}
