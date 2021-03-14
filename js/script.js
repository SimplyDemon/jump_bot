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

function finish(status) {
    isFinished = true;
    $("#start_bot").removeAttr("disabled");
    let end = new Date().getTime();
    let rockPosition = terrain.rockPosition;
    let timeWasted = ((end - start) / 1000).toString();
    let rockSize = terrain.rockSize;

    console.log(rockPosition);
    console.log(timeWasted);
    console.log(rockSize);
    console.log(jumpDistance);
    console.log(status);
    resultAdd(rockPosition, timeWasted, rockSize, jumpDistance, status);
}

function resultAdd(rockPosition, timeWasted, rockSize, jumpDistance, status) {
    console.log('rockPosition');
    console.log(rockPosition);
    console.log('timeWasted');
    console.log(timeWasted);
    let data = {
        'rockPosition': rockPosition,
        'timeWasted': timeWasted,
        'rockSize': rockSize,
        'jumpDistance': jumpDistance,
        'status': status,
    };

    $.ajax({
        method: 'post',
        url: 'result-add.php',
        data: data,
        success: function (response) {
            let responseJson = $.parseJSON(response);
            console.log(responseJson['success']);
        },

    });
}

async function startBot() {
    isFinished = false;
    $("#start_bot").prop("disabled", true);
    console.log(isFinished)
    while (!isFinished) {
        await stepForward();
        await sleep(300);
    }
}