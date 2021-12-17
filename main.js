// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
};

// RAW TEXT STRINGS
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX = ['Willy the Goblin',
    'Big Daddy',
    'Father Christmas'];
const insertY = ['the soup kitchen',
    'Disneyland',
    'the White House'];
const insertZ = ['spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'];

// EVENT LISTENER AND FUNCTION DEFINITION
randomize.addEventListener('click', result);
function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    if (document.getElementById('uk').checked) {
        const conversionFactor = 0.071428571428571;
        const weight = Math.round(300 * conversionFactor) + ' stone';
        console.log(weight)
        const temperature = Math.round((94 * 9 / 5) + 32) + ' centigrade';
        newStory.replace('94 fahrenheit', temperature)
        newStory.replace('300 pounds', weight)
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}