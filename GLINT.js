/************** 
 * Glint *
 **************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'GLINT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};

// Start code blocks for 'Before Experiment'
var anim_natural
var inanim_natural
var inanim_artificial
var anim_natural_prac
var inanim_natural_prac
var inanim_artificial_prac
var im_classes
var corr_response
var img_file
// Run 'Before Experiment' code from prac_code_prompt
console.log("test");
anim_natural_prac = ["hand", "duck", "dog"];
console.log(anim_natural);
inanim_natural_prac = ["flower", "tree", "leaf"];
console.log(inanim_natural_prac);
inanim_artificial_prac = ["bicycle", "chair", "truck"];
console.log(inanim_artificial_prac);

var anim_natural
var inanim_natural
var inanim_artificial
var im_classes
var corr_response
var img_file
var number_to_label
var response_animacy
var corr_animacy
var block_name
var condition
// Run 'Before Experiment' code from code_prompt
console.log("loading stimulus categories");
anim_natural = ["bear", "butterfly", "cat", "cow", "dog", "snail"];
console.log(anim_natural);
inanim_natural = ["apple", "avocado", "bread", "corn", "mushroom", "pineapple"];
console.log(inanim_natural);
inanim_artificial = ["airplane", "binoculars", "car", "house", "lawnmower", "train"];
console.log(inanim_artificial);

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(loading_instructionsRoutineBegin());
flowScheduler.add(loading_instructionsRoutineEachFrame());
flowScheduler.add(loading_instructionsRoutineEnd());
flowScheduler.add(intro_practiceRoutineBegin());
flowScheduler.add(intro_practiceRoutineEachFrame());
flowScheduler.add(intro_practiceRoutineEnd());
flowScheduler.add(intro_practice_2RoutineBegin());
flowScheduler.add(intro_practice_2RoutineEachFrame());
flowScheduler.add(intro_practice_2RoutineEnd());
const prac_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_loopLoopBegin(prac_loopLoopScheduler));
flowScheduler.add(prac_loopLoopScheduler);
flowScheduler.add(prac_loopLoopEnd);






const randomize_blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(randomize_blocksLoopBegin(randomize_blocksLoopScheduler));
flowScheduler.add(randomize_blocksLoopScheduler);
flowScheduler.add(randomize_blocksLoopEnd);










flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_object_classes.csv', 'path': 'practice_object_classes.csv'},
    {'name': 'block_randomizer.xlsx', 'path': 'block_randomizer.xlsx'},
    {'name': 'object_classes.csv', 'path': 'object_classes.csv'},
    {'name': 'stim/practice_stim/chair/chair(2).JPEG', 'path': 'stim/practice_stim/chair/chair(2).JPEG'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stim/prompt.png', 'path': 'stim/prompt.png'},
    {'name': 'stim/rgb_mask.jpg', 'path': 'stim/rgb_mask.jpg'},
    {'name': 'stim/scrambled/prac_image.png', 'path': 'stim/scrambled/prac_image.png'},
    {'name': 'stim/scrambled/train/train(1).png', 'path': 'stim/scrambled/train/train(1).png'},
    {'name': 'stim/scrambled/train/train(2).png', 'path': 'stim/scrambled/train/train(2).png'},
    {'name': 'stim/scrambled/train/train(3).png', 'path': 'stim/scrambled/train/train(3).png'},
    {'name': 'stim/scrambled/train/train(4).png', 'path': 'stim/scrambled/train/train(4).png'},
    {'name': 'stim/scrambled/train/train(5).png', 'path': 'stim/scrambled/train/train(5).png'},
    {'name': 'stim/scrambled/train/train(6).png', 'path': 'stim/scrambled/train/train(6).png'},
    {'name': 'stim/scrambled/train/train(7).png', 'path': 'stim/scrambled/train/train(7).png'},
    {'name': 'stim/scrambled/train/train(8).png', 'path': 'stim/scrambled/train/train(8).png'},
    {'name': 'stim/scrambled/train/train(9).png', 'path': 'stim/scrambled/train/train(9).png'},
    {'name': 'stim/scrambled/train/train(10).png', 'path': 'stim/scrambled/train/train(10).png'},
    {'name': 'stim/scrambled/snail/snail(1).png', 'path': 'stim/scrambled/snail/snail(1).png'},
    {'name': 'stim/scrambled/snail/snail(2).png', 'path': 'stim/scrambled/snail/snail(2).png'},
    {'name': 'stim/scrambled/snail/snail(3).png', 'path': 'stim/scrambled/snail/snail(3).png'},
    {'name': 'stim/scrambled/snail/snail(4).png', 'path': 'stim/scrambled/snail/snail(4).png'},
    {'name': 'stim/scrambled/snail/snail(5).png', 'path': 'stim/scrambled/snail/snail(5).png'},
    {'name': 'stim/scrambled/snail/snail(6).png', 'path': 'stim/scrambled/snail/snail(6).png'},
    {'name': 'stim/scrambled/snail/snail(7).png', 'path': 'stim/scrambled/snail/snail(7).png'},
    {'name': 'stim/scrambled/snail/snail(8).png', 'path': 'stim/scrambled/snail/snail(8).png'},
    {'name': 'stim/scrambled/snail/snail(9).png', 'path': 'stim/scrambled/snail/snail(9).png'},
    {'name': 'stim/scrambled/snail/snail(10).png', 'path': 'stim/scrambled/snail/snail(10).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(1).png', 'path': 'stim/scrambled/pineapple/pineapple(1).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(2).png', 'path': 'stim/scrambled/pineapple/pineapple(2).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(3).png', 'path': 'stim/scrambled/pineapple/pineapple(3).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(4).png', 'path': 'stim/scrambled/pineapple/pineapple(4).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(5).png', 'path': 'stim/scrambled/pineapple/pineapple(5).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(6).png', 'path': 'stim/scrambled/pineapple/pineapple(6).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(7).png', 'path': 'stim/scrambled/pineapple/pineapple(7).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(8).png', 'path': 'stim/scrambled/pineapple/pineapple(8).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(9).png', 'path': 'stim/scrambled/pineapple/pineapple(9).png'},
    {'name': 'stim/scrambled/pineapple/pineapple(10).png', 'path': 'stim/scrambled/pineapple/pineapple(10).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(1).png', 'path': 'stim/scrambled/mushroom/mushroom(1).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(2).png', 'path': 'stim/scrambled/mushroom/mushroom(2).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(3).png', 'path': 'stim/scrambled/mushroom/mushroom(3).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(4).png', 'path': 'stim/scrambled/mushroom/mushroom(4).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(5).png', 'path': 'stim/scrambled/mushroom/mushroom(5).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(6).png', 'path': 'stim/scrambled/mushroom/mushroom(6).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(7).png', 'path': 'stim/scrambled/mushroom/mushroom(7).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(8).png', 'path': 'stim/scrambled/mushroom/mushroom(8).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(9).png', 'path': 'stim/scrambled/mushroom/mushroom(9).png'},
    {'name': 'stim/scrambled/mushroom/mushroom(10).png', 'path': 'stim/scrambled/mushroom/mushroom(10).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(1).png', 'path': 'stim/scrambled/lawnmower/lawnmower(1).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(2).png', 'path': 'stim/scrambled/lawnmower/lawnmower(2).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(3).png', 'path': 'stim/scrambled/lawnmower/lawnmower(3).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(4).png', 'path': 'stim/scrambled/lawnmower/lawnmower(4).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(5).png', 'path': 'stim/scrambled/lawnmower/lawnmower(5).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(6).png', 'path': 'stim/scrambled/lawnmower/lawnmower(6).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(7).png', 'path': 'stim/scrambled/lawnmower/lawnmower(7).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(8).png', 'path': 'stim/scrambled/lawnmower/lawnmower(8).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(9).png', 'path': 'stim/scrambled/lawnmower/lawnmower(9).png'},
    {'name': 'stim/scrambled/lawnmower/lawnmower(10).png', 'path': 'stim/scrambled/lawnmower/lawnmower(10).png'},
    {'name': 'stim/scrambled/house/house(1).png', 'path': 'stim/scrambled/house/house(1).png'},
    {'name': 'stim/scrambled/house/house(2).png', 'path': 'stim/scrambled/house/house(2).png'},
    {'name': 'stim/scrambled/house/house(3).png', 'path': 'stim/scrambled/house/house(3).png'},
    {'name': 'stim/scrambled/house/house(4).png', 'path': 'stim/scrambled/house/house(4).png'},
    {'name': 'stim/scrambled/house/house(5).png', 'path': 'stim/scrambled/house/house(5).png'},
    {'name': 'stim/scrambled/house/house(6).png', 'path': 'stim/scrambled/house/house(6).png'},
    {'name': 'stim/scrambled/house/house(7).png', 'path': 'stim/scrambled/house/house(7).png'},
    {'name': 'stim/scrambled/house/house(8).png', 'path': 'stim/scrambled/house/house(8).png'},
    {'name': 'stim/scrambled/house/house(9).png', 'path': 'stim/scrambled/house/house(9).png'},
    {'name': 'stim/scrambled/house/house(10).png', 'path': 'stim/scrambled/house/house(10).png'},
    {'name': 'stim/scrambled/dog/dog(1).png', 'path': 'stim/scrambled/dog/dog(1).png'},
    {'name': 'stim/scrambled/dog/dog(2).png', 'path': 'stim/scrambled/dog/dog(2).png'},
    {'name': 'stim/scrambled/dog/dog(3).png', 'path': 'stim/scrambled/dog/dog(3).png'},
    {'name': 'stim/scrambled/dog/dog(4).png', 'path': 'stim/scrambled/dog/dog(4).png'},
    {'name': 'stim/scrambled/dog/dog(5).png', 'path': 'stim/scrambled/dog/dog(5).png'},
    {'name': 'stim/scrambled/dog/dog(6).png', 'path': 'stim/scrambled/dog/dog(6).png'},
    {'name': 'stim/scrambled/dog/dog(7).png', 'path': 'stim/scrambled/dog/dog(7).png'},
    {'name': 'stim/scrambled/dog/dog(8).png', 'path': 'stim/scrambled/dog/dog(8).png'},
    {'name': 'stim/scrambled/dog/dog(9).png', 'path': 'stim/scrambled/dog/dog(9).png'},
    {'name': 'stim/scrambled/dog/dog(10).png', 'path': 'stim/scrambled/dog/dog(10).png'},
    {'name': 'stim/scrambled/cow/cow(1).png', 'path': 'stim/scrambled/cow/cow(1).png'},
    {'name': 'stim/scrambled/cow/cow(2).png', 'path': 'stim/scrambled/cow/cow(2).png'},
    {'name': 'stim/scrambled/cow/cow(3).png', 'path': 'stim/scrambled/cow/cow(3).png'},
    {'name': 'stim/scrambled/cow/cow(4).png', 'path': 'stim/scrambled/cow/cow(4).png'},
    {'name': 'stim/scrambled/cow/cow(5).png', 'path': 'stim/scrambled/cow/cow(5).png'},
    {'name': 'stim/scrambled/cow/cow(6).png', 'path': 'stim/scrambled/cow/cow(6).png'},
    {'name': 'stim/scrambled/cow/cow(7).png', 'path': 'stim/scrambled/cow/cow(7).png'},
    {'name': 'stim/scrambled/cow/cow(8).png', 'path': 'stim/scrambled/cow/cow(8).png'},
    {'name': 'stim/scrambled/cow/cow(9).png', 'path': 'stim/scrambled/cow/cow(9).png'},
    {'name': 'stim/scrambled/cow/cow(10).png', 'path': 'stim/scrambled/cow/cow(10).png'},
    {'name': 'stim/scrambled/corn/corn(1).png', 'path': 'stim/scrambled/corn/corn(1).png'},
    {'name': 'stim/scrambled/corn/corn(2).png', 'path': 'stim/scrambled/corn/corn(2).png'},
    {'name': 'stim/scrambled/corn/corn(3).png', 'path': 'stim/scrambled/corn/corn(3).png'},
    {'name': 'stim/scrambled/corn/corn(4).png', 'path': 'stim/scrambled/corn/corn(4).png'},
    {'name': 'stim/scrambled/corn/corn(5).png', 'path': 'stim/scrambled/corn/corn(5).png'},
    {'name': 'stim/scrambled/corn/corn(6).png', 'path': 'stim/scrambled/corn/corn(6).png'},
    {'name': 'stim/scrambled/corn/corn(7).png', 'path': 'stim/scrambled/corn/corn(7).png'},
    {'name': 'stim/scrambled/corn/corn(8).png', 'path': 'stim/scrambled/corn/corn(8).png'},
    {'name': 'stim/scrambled/corn/corn(9).png', 'path': 'stim/scrambled/corn/corn(9).png'},
    {'name': 'stim/scrambled/corn/corn(10).png', 'path': 'stim/scrambled/corn/corn(10).png'},
    {'name': 'stim/scrambled/cat/cat(1).png', 'path': 'stim/scrambled/cat/cat(1).png'},
    {'name': 'stim/scrambled/cat/cat(2).png', 'path': 'stim/scrambled/cat/cat(2).png'},
    {'name': 'stim/scrambled/cat/cat(3).png', 'path': 'stim/scrambled/cat/cat(3).png'},
    {'name': 'stim/scrambled/cat/cat(4).png', 'path': 'stim/scrambled/cat/cat(4).png'},
    {'name': 'stim/scrambled/cat/cat(5).png', 'path': 'stim/scrambled/cat/cat(5).png'},
    {'name': 'stim/scrambled/cat/cat(6).png', 'path': 'stim/scrambled/cat/cat(6).png'},
    {'name': 'stim/scrambled/cat/cat(7).png', 'path': 'stim/scrambled/cat/cat(7).png'},
    {'name': 'stim/scrambled/cat/cat(8).png', 'path': 'stim/scrambled/cat/cat(8).png'},
    {'name': 'stim/scrambled/cat/cat(9).png', 'path': 'stim/scrambled/cat/cat(9).png'},
    {'name': 'stim/scrambled/cat/cat(10).png', 'path': 'stim/scrambled/cat/cat(10).png'},
    {'name': 'stim/scrambled/car/car(1).png', 'path': 'stim/scrambled/car/car(1).png'},
    {'name': 'stim/scrambled/car/car(2).png', 'path': 'stim/scrambled/car/car(2).png'},
    {'name': 'stim/scrambled/car/car(3).png', 'path': 'stim/scrambled/car/car(3).png'},
    {'name': 'stim/scrambled/car/car(4).png', 'path': 'stim/scrambled/car/car(4).png'},
    {'name': 'stim/scrambled/car/car(5).png', 'path': 'stim/scrambled/car/car(5).png'},
    {'name': 'stim/scrambled/car/car(6).png', 'path': 'stim/scrambled/car/car(6).png'},
    {'name': 'stim/scrambled/car/car(7).png', 'path': 'stim/scrambled/car/car(7).png'},
    {'name': 'stim/scrambled/car/car(8).png', 'path': 'stim/scrambled/car/car(8).png'},
    {'name': 'stim/scrambled/car/car(9).png', 'path': 'stim/scrambled/car/car(9).png'},
    {'name': 'stim/scrambled/car/car(10).png', 'path': 'stim/scrambled/car/car(10).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(1).png', 'path': 'stim/scrambled/butterfly/butterfly(1).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(2).png', 'path': 'stim/scrambled/butterfly/butterfly(2).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(3).png', 'path': 'stim/scrambled/butterfly/butterfly(3).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(4).png', 'path': 'stim/scrambled/butterfly/butterfly(4).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(5).png', 'path': 'stim/scrambled/butterfly/butterfly(5).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(6).png', 'path': 'stim/scrambled/butterfly/butterfly(6).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(7).png', 'path': 'stim/scrambled/butterfly/butterfly(7).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(8).png', 'path': 'stim/scrambled/butterfly/butterfly(8).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(9).png', 'path': 'stim/scrambled/butterfly/butterfly(9).png'},
    {'name': 'stim/scrambled/butterfly/butterfly(10).png', 'path': 'stim/scrambled/butterfly/butterfly(10).png'},
    {'name': 'stim/scrambled/bread/bread(1).png', 'path': 'stim/scrambled/bread/bread(1).png'},
    {'name': 'stim/scrambled/bread/bread(2).png', 'path': 'stim/scrambled/bread/bread(2).png'},
    {'name': 'stim/scrambled/bread/bread(3).png', 'path': 'stim/scrambled/bread/bread(3).png'},
    {'name': 'stim/scrambled/bread/bread(4).png', 'path': 'stim/scrambled/bread/bread(4).png'},
    {'name': 'stim/scrambled/bread/bread(5).png', 'path': 'stim/scrambled/bread/bread(5).png'},
    {'name': 'stim/scrambled/bread/bread(6).png', 'path': 'stim/scrambled/bread/bread(6).png'},
    {'name': 'stim/scrambled/bread/bread(7).png', 'path': 'stim/scrambled/bread/bread(7).png'},
    {'name': 'stim/scrambled/bread/bread(8).png', 'path': 'stim/scrambled/bread/bread(8).png'},
    {'name': 'stim/scrambled/bread/bread(9).png', 'path': 'stim/scrambled/bread/bread(9).png'},
    {'name': 'stim/scrambled/bread/bread(10).png', 'path': 'stim/scrambled/bread/bread(10).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(1).png', 'path': 'stim/scrambled/binoculars/binoculars(1).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(2).png', 'path': 'stim/scrambled/binoculars/binoculars(2).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(3).png', 'path': 'stim/scrambled/binoculars/binoculars(3).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(4).png', 'path': 'stim/scrambled/binoculars/binoculars(4).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(5).png', 'path': 'stim/scrambled/binoculars/binoculars(5).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(6).png', 'path': 'stim/scrambled/binoculars/binoculars(6).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(7).png', 'path': 'stim/scrambled/binoculars/binoculars(7).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(8).png', 'path': 'stim/scrambled/binoculars/binoculars(8).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(9).png', 'path': 'stim/scrambled/binoculars/binoculars(9).png'},
    {'name': 'stim/scrambled/binoculars/binoculars(10).png', 'path': 'stim/scrambled/binoculars/binoculars(10).png'},
    {'name': 'stim/scrambled/bear/bear(1).png', 'path': 'stim/scrambled/bear/bear(1).png'},
    {'name': 'stim/scrambled/bear/bear(2).png', 'path': 'stim/scrambled/bear/bear(2).png'},
    {'name': 'stim/scrambled/bear/bear(3).png', 'path': 'stim/scrambled/bear/bear(3).png'},
    {'name': 'stim/scrambled/bear/bear(4).png', 'path': 'stim/scrambled/bear/bear(4).png'},
    {'name': 'stim/scrambled/bear/bear(5).png', 'path': 'stim/scrambled/bear/bear(5).png'},
    {'name': 'stim/scrambled/bear/bear(6).png', 'path': 'stim/scrambled/bear/bear(6).png'},
    {'name': 'stim/scrambled/bear/bear(7).png', 'path': 'stim/scrambled/bear/bear(7).png'},
    {'name': 'stim/scrambled/bear/bear(8).png', 'path': 'stim/scrambled/bear/bear(8).png'},
    {'name': 'stim/scrambled/bear/bear(9).png', 'path': 'stim/scrambled/bear/bear(9).png'},
    {'name': 'stim/scrambled/bear/bear(10).png', 'path': 'stim/scrambled/bear/bear(10).png'},
    {'name': 'stim/scrambled/avocado/avocado(1).png', 'path': 'stim/scrambled/avocado/avocado(1).png'},
    {'name': 'stim/scrambled/avocado/avocado(2).png', 'path': 'stim/scrambled/avocado/avocado(2).png'},
    {'name': 'stim/scrambled/avocado/avocado(3).png', 'path': 'stim/scrambled/avocado/avocado(3).png'},
    {'name': 'stim/scrambled/avocado/avocado(4).png', 'path': 'stim/scrambled/avocado/avocado(4).png'},
    {'name': 'stim/scrambled/avocado/avocado(5).png', 'path': 'stim/scrambled/avocado/avocado(5).png'},
    {'name': 'stim/scrambled/avocado/avocado(6).png', 'path': 'stim/scrambled/avocado/avocado(6).png'},
    {'name': 'stim/scrambled/avocado/avocado(7).png', 'path': 'stim/scrambled/avocado/avocado(7).png'},
    {'name': 'stim/scrambled/avocado/avocado(8).png', 'path': 'stim/scrambled/avocado/avocado(8).png'},
    {'name': 'stim/scrambled/avocado/avocado(9).png', 'path': 'stim/scrambled/avocado/avocado(9).png'},
    {'name': 'stim/scrambled/avocado/avocado(10).png', 'path': 'stim/scrambled/avocado/avocado(10).png'},
    {'name': 'stim/scrambled/apple/apple(1).png', 'path': 'stim/scrambled/apple/apple(1).png'},
    {'name': 'stim/scrambled/apple/apple(2).png', 'path': 'stim/scrambled/apple/apple(2).png'},
    {'name': 'stim/scrambled/apple/apple(3).png', 'path': 'stim/scrambled/apple/apple(3).png'},
    {'name': 'stim/scrambled/apple/apple(4).png', 'path': 'stim/scrambled/apple/apple(4).png'},
    {'name': 'stim/scrambled/apple/apple(5).png', 'path': 'stim/scrambled/apple/apple(5).png'},
    {'name': 'stim/scrambled/apple/apple(6).png', 'path': 'stim/scrambled/apple/apple(6).png'},
    {'name': 'stim/scrambled/apple/apple(7).png', 'path': 'stim/scrambled/apple/apple(7).png'},
    {'name': 'stim/scrambled/apple/apple(8).png', 'path': 'stim/scrambled/apple/apple(8).png'},
    {'name': 'stim/scrambled/apple/apple(9).png', 'path': 'stim/scrambled/apple/apple(9).png'},
    {'name': 'stim/scrambled/apple/apple(10).png', 'path': 'stim/scrambled/apple/apple(10).png'},
    {'name': 'stim/scrambled/airplane/airplane(1).png', 'path': 'stim/scrambled/airplane/airplane(1).png'},
    {'name': 'stim/scrambled/airplane/airplane(2).png', 'path': 'stim/scrambled/airplane/airplane(2).png'},
    {'name': 'stim/scrambled/airplane/airplane(3).png', 'path': 'stim/scrambled/airplane/airplane(3).png'},
    {'name': 'stim/scrambled/airplane/airplane(4).png', 'path': 'stim/scrambled/airplane/airplane(4).png'},
    {'name': 'stim/scrambled/airplane/airplane(5).png', 'path': 'stim/scrambled/airplane/airplane(5).png'},
    {'name': 'stim/scrambled/airplane/airplane(6).png', 'path': 'stim/scrambled/airplane/airplane(6).png'},
    {'name': 'stim/scrambled/airplane/airplane(7).png', 'path': 'stim/scrambled/airplane/airplane(7).png'},
    {'name': 'stim/scrambled/airplane/airplane(8).png', 'path': 'stim/scrambled/airplane/airplane(8).png'},
    {'name': 'stim/scrambled/airplane/airplane(9).png', 'path': 'stim/scrambled/airplane/airplane(9).png'},
    {'name': 'stim/scrambled/airplane/airplane(10).png', 'path': 'stim/scrambled/airplane/airplane(10).png'},
    {'name': 'stim/practice_stim/truck/truck(1).JPEG', 'path': 'stim/practice_stim/truck/truck(1).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(2).JPEG', 'path': 'stim/practice_stim/truck/truck(2).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(3).JPEG', 'path': 'stim/practice_stim/truck/truck(3).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(4).JPEG', 'path': 'stim/practice_stim/truck/truck(4).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(5).JPEG', 'path': 'stim/practice_stim/truck/truck(5).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(6).JPEG', 'path': 'stim/practice_stim/truck/truck(6).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(7).JPEG', 'path': 'stim/practice_stim/truck/truck(7).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(8).JPEG', 'path': 'stim/practice_stim/truck/truck(8).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(9).JPEG', 'path': 'stim/practice_stim/truck/truck(9).JPEG'},
    {'name': 'stim/practice_stim/truck/truck(10).JPEG', 'path': 'stim/practice_stim/truck/truck(10).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(1).JPEG', 'path': 'stim/practice_stim/tree/tree(1).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(2).JPEG', 'path': 'stim/practice_stim/tree/tree(2).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(3).JPEG', 'path': 'stim/practice_stim/tree/tree(3).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(4).JPEG', 'path': 'stim/practice_stim/tree/tree(4).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(5).JPEG', 'path': 'stim/practice_stim/tree/tree(5).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(6).JPEG', 'path': 'stim/practice_stim/tree/tree(6).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(7).JPEG', 'path': 'stim/practice_stim/tree/tree(7).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(8).JPEG', 'path': 'stim/practice_stim/tree/tree(8).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(9).JPEG', 'path': 'stim/practice_stim/tree/tree(9).JPEG'},
    {'name': 'stim/practice_stim/tree/tree(10).JPEG', 'path': 'stim/practice_stim/tree/tree(10).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(1).JPEG', 'path': 'stim/practice_stim/leaf/leaf(1).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(2).JPEG', 'path': 'stim/practice_stim/leaf/leaf(2).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(3).JPEG', 'path': 'stim/practice_stim/leaf/leaf(3).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(4).JPEG', 'path': 'stim/practice_stim/leaf/leaf(4).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(5).JPEG', 'path': 'stim/practice_stim/leaf/leaf(5).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(6).JPEG', 'path': 'stim/practice_stim/leaf/leaf(6).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(7).JPEG', 'path': 'stim/practice_stim/leaf/leaf(7).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(8).JPEG', 'path': 'stim/practice_stim/leaf/leaf(8).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(9).JPEG', 'path': 'stim/practice_stim/leaf/leaf(9).JPEG'},
    {'name': 'stim/practice_stim/leaf/leaf(10).JPEG', 'path': 'stim/practice_stim/leaf/leaf(10).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(1).JPEG', 'path': 'stim/practice_stim/hand/hand(1).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(2).JPEG', 'path': 'stim/practice_stim/hand/hand(2).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(3).JPEG', 'path': 'stim/practice_stim/hand/hand(3).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(4).JPEG', 'path': 'stim/practice_stim/hand/hand(4).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(5).JPEG', 'path': 'stim/practice_stim/hand/hand(5).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(6).JPEG', 'path': 'stim/practice_stim/hand/hand(6).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(7).JPEG', 'path': 'stim/practice_stim/hand/hand(7).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(8).JPEG', 'path': 'stim/practice_stim/hand/hand(8).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(9).JPEG', 'path': 'stim/practice_stim/hand/hand(9).JPEG'},
    {'name': 'stim/practice_stim/hand/hand(10).JPEG', 'path': 'stim/practice_stim/hand/hand(10).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(1).JPEG', 'path': 'stim/practice_stim/flower/flower(1).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(2).JPEG', 'path': 'stim/practice_stim/flower/flower(2).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(3).JPEG', 'path': 'stim/practice_stim/flower/flower(3).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(4).JPEG', 'path': 'stim/practice_stim/flower/flower(4).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(5).JPEG', 'path': 'stim/practice_stim/flower/flower(5).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(6).JPEG', 'path': 'stim/practice_stim/flower/flower(6).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(7).JPEG', 'path': 'stim/practice_stim/flower/flower(7).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(8).JPEG', 'path': 'stim/practice_stim/flower/flower(8).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(9).JPEG', 'path': 'stim/practice_stim/flower/flower(9).JPEG'},
    {'name': 'stim/practice_stim/flower/flower(10).JPEG', 'path': 'stim/practice_stim/flower/flower(10).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(1).JPEG', 'path': 'stim/practice_stim/duck/duck(1).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(2).JPEG', 'path': 'stim/practice_stim/duck/duck(2).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(3).JPEG', 'path': 'stim/practice_stim/duck/duck(3).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(4).JPEG', 'path': 'stim/practice_stim/duck/duck(4).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(5).JPEG', 'path': 'stim/practice_stim/duck/duck(5).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(6).JPEG', 'path': 'stim/practice_stim/duck/duck(6).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(7).JPEG', 'path': 'stim/practice_stim/duck/duck(7).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(8).JPEG', 'path': 'stim/practice_stim/duck/duck(8).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(9).JPEG', 'path': 'stim/practice_stim/duck/duck(9).JPEG'},
    {'name': 'stim/practice_stim/duck/duck(10).JPEG', 'path': 'stim/practice_stim/duck/duck(10).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(1).JPEG', 'path': 'stim/practice_stim/dog/dog(1).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(2).JPEG', 'path': 'stim/practice_stim/dog/dog(2).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(3).JPEG', 'path': 'stim/practice_stim/dog/dog(3).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(4).JPEG', 'path': 'stim/practice_stim/dog/dog(4).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(5).JPEG', 'path': 'stim/practice_stim/dog/dog(5).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(6).JPEG', 'path': 'stim/practice_stim/dog/dog(6).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(7).JPEG', 'path': 'stim/practice_stim/dog/dog(7).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(8).JPEG', 'path': 'stim/practice_stim/dog/dog(8).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(9).JPEG', 'path': 'stim/practice_stim/dog/dog(9).JPEG'},
    {'name': 'stim/practice_stim/dog/dog(10).JPEG', 'path': 'stim/practice_stim/dog/dog(10).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(1).JPEG', 'path': 'stim/practice_stim/chair/chair(1).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(2).JPEG', 'path': 'stim/practice_stim/chair/chair(2).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(3).JPEG', 'path': 'stim/practice_stim/chair/chair(3).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(4).JPEG', 'path': 'stim/practice_stim/chair/chair(4).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(5).JPEG', 'path': 'stim/practice_stim/chair/chair(5).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(6).JPEG', 'path': 'stim/practice_stim/chair/chair(6).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(7).JPEG', 'path': 'stim/practice_stim/chair/chair(7).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(8).JPEG', 'path': 'stim/practice_stim/chair/chair(8).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(9).JPEG', 'path': 'stim/practice_stim/chair/chair(9).JPEG'},
    {'name': 'stim/practice_stim/chair/chair(10).JPEG', 'path': 'stim/practice_stim/chair/chair(10).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(1).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(1).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(2).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(2).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(3).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(3).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(4).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(4).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(5).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(5).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(6).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(6).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(7).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(7).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(8).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(8).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(9).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(9).JPEG'},
    {'name': 'stim/practice_stim/bicycle/bicycle(10).JPEG', 'path': 'stim/practice_stim/bicycle/bicycle(10).JPEG'},
    {'name': 'stim/natural/prac_image.png', 'path': 'stim/natural/prac_image.png'},
    {'name': 'stim/natural/train/train(1).png', 'path': 'stim/natural/train/train(1).png'},
    {'name': 'stim/natural/train/train(2).png', 'path': 'stim/natural/train/train(2).png'},
    {'name': 'stim/natural/train/train(3).png', 'path': 'stim/natural/train/train(3).png'},
    {'name': 'stim/natural/train/train(4).png', 'path': 'stim/natural/train/train(4).png'},
    {'name': 'stim/natural/train/train(5).png', 'path': 'stim/natural/train/train(5).png'},
    {'name': 'stim/natural/train/train(6).png', 'path': 'stim/natural/train/train(6).png'},
    {'name': 'stim/natural/train/train(7).png', 'path': 'stim/natural/train/train(7).png'},
    {'name': 'stim/natural/train/train(8).png', 'path': 'stim/natural/train/train(8).png'},
    {'name': 'stim/natural/train/train(9).png', 'path': 'stim/natural/train/train(9).png'},
    {'name': 'stim/natural/train/train(10).png', 'path': 'stim/natural/train/train(10).png'},
    {'name': 'stim/natural/snail/snail(1).png', 'path': 'stim/natural/snail/snail(1).png'},
    {'name': 'stim/natural/snail/snail(2).png', 'path': 'stim/natural/snail/snail(2).png'},
    {'name': 'stim/natural/snail/snail(3).png', 'path': 'stim/natural/snail/snail(3).png'},
    {'name': 'stim/natural/snail/snail(4).png', 'path': 'stim/natural/snail/snail(4).png'},
    {'name': 'stim/natural/snail/snail(5).png', 'path': 'stim/natural/snail/snail(5).png'},
    {'name': 'stim/natural/snail/snail(6).png', 'path': 'stim/natural/snail/snail(6).png'},
    {'name': 'stim/natural/snail/snail(7).png', 'path': 'stim/natural/snail/snail(7).png'},
    {'name': 'stim/natural/snail/snail(8).png', 'path': 'stim/natural/snail/snail(8).png'},
    {'name': 'stim/natural/snail/snail(9).png', 'path': 'stim/natural/snail/snail(9).png'},
    {'name': 'stim/natural/snail/snail(10).png', 'path': 'stim/natural/snail/snail(10).png'},
    {'name': 'stim/natural/pineapple/pineapple(1).png', 'path': 'stim/natural/pineapple/pineapple(1).png'},
    {'name': 'stim/natural/pineapple/pineapple(2).png', 'path': 'stim/natural/pineapple/pineapple(2).png'},
    {'name': 'stim/natural/pineapple/pineapple(3).png', 'path': 'stim/natural/pineapple/pineapple(3).png'},
    {'name': 'stim/natural/pineapple/pineapple(4).png', 'path': 'stim/natural/pineapple/pineapple(4).png'},
    {'name': 'stim/natural/pineapple/pineapple(5).png', 'path': 'stim/natural/pineapple/pineapple(5).png'},
    {'name': 'stim/natural/pineapple/pineapple(6).png', 'path': 'stim/natural/pineapple/pineapple(6).png'},
    {'name': 'stim/natural/pineapple/pineapple(7).png', 'path': 'stim/natural/pineapple/pineapple(7).png'},
    {'name': 'stim/natural/pineapple/pineapple(8).png', 'path': 'stim/natural/pineapple/pineapple(8).png'},
    {'name': 'stim/natural/pineapple/pineapple(9).png', 'path': 'stim/natural/pineapple/pineapple(9).png'},
    {'name': 'stim/natural/pineapple/pineapple(10).png', 'path': 'stim/natural/pineapple/pineapple(10).png'},
    {'name': 'stim/natural/mushroom/mushroom(1).png', 'path': 'stim/natural/mushroom/mushroom(1).png'},
    {'name': 'stim/natural/mushroom/mushroom(2).png', 'path': 'stim/natural/mushroom/mushroom(2).png'},
    {'name': 'stim/natural/mushroom/mushroom(3).png', 'path': 'stim/natural/mushroom/mushroom(3).png'},
    {'name': 'stim/natural/mushroom/mushroom(4).png', 'path': 'stim/natural/mushroom/mushroom(4).png'},
    {'name': 'stim/natural/mushroom/mushroom(5).png', 'path': 'stim/natural/mushroom/mushroom(5).png'},
    {'name': 'stim/natural/mushroom/mushroom(6).png', 'path': 'stim/natural/mushroom/mushroom(6).png'},
    {'name': 'stim/natural/mushroom/mushroom(7).png', 'path': 'stim/natural/mushroom/mushroom(7).png'},
    {'name': 'stim/natural/mushroom/mushroom(8).png', 'path': 'stim/natural/mushroom/mushroom(8).png'},
    {'name': 'stim/natural/mushroom/mushroom(9).png', 'path': 'stim/natural/mushroom/mushroom(9).png'},
    {'name': 'stim/natural/mushroom/mushroom(10).png', 'path': 'stim/natural/mushroom/mushroom(10).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(1).png', 'path': 'stim/natural/lawnmower/lawnmower(1).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(2).png', 'path': 'stim/natural/lawnmower/lawnmower(2).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(3).png', 'path': 'stim/natural/lawnmower/lawnmower(3).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(4).png', 'path': 'stim/natural/lawnmower/lawnmower(4).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(5).png', 'path': 'stim/natural/lawnmower/lawnmower(5).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(6).png', 'path': 'stim/natural/lawnmower/lawnmower(6).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(7).png', 'path': 'stim/natural/lawnmower/lawnmower(7).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(8).png', 'path': 'stim/natural/lawnmower/lawnmower(8).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(9).png', 'path': 'stim/natural/lawnmower/lawnmower(9).png'},
    {'name': 'stim/natural/lawnmower/lawnmower(10).png', 'path': 'stim/natural/lawnmower/lawnmower(10).png'},
    {'name': 'stim/natural/house/house(1).png', 'path': 'stim/natural/house/house(1).png'},
    {'name': 'stim/natural/house/house(2).png', 'path': 'stim/natural/house/house(2).png'},
    {'name': 'stim/natural/house/house(3).png', 'path': 'stim/natural/house/house(3).png'},
    {'name': 'stim/natural/house/house(4).png', 'path': 'stim/natural/house/house(4).png'},
    {'name': 'stim/natural/house/house(5).png', 'path': 'stim/natural/house/house(5).png'},
    {'name': 'stim/natural/house/house(6).png', 'path': 'stim/natural/house/house(6).png'},
    {'name': 'stim/natural/house/house(7).png', 'path': 'stim/natural/house/house(7).png'},
    {'name': 'stim/natural/house/house(8).png', 'path': 'stim/natural/house/house(8).png'},
    {'name': 'stim/natural/house/house(9).png', 'path': 'stim/natural/house/house(9).png'},
    {'name': 'stim/natural/house/house(10).png', 'path': 'stim/natural/house/house(10).png'},
    {'name': 'stim/natural/dog/dog(1).png', 'path': 'stim/natural/dog/dog(1).png'},
    {'name': 'stim/natural/dog/dog(2).png', 'path': 'stim/natural/dog/dog(2).png'},
    {'name': 'stim/natural/dog/dog(3).png', 'path': 'stim/natural/dog/dog(3).png'},
    {'name': 'stim/natural/dog/dog(4).png', 'path': 'stim/natural/dog/dog(4).png'},
    {'name': 'stim/natural/dog/dog(5).png', 'path': 'stim/natural/dog/dog(5).png'},
    {'name': 'stim/natural/dog/dog(6).png', 'path': 'stim/natural/dog/dog(6).png'},
    {'name': 'stim/natural/dog/dog(7).png', 'path': 'stim/natural/dog/dog(7).png'},
    {'name': 'stim/natural/dog/dog(8).png', 'path': 'stim/natural/dog/dog(8).png'},
    {'name': 'stim/natural/dog/dog(9).png', 'path': 'stim/natural/dog/dog(9).png'},
    {'name': 'stim/natural/dog/dog(10).png', 'path': 'stim/natural/dog/dog(10).png'},
    {'name': 'stim/natural/cow/cow(1).png', 'path': 'stim/natural/cow/cow(1).png'},
    {'name': 'stim/natural/cow/cow(2).png', 'path': 'stim/natural/cow/cow(2).png'},
    {'name': 'stim/natural/cow/cow(3).png', 'path': 'stim/natural/cow/cow(3).png'},
    {'name': 'stim/natural/cow/cow(4).png', 'path': 'stim/natural/cow/cow(4).png'},
    {'name': 'stim/natural/cow/cow(5).png', 'path': 'stim/natural/cow/cow(5).png'},
    {'name': 'stim/natural/cow/cow(6).png', 'path': 'stim/natural/cow/cow(6).png'},
    {'name': 'stim/natural/cow/cow(7).png', 'path': 'stim/natural/cow/cow(7).png'},
    {'name': 'stim/natural/cow/cow(8).png', 'path': 'stim/natural/cow/cow(8).png'},
    {'name': 'stim/natural/cow/cow(9).png', 'path': 'stim/natural/cow/cow(9).png'},
    {'name': 'stim/natural/cow/cow(10).png', 'path': 'stim/natural/cow/cow(10).png'},
    {'name': 'stim/natural/corn/corn(1).png', 'path': 'stim/natural/corn/corn(1).png'},
    {'name': 'stim/natural/corn/corn(2).png', 'path': 'stim/natural/corn/corn(2).png'},
    {'name': 'stim/natural/corn/corn(3).png', 'path': 'stim/natural/corn/corn(3).png'},
    {'name': 'stim/natural/corn/corn(4).png', 'path': 'stim/natural/corn/corn(4).png'},
    {'name': 'stim/natural/corn/corn(5).png', 'path': 'stim/natural/corn/corn(5).png'},
    {'name': 'stim/natural/corn/corn(6).png', 'path': 'stim/natural/corn/corn(6).png'},
    {'name': 'stim/natural/corn/corn(7).png', 'path': 'stim/natural/corn/corn(7).png'},
    {'name': 'stim/natural/corn/corn(8).png', 'path': 'stim/natural/corn/corn(8).png'},
    {'name': 'stim/natural/corn/corn(9).png', 'path': 'stim/natural/corn/corn(9).png'},
    {'name': 'stim/natural/corn/corn(10).png', 'path': 'stim/natural/corn/corn(10).png'},
    {'name': 'stim/natural/cat/cat(1).png', 'path': 'stim/natural/cat/cat(1).png'},
    {'name': 'stim/natural/cat/cat(2).png', 'path': 'stim/natural/cat/cat(2).png'},
    {'name': 'stim/natural/cat/cat(3).png', 'path': 'stim/natural/cat/cat(3).png'},
    {'name': 'stim/natural/cat/cat(4).png', 'path': 'stim/natural/cat/cat(4).png'},
    {'name': 'stim/natural/cat/cat(5).png', 'path': 'stim/natural/cat/cat(5).png'},
    {'name': 'stim/natural/cat/cat(6).png', 'path': 'stim/natural/cat/cat(6).png'},
    {'name': 'stim/natural/cat/cat(7).png', 'path': 'stim/natural/cat/cat(7).png'},
    {'name': 'stim/natural/cat/cat(8).png', 'path': 'stim/natural/cat/cat(8).png'},
    {'name': 'stim/natural/cat/cat(9).png', 'path': 'stim/natural/cat/cat(9).png'},
    {'name': 'stim/natural/cat/cat(10).png', 'path': 'stim/natural/cat/cat(10).png'},
    {'name': 'stim/natural/car/car(1).png', 'path': 'stim/natural/car/car(1).png'},
    {'name': 'stim/natural/car/car(2).png', 'path': 'stim/natural/car/car(2).png'},
    {'name': 'stim/natural/car/car(3).png', 'path': 'stim/natural/car/car(3).png'},
    {'name': 'stim/natural/car/car(4).png', 'path': 'stim/natural/car/car(4).png'},
    {'name': 'stim/natural/car/car(5).png', 'path': 'stim/natural/car/car(5).png'},
    {'name': 'stim/natural/car/car(6).png', 'path': 'stim/natural/car/car(6).png'},
    {'name': 'stim/natural/car/car(7).png', 'path': 'stim/natural/car/car(7).png'},
    {'name': 'stim/natural/car/car(8).png', 'path': 'stim/natural/car/car(8).png'},
    {'name': 'stim/natural/car/car(9).png', 'path': 'stim/natural/car/car(9).png'},
    {'name': 'stim/natural/car/car(10).png', 'path': 'stim/natural/car/car(10).png'},
    {'name': 'stim/natural/butterfly/butterfly(1).png', 'path': 'stim/natural/butterfly/butterfly(1).png'},
    {'name': 'stim/natural/butterfly/butterfly(2).png', 'path': 'stim/natural/butterfly/butterfly(2).png'},
    {'name': 'stim/natural/butterfly/butterfly(3).png', 'path': 'stim/natural/butterfly/butterfly(3).png'},
    {'name': 'stim/natural/butterfly/butterfly(4).png', 'path': 'stim/natural/butterfly/butterfly(4).png'},
    {'name': 'stim/natural/butterfly/butterfly(5).png', 'path': 'stim/natural/butterfly/butterfly(5).png'},
    {'name': 'stim/natural/butterfly/butterfly(6).png', 'path': 'stim/natural/butterfly/butterfly(6).png'},
    {'name': 'stim/natural/butterfly/butterfly(7).png', 'path': 'stim/natural/butterfly/butterfly(7).png'},
    {'name': 'stim/natural/butterfly/butterfly(8).png', 'path': 'stim/natural/butterfly/butterfly(8).png'},
    {'name': 'stim/natural/butterfly/butterfly(9).png', 'path': 'stim/natural/butterfly/butterfly(9).png'},
    {'name': 'stim/natural/butterfly/butterfly(10).png', 'path': 'stim/natural/butterfly/butterfly(10).png'},
    {'name': 'stim/natural/bread/bread(1).png', 'path': 'stim/natural/bread/bread(1).png'},
    {'name': 'stim/natural/bread/bread(2).png', 'path': 'stim/natural/bread/bread(2).png'},
    {'name': 'stim/natural/bread/bread(3).png', 'path': 'stim/natural/bread/bread(3).png'},
    {'name': 'stim/natural/bread/bread(4).png', 'path': 'stim/natural/bread/bread(4).png'},
    {'name': 'stim/natural/bread/bread(5).png', 'path': 'stim/natural/bread/bread(5).png'},
    {'name': 'stim/natural/bread/bread(6).png', 'path': 'stim/natural/bread/bread(6).png'},
    {'name': 'stim/natural/bread/bread(7).png', 'path': 'stim/natural/bread/bread(7).png'},
    {'name': 'stim/natural/bread/bread(8).png', 'path': 'stim/natural/bread/bread(8).png'},
    {'name': 'stim/natural/bread/bread(9).png', 'path': 'stim/natural/bread/bread(9).png'},
    {'name': 'stim/natural/bread/bread(10).png', 'path': 'stim/natural/bread/bread(10).png'},
    {'name': 'stim/natural/binoculars/binoculars(1).png', 'path': 'stim/natural/binoculars/binoculars(1).png'},
    {'name': 'stim/natural/binoculars/binoculars(2).png', 'path': 'stim/natural/binoculars/binoculars(2).png'},
    {'name': 'stim/natural/binoculars/binoculars(3).png', 'path': 'stim/natural/binoculars/binoculars(3).png'},
    {'name': 'stim/natural/binoculars/binoculars(4).png', 'path': 'stim/natural/binoculars/binoculars(4).png'},
    {'name': 'stim/natural/binoculars/binoculars(5).png', 'path': 'stim/natural/binoculars/binoculars(5).png'},
    {'name': 'stim/natural/binoculars/binoculars(6).png', 'path': 'stim/natural/binoculars/binoculars(6).png'},
    {'name': 'stim/natural/binoculars/binoculars(7).png', 'path': 'stim/natural/binoculars/binoculars(7).png'},
    {'name': 'stim/natural/binoculars/binoculars(8).png', 'path': 'stim/natural/binoculars/binoculars(8).png'},
    {'name': 'stim/natural/binoculars/binoculars(9).png', 'path': 'stim/natural/binoculars/binoculars(9).png'},
    {'name': 'stim/natural/binoculars/binoculars(10).png', 'path': 'stim/natural/binoculars/binoculars(10).png'},
    {'name': 'stim/natural/bear/bear(1).png', 'path': 'stim/natural/bear/bear(1).png'},
    {'name': 'stim/natural/bear/bear(2).png', 'path': 'stim/natural/bear/bear(2).png'},
    {'name': 'stim/natural/bear/bear(3).png', 'path': 'stim/natural/bear/bear(3).png'},
    {'name': 'stim/natural/bear/bear(4).png', 'path': 'stim/natural/bear/bear(4).png'},
    {'name': 'stim/natural/bear/bear(5).png', 'path': 'stim/natural/bear/bear(5).png'},
    {'name': 'stim/natural/bear/bear(6).png', 'path': 'stim/natural/bear/bear(6).png'},
    {'name': 'stim/natural/bear/bear(7).png', 'path': 'stim/natural/bear/bear(7).png'},
    {'name': 'stim/natural/bear/bear(8).png', 'path': 'stim/natural/bear/bear(8).png'},
    {'name': 'stim/natural/bear/bear(9).png', 'path': 'stim/natural/bear/bear(9).png'},
    {'name': 'stim/natural/bear/bear(10).png', 'path': 'stim/natural/bear/bear(10).png'},
    {'name': 'stim/natural/avocado/avocado(1).png', 'path': 'stim/natural/avocado/avocado(1).png'},
    {'name': 'stim/natural/avocado/avocado(2).png', 'path': 'stim/natural/avocado/avocado(2).png'},
    {'name': 'stim/natural/avocado/avocado(3).png', 'path': 'stim/natural/avocado/avocado(3).png'},
    {'name': 'stim/natural/avocado/avocado(4).png', 'path': 'stim/natural/avocado/avocado(4).png'},
    {'name': 'stim/natural/avocado/avocado(5).png', 'path': 'stim/natural/avocado/avocado(5).png'},
    {'name': 'stim/natural/avocado/avocado(6).png', 'path': 'stim/natural/avocado/avocado(6).png'},
    {'name': 'stim/natural/avocado/avocado(7).png', 'path': 'stim/natural/avocado/avocado(7).png'},
    {'name': 'stim/natural/avocado/avocado(8).png', 'path': 'stim/natural/avocado/avocado(8).png'},
    {'name': 'stim/natural/avocado/avocado(9).png', 'path': 'stim/natural/avocado/avocado(9).png'},
    {'name': 'stim/natural/avocado/avocado(10).png', 'path': 'stim/natural/avocado/avocado(10).png'},
    {'name': 'stim/natural/apple/apple(1).png', 'path': 'stim/natural/apple/apple(1).png'},
    {'name': 'stim/natural/apple/apple(2).png', 'path': 'stim/natural/apple/apple(2).png'},
    {'name': 'stim/natural/apple/apple(3).png', 'path': 'stim/natural/apple/apple(3).png'},
    {'name': 'stim/natural/apple/apple(4).png', 'path': 'stim/natural/apple/apple(4).png'},
    {'name': 'stim/natural/apple/apple(5).png', 'path': 'stim/natural/apple/apple(5).png'},
    {'name': 'stim/natural/apple/apple(6).png', 'path': 'stim/natural/apple/apple(6).png'},
    {'name': 'stim/natural/apple/apple(7).png', 'path': 'stim/natural/apple/apple(7).png'},
    {'name': 'stim/natural/apple/apple(8).png', 'path': 'stim/natural/apple/apple(8).png'},
    {'name': 'stim/natural/apple/apple(9).png', 'path': 'stim/natural/apple/apple(9).png'},
    {'name': 'stim/natural/apple/apple(10).png', 'path': 'stim/natural/apple/apple(10).png'},
    {'name': 'stim/natural/airplane/airplane(1).png', 'path': 'stim/natural/airplane/airplane(1).png'},
    {'name': 'stim/natural/airplane/airplane(2).png', 'path': 'stim/natural/airplane/airplane(2).png'},
    {'name': 'stim/natural/airplane/airplane(3).png', 'path': 'stim/natural/airplane/airplane(3).png'},
    {'name': 'stim/natural/airplane/airplane(4).png', 'path': 'stim/natural/airplane/airplane(4).png'},
    {'name': 'stim/natural/airplane/airplane(5).png', 'path': 'stim/natural/airplane/airplane(5).png'},
    {'name': 'stim/natural/airplane/airplane(6).png', 'path': 'stim/natural/airplane/airplane(6).png'},
    {'name': 'stim/natural/airplane/airplane(7).png', 'path': 'stim/natural/airplane/airplane(7).png'},
    {'name': 'stim/natural/airplane/airplane(8).png', 'path': 'stim/natural/airplane/airplane(8).png'},
    {'name': 'stim/natural/airplane/airplane(9).png', 'path': 'stim/natural/airplane/airplane(9).png'},
    {'name': 'stim/natural/airplane/airplane(10).png', 'path': 'stim/natural/airplane/airplane(10).png'},
    {'name': 'stim/line_drawing/prac_image.png', 'path': 'stim/line_drawing/prac_image.png'},
    {'name': 'stim/line_drawing/train/train(1).png', 'path': 'stim/line_drawing/train/train(1).png'},
    {'name': 'stim/line_drawing/train/train(2).png', 'path': 'stim/line_drawing/train/train(2).png'},
    {'name': 'stim/line_drawing/train/train(3).png', 'path': 'stim/line_drawing/train/train(3).png'},
    {'name': 'stim/line_drawing/train/train(4).png', 'path': 'stim/line_drawing/train/train(4).png'},
    {'name': 'stim/line_drawing/train/train(5).png', 'path': 'stim/line_drawing/train/train(5).png'},
    {'name': 'stim/line_drawing/train/train(6).png', 'path': 'stim/line_drawing/train/train(6).png'},
    {'name': 'stim/line_drawing/train/train(7).png', 'path': 'stim/line_drawing/train/train(7).png'},
    {'name': 'stim/line_drawing/train/train(8).png', 'path': 'stim/line_drawing/train/train(8).png'},
    {'name': 'stim/line_drawing/train/train(9).png', 'path': 'stim/line_drawing/train/train(9).png'},
    {'name': 'stim/line_drawing/train/train(10).png', 'path': 'stim/line_drawing/train/train(10).png'},
    {'name': 'stim/line_drawing/snail/snail(1).png', 'path': 'stim/line_drawing/snail/snail(1).png'},
    {'name': 'stim/line_drawing/snail/snail(2).png', 'path': 'stim/line_drawing/snail/snail(2).png'},
    {'name': 'stim/line_drawing/snail/snail(3).png', 'path': 'stim/line_drawing/snail/snail(3).png'},
    {'name': 'stim/line_drawing/snail/snail(4).png', 'path': 'stim/line_drawing/snail/snail(4).png'},
    {'name': 'stim/line_drawing/snail/snail(5).png', 'path': 'stim/line_drawing/snail/snail(5).png'},
    {'name': 'stim/line_drawing/snail/snail(6).png', 'path': 'stim/line_drawing/snail/snail(6).png'},
    {'name': 'stim/line_drawing/snail/snail(7).png', 'path': 'stim/line_drawing/snail/snail(7).png'},
    {'name': 'stim/line_drawing/snail/snail(8).png', 'path': 'stim/line_drawing/snail/snail(8).png'},
    {'name': 'stim/line_drawing/snail/snail(9).png', 'path': 'stim/line_drawing/snail/snail(9).png'},
    {'name': 'stim/line_drawing/snail/snail(10).png', 'path': 'stim/line_drawing/snail/snail(10).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(1).png', 'path': 'stim/line_drawing/pineapple/pineapple(1).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(2).png', 'path': 'stim/line_drawing/pineapple/pineapple(2).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(3).png', 'path': 'stim/line_drawing/pineapple/pineapple(3).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(4).png', 'path': 'stim/line_drawing/pineapple/pineapple(4).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(5).png', 'path': 'stim/line_drawing/pineapple/pineapple(5).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(6).png', 'path': 'stim/line_drawing/pineapple/pineapple(6).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(7).png', 'path': 'stim/line_drawing/pineapple/pineapple(7).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(8).png', 'path': 'stim/line_drawing/pineapple/pineapple(8).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(9).png', 'path': 'stim/line_drawing/pineapple/pineapple(9).png'},
    {'name': 'stim/line_drawing/pineapple/pineapple(10).png', 'path': 'stim/line_drawing/pineapple/pineapple(10).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(1).png', 'path': 'stim/line_drawing/mushroom/mushroom(1).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(2).png', 'path': 'stim/line_drawing/mushroom/mushroom(2).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(3).png', 'path': 'stim/line_drawing/mushroom/mushroom(3).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(4).png', 'path': 'stim/line_drawing/mushroom/mushroom(4).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(5).png', 'path': 'stim/line_drawing/mushroom/mushroom(5).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(6).png', 'path': 'stim/line_drawing/mushroom/mushroom(6).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(7).png', 'path': 'stim/line_drawing/mushroom/mushroom(7).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(8).png', 'path': 'stim/line_drawing/mushroom/mushroom(8).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(9).png', 'path': 'stim/line_drawing/mushroom/mushroom(9).png'},
    {'name': 'stim/line_drawing/mushroom/mushroom(10).png', 'path': 'stim/line_drawing/mushroom/mushroom(10).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(1).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(1).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(2).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(2).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(3).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(3).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(4).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(4).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(5).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(5).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(6).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(6).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(7).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(7).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(8).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(8).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(9).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(9).png'},
    {'name': 'stim/line_drawing/lawnmower/lawnmower(10).png', 'path': 'stim/line_drawing/lawnmower/lawnmower(10).png'},
    {'name': 'stim/line_drawing/house/house(1).png', 'path': 'stim/line_drawing/house/house(1).png'},
    {'name': 'stim/line_drawing/house/house(2).png', 'path': 'stim/line_drawing/house/house(2).png'},
    {'name': 'stim/line_drawing/house/house(3).png', 'path': 'stim/line_drawing/house/house(3).png'},
    {'name': 'stim/line_drawing/house/house(4).png', 'path': 'stim/line_drawing/house/house(4).png'},
    {'name': 'stim/line_drawing/house/house(5).png', 'path': 'stim/line_drawing/house/house(5).png'},
    {'name': 'stim/line_drawing/house/house(6).png', 'path': 'stim/line_drawing/house/house(6).png'},
    {'name': 'stim/line_drawing/house/house(7).png', 'path': 'stim/line_drawing/house/house(7).png'},
    {'name': 'stim/line_drawing/house/house(8).png', 'path': 'stim/line_drawing/house/house(8).png'},
    {'name': 'stim/line_drawing/house/house(9).png', 'path': 'stim/line_drawing/house/house(9).png'},
    {'name': 'stim/line_drawing/house/house(10).png', 'path': 'stim/line_drawing/house/house(10).png'},
    {'name': 'stim/line_drawing/dog/dog(1).png', 'path': 'stim/line_drawing/dog/dog(1).png'},
    {'name': 'stim/line_drawing/dog/dog(2).png', 'path': 'stim/line_drawing/dog/dog(2).png'},
    {'name': 'stim/line_drawing/dog/dog(3).png', 'path': 'stim/line_drawing/dog/dog(3).png'},
    {'name': 'stim/line_drawing/dog/dog(4).png', 'path': 'stim/line_drawing/dog/dog(4).png'},
    {'name': 'stim/line_drawing/dog/dog(5).png', 'path': 'stim/line_drawing/dog/dog(5).png'},
    {'name': 'stim/line_drawing/dog/dog(6).png', 'path': 'stim/line_drawing/dog/dog(6).png'},
    {'name': 'stim/line_drawing/dog/dog(7).png', 'path': 'stim/line_drawing/dog/dog(7).png'},
    {'name': 'stim/line_drawing/dog/dog(8).png', 'path': 'stim/line_drawing/dog/dog(8).png'},
    {'name': 'stim/line_drawing/dog/dog(9).png', 'path': 'stim/line_drawing/dog/dog(9).png'},
    {'name': 'stim/line_drawing/dog/dog(10).png', 'path': 'stim/line_drawing/dog/dog(10).png'},
    {'name': 'stim/line_drawing/cow/cow(1).png', 'path': 'stim/line_drawing/cow/cow(1).png'},
    {'name': 'stim/line_drawing/cow/cow(2).png', 'path': 'stim/line_drawing/cow/cow(2).png'},
    {'name': 'stim/line_drawing/cow/cow(3).png', 'path': 'stim/line_drawing/cow/cow(3).png'},
    {'name': 'stim/line_drawing/cow/cow(4).png', 'path': 'stim/line_drawing/cow/cow(4).png'},
    {'name': 'stim/line_drawing/cow/cow(5).png', 'path': 'stim/line_drawing/cow/cow(5).png'},
    {'name': 'stim/line_drawing/cow/cow(6).png', 'path': 'stim/line_drawing/cow/cow(6).png'},
    {'name': 'stim/line_drawing/cow/cow(7).png', 'path': 'stim/line_drawing/cow/cow(7).png'},
    {'name': 'stim/line_drawing/cow/cow(8).png', 'path': 'stim/line_drawing/cow/cow(8).png'},
    {'name': 'stim/line_drawing/cow/cow(9).png', 'path': 'stim/line_drawing/cow/cow(9).png'},
    {'name': 'stim/line_drawing/cow/cow(10).png', 'path': 'stim/line_drawing/cow/cow(10).png'},
    {'name': 'stim/line_drawing/corn/corn(1).png', 'path': 'stim/line_drawing/corn/corn(1).png'},
    {'name': 'stim/line_drawing/corn/corn(2).png', 'path': 'stim/line_drawing/corn/corn(2).png'},
    {'name': 'stim/line_drawing/corn/corn(3).png', 'path': 'stim/line_drawing/corn/corn(3).png'},
    {'name': 'stim/line_drawing/corn/corn(4).png', 'path': 'stim/line_drawing/corn/corn(4).png'},
    {'name': 'stim/line_drawing/corn/corn(5).png', 'path': 'stim/line_drawing/corn/corn(5).png'},
    {'name': 'stim/line_drawing/corn/corn(6).png', 'path': 'stim/line_drawing/corn/corn(6).png'},
    {'name': 'stim/line_drawing/corn/corn(7).png', 'path': 'stim/line_drawing/corn/corn(7).png'},
    {'name': 'stim/line_drawing/corn/corn(8).png', 'path': 'stim/line_drawing/corn/corn(8).png'},
    {'name': 'stim/line_drawing/corn/corn(9).png', 'path': 'stim/line_drawing/corn/corn(9).png'},
    {'name': 'stim/line_drawing/corn/corn(10).png', 'path': 'stim/line_drawing/corn/corn(10).png'},
    {'name': 'stim/line_drawing/cat/cat(1).png', 'path': 'stim/line_drawing/cat/cat(1).png'},
    {'name': 'stim/line_drawing/cat/cat(2).png', 'path': 'stim/line_drawing/cat/cat(2).png'},
    {'name': 'stim/line_drawing/cat/cat(3).png', 'path': 'stim/line_drawing/cat/cat(3).png'},
    {'name': 'stim/line_drawing/cat/cat(4).png', 'path': 'stim/line_drawing/cat/cat(4).png'},
    {'name': 'stim/line_drawing/cat/cat(5).png', 'path': 'stim/line_drawing/cat/cat(5).png'},
    {'name': 'stim/line_drawing/cat/cat(6).png', 'path': 'stim/line_drawing/cat/cat(6).png'},
    {'name': 'stim/line_drawing/cat/cat(7).png', 'path': 'stim/line_drawing/cat/cat(7).png'},
    {'name': 'stim/line_drawing/cat/cat(8).png', 'path': 'stim/line_drawing/cat/cat(8).png'},
    {'name': 'stim/line_drawing/cat/cat(9).png', 'path': 'stim/line_drawing/cat/cat(9).png'},
    {'name': 'stim/line_drawing/cat/cat(10).png', 'path': 'stim/line_drawing/cat/cat(10).png'},
    {'name': 'stim/line_drawing/car/car(1).png', 'path': 'stim/line_drawing/car/car(1).png'},
    {'name': 'stim/line_drawing/car/car(2).png', 'path': 'stim/line_drawing/car/car(2).png'},
    {'name': 'stim/line_drawing/car/car(3).png', 'path': 'stim/line_drawing/car/car(3).png'},
    {'name': 'stim/line_drawing/car/car(4).png', 'path': 'stim/line_drawing/car/car(4).png'},
    {'name': 'stim/line_drawing/car/car(5).png', 'path': 'stim/line_drawing/car/car(5).png'},
    {'name': 'stim/line_drawing/car/car(6).png', 'path': 'stim/line_drawing/car/car(6).png'},
    {'name': 'stim/line_drawing/car/car(7).png', 'path': 'stim/line_drawing/car/car(7).png'},
    {'name': 'stim/line_drawing/car/car(8).png', 'path': 'stim/line_drawing/car/car(8).png'},
    {'name': 'stim/line_drawing/car/car(9).png', 'path': 'stim/line_drawing/car/car(9).png'},
    {'name': 'stim/line_drawing/car/car(10).png', 'path': 'stim/line_drawing/car/car(10).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(1).png', 'path': 'stim/line_drawing/butterfly/butterfly(1).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(2).png', 'path': 'stim/line_drawing/butterfly/butterfly(2).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(3).png', 'path': 'stim/line_drawing/butterfly/butterfly(3).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(4).png', 'path': 'stim/line_drawing/butterfly/butterfly(4).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(5).png', 'path': 'stim/line_drawing/butterfly/butterfly(5).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(6).png', 'path': 'stim/line_drawing/butterfly/butterfly(6).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(7).png', 'path': 'stim/line_drawing/butterfly/butterfly(7).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(8).png', 'path': 'stim/line_drawing/butterfly/butterfly(8).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(9).png', 'path': 'stim/line_drawing/butterfly/butterfly(9).png'},
    {'name': 'stim/line_drawing/butterfly/butterfly(10).png', 'path': 'stim/line_drawing/butterfly/butterfly(10).png'},
    {'name': 'stim/line_drawing/bread/bread(1).png', 'path': 'stim/line_drawing/bread/bread(1).png'},
    {'name': 'stim/line_drawing/bread/bread(2).png', 'path': 'stim/line_drawing/bread/bread(2).png'},
    {'name': 'stim/line_drawing/bread/bread(3).png', 'path': 'stim/line_drawing/bread/bread(3).png'},
    {'name': 'stim/line_drawing/bread/bread(4).png', 'path': 'stim/line_drawing/bread/bread(4).png'},
    {'name': 'stim/line_drawing/bread/bread(5).png', 'path': 'stim/line_drawing/bread/bread(5).png'},
    {'name': 'stim/line_drawing/bread/bread(6).png', 'path': 'stim/line_drawing/bread/bread(6).png'},
    {'name': 'stim/line_drawing/bread/bread(7).png', 'path': 'stim/line_drawing/bread/bread(7).png'},
    {'name': 'stim/line_drawing/bread/bread(8).png', 'path': 'stim/line_drawing/bread/bread(8).png'},
    {'name': 'stim/line_drawing/bread/bread(9).png', 'path': 'stim/line_drawing/bread/bread(9).png'},
    {'name': 'stim/line_drawing/bread/bread(10).png', 'path': 'stim/line_drawing/bread/bread(10).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(1).png', 'path': 'stim/line_drawing/binoculars/binoculars(1).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(2).png', 'path': 'stim/line_drawing/binoculars/binoculars(2).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(3).png', 'path': 'stim/line_drawing/binoculars/binoculars(3).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(4).png', 'path': 'stim/line_drawing/binoculars/binoculars(4).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(5).png', 'path': 'stim/line_drawing/binoculars/binoculars(5).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(6).png', 'path': 'stim/line_drawing/binoculars/binoculars(6).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(7).png', 'path': 'stim/line_drawing/binoculars/binoculars(7).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(8).png', 'path': 'stim/line_drawing/binoculars/binoculars(8).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(9).png', 'path': 'stim/line_drawing/binoculars/binoculars(9).png'},
    {'name': 'stim/line_drawing/binoculars/binoculars(10).png', 'path': 'stim/line_drawing/binoculars/binoculars(10).png'},
    {'name': 'stim/line_drawing/bear/bear(1).png', 'path': 'stim/line_drawing/bear/bear(1).png'},
    {'name': 'stim/line_drawing/bear/bear(2).png', 'path': 'stim/line_drawing/bear/bear(2).png'},
    {'name': 'stim/line_drawing/bear/bear(3).png', 'path': 'stim/line_drawing/bear/bear(3).png'},
    {'name': 'stim/line_drawing/bear/bear(4).png', 'path': 'stim/line_drawing/bear/bear(4).png'},
    {'name': 'stim/line_drawing/bear/bear(5).png', 'path': 'stim/line_drawing/bear/bear(5).png'},
    {'name': 'stim/line_drawing/bear/bear(6).png', 'path': 'stim/line_drawing/bear/bear(6).png'},
    {'name': 'stim/line_drawing/bear/bear(7).png', 'path': 'stim/line_drawing/bear/bear(7).png'},
    {'name': 'stim/line_drawing/bear/bear(8).png', 'path': 'stim/line_drawing/bear/bear(8).png'},
    {'name': 'stim/line_drawing/bear/bear(9).png', 'path': 'stim/line_drawing/bear/bear(9).png'},
    {'name': 'stim/line_drawing/bear/bear(10).png', 'path': 'stim/line_drawing/bear/bear(10).png'},
    {'name': 'stim/line_drawing/avocado/avocado(1).png', 'path': 'stim/line_drawing/avocado/avocado(1).png'},
    {'name': 'stim/line_drawing/avocado/avocado(2).png', 'path': 'stim/line_drawing/avocado/avocado(2).png'},
    {'name': 'stim/line_drawing/avocado/avocado(3).png', 'path': 'stim/line_drawing/avocado/avocado(3).png'},
    {'name': 'stim/line_drawing/avocado/avocado(4).png', 'path': 'stim/line_drawing/avocado/avocado(4).png'},
    {'name': 'stim/line_drawing/avocado/avocado(5).png', 'path': 'stim/line_drawing/avocado/avocado(5).png'},
    {'name': 'stim/line_drawing/avocado/avocado(6).png', 'path': 'stim/line_drawing/avocado/avocado(6).png'},
    {'name': 'stim/line_drawing/avocado/avocado(7).png', 'path': 'stim/line_drawing/avocado/avocado(7).png'},
    {'name': 'stim/line_drawing/avocado/avocado(8).png', 'path': 'stim/line_drawing/avocado/avocado(8).png'},
    {'name': 'stim/line_drawing/avocado/avocado(9).png', 'path': 'stim/line_drawing/avocado/avocado(9).png'},
    {'name': 'stim/line_drawing/avocado/avocado(10).png', 'path': 'stim/line_drawing/avocado/avocado(10).png'},
    {'name': 'stim/line_drawing/apple/apple(1).png', 'path': 'stim/line_drawing/apple/apple(1).png'},
    {'name': 'stim/line_drawing/apple/apple(2).png', 'path': 'stim/line_drawing/apple/apple(2).png'},
    {'name': 'stim/line_drawing/apple/apple(3).png', 'path': 'stim/line_drawing/apple/apple(3).png'},
    {'name': 'stim/line_drawing/apple/apple(4).png', 'path': 'stim/line_drawing/apple/apple(4).png'},
    {'name': 'stim/line_drawing/apple/apple(5).png', 'path': 'stim/line_drawing/apple/apple(5).png'},
    {'name': 'stim/line_drawing/apple/apple(6).png', 'path': 'stim/line_drawing/apple/apple(6).png'},
    {'name': 'stim/line_drawing/apple/apple(7).png', 'path': 'stim/line_drawing/apple/apple(7).png'},
    {'name': 'stim/line_drawing/apple/apple(8).png', 'path': 'stim/line_drawing/apple/apple(8).png'},
    {'name': 'stim/line_drawing/apple/apple(9).png', 'path': 'stim/line_drawing/apple/apple(9).png'},
    {'name': 'stim/line_drawing/apple/apple(10).png', 'path': 'stim/line_drawing/apple/apple(10).png'},
    {'name': 'stim/line_drawing/airplane/airplane(1).png', 'path': 'stim/line_drawing/airplane/airplane(1).png'},
    {'name': 'stim/line_drawing/airplane/airplane(2).png', 'path': 'stim/line_drawing/airplane/airplane(2).png'},
    {'name': 'stim/line_drawing/airplane/airplane(3).png', 'path': 'stim/line_drawing/airplane/airplane(3).png'},
    {'name': 'stim/line_drawing/airplane/airplane(4).png', 'path': 'stim/line_drawing/airplane/airplane(4).png'},
    {'name': 'stim/line_drawing/airplane/airplane(5).png', 'path': 'stim/line_drawing/airplane/airplane(5).png'},
    {'name': 'stim/line_drawing/airplane/airplane(6).png', 'path': 'stim/line_drawing/airplane/airplane(6).png'},
    {'name': 'stim/line_drawing/airplane/airplane(7).png', 'path': 'stim/line_drawing/airplane/airplane(7).png'},
    {'name': 'stim/line_drawing/airplane/airplane(8).png', 'path': 'stim/line_drawing/airplane/airplane(8).png'},
    {'name': 'stim/line_drawing/airplane/airplane(9).png', 'path': 'stim/line_drawing/airplane/airplane(9).png'},
    {'name': 'stim/line_drawing/airplane/airplane(10).png', 'path': 'stim/line_drawing/airplane/airplane(10).png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=6CF61681', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var loading_instructionsClock;
var loading_instruction;
var intro_practiceClock;
var intro_text;
var key_resp_2;
var intro_practice_2Clock;
var text_top;
var text_bottom;
var image_example;
var key_resp_8;
var image_prompt;
var prac_fixClock;
var practice_cross;
var prac_stimClock;
var prac_stimuli;
var prac_maskClock;
var prac_image_mask;
var prac_promptClock;
var prac_label1;
var prac_label2;
var prac_label3;
var prac_label4;
var prac_label5;
var prac_label6;
var prac_label7;
var prac_label8;
var prac_label9;
var prac_key_resp;
var prac_feedbackClock;
var img_feedback;
var instructions_testClock;
var text_7;
var key_resp_9;
var intro_experimentClock;
var text_top2;
var key_resp_7;
var image_ex;
var image_prompt2;
var text_begin;
var fixClock;
var cross;
var stimClock;
var stimuli;
var maskClock;
var image_mask;
var promptClock;
var label1;
var label2;
var label3;
var label4;
var label5;
var label6;
var label7;
var label8;
var label9;
var key_resp;
var text;
var correctClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "loading_instructions"
  loading_instructionsClock = new util.Clock();
  loading_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_instruction',
    text: 'Getting everything set up for you, instructions will appear in a second...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "intro_practice"
  intro_practiceClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'In this task, you will be asked to label images. \n\nOn each trial, an image will appear, followed by 9 labels.\n\nYour job is to identify the image by pressing a number corresponding to the image label. \n\nThe images may be shown quickly. \n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_practice_2"
  intro_practice_2Clock = new util.Clock();
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'In this example, the correct label would be chair, and so you would press the 1 key.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Please respond as quickly, but as accurately as possible.\n\nPress the spacebar to do some practice trials.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  image_example = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_example', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_prompt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_prompt', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "prac_fix"
  prac_fixClock = new util.Clock();
  practice_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "prac_stim"
  prac_stimClock = new util.Clock();
  prac_stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_stimuli', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "prac_mask"
  prac_maskClock = new util.Clock();
  prac_image_mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'prac_image_mask', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "prac_prompt"
  prac_promptClock = new util.Clock();
  prac_label1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  prac_label2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  prac_label3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prac_label4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  prac_label5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  prac_label6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  prac_label7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  prac_label8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  prac_label9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_label9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  prac_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "prac_feedback"
  prac_feedbackClock = new util.Clock();
  img_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_feedback', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "instructions_test"
  instructions_testClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: "Let's review the instructions one more time. \n\nIn this task, you will be asked to label images. \n\nOn each trial, an image will appear, followed by 9 labels. \n\nYour job is to identify the image by pressing a number corresponding to the image label. \n\nThe images may be shown quickly. \n\nPlease press the space bar to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro_experiment"
  intro_experimentClock = new util.Clock();
  text_top2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top2',
    text: 'Sometimes the images may look a little strange. \n\nIn this example, the correct label would be turtle, and so you would press the 5 key. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_ex', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), (- 0.1)], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_prompt2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_prompt2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, (- 0.1)], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  text_begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_begin',
    text: 'Press the spacebar to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stim"
  stimClock = new util.Clock();
  stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  image_mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_mask', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "prompt"
  promptClock = new util.Clock();
  label1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  label2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.02, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  label3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.47, 0.35], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  label4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  label5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.02, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  label6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.47, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  label7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.38), (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  label8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.02, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  label9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.47, (- 0.35)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Out of  time.\n\nPlease respond more quickly next time. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "correct"
  correctClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var loading_instructionsMaxDurationReached;
var loading_instructionsMaxDuration;
var loading_instructionsComponents;
function loading_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loading_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    loading_instructionsClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    loading_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    loading_instructionsMaxDuration = null
    // keep track of which components have finished
    loading_instructionsComponents = [];
    loading_instructionsComponents.push(loading_instruction);
    
    for (const thisComponent of loading_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function loading_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loading_instructions' ---
    // get current time
    t = loading_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading_instruction* updates
    if (t >= 0.0 && loading_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_instruction.tStart = t;  // (not accounting for frame time here)
      loading_instruction.frameNStart = frameN;  // exact frame index
      
      loading_instruction.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (loading_instruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      loading_instruction.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loading_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loading_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loading_instructions' ---
    for (const thisComponent of loading_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (loading_instructionsMaxDurationReached) {
        loading_instructionsClock.add(loading_instructionsMaxDuration);
    } else {
        loading_instructionsClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_practiceMaxDurationReached;
var _key_resp_2_allKeys;
var intro_practiceMaxDuration;
var intro_practiceComponents;
function intro_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_practiceClock.reset();
    routineTimer.reset();
    intro_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    intro_practiceMaxDuration = null
    // keep track of which components have finished
    intro_practiceComponents = [];
    intro_practiceComponents.push(intro_text);
    intro_practiceComponents.push(key_resp_2);
    
    for (const thisComponent of intro_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_practice' ---
    // get current time
    t = intro_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_practice' ---
    for (const thisComponent of intro_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    // the Routine "intro_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_practice_2MaxDurationReached;
var _key_resp_8_allKeys;
var intro_practice_2MaxDuration;
var intro_practice_2Components;
function intro_practice_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_practice_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_practice_2Clock.reset();
    routineTimer.reset();
    intro_practice_2MaxDurationReached = false;
    // update component parameters for each repeat
    image_example.setImage('stim/practice_stim/chair/chair(2).JPEG');
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    image_prompt.setImage('stim/prompt.png');
    intro_practice_2MaxDuration = null
    // keep track of which components have finished
    intro_practice_2Components = [];
    intro_practice_2Components.push(text_top);
    intro_practice_2Components.push(text_bottom);
    intro_practice_2Components.push(image_example);
    intro_practice_2Components.push(key_resp_8);
    intro_practice_2Components.push(image_prompt);
    
    for (const thisComponent of intro_practice_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_practice_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_practice_2' ---
    // get current time
    t = intro_practice_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }
    
    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }
    
    
    // *image_example* updates
    if (t >= 0.0 && image_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_example.tStart = t;  // (not accounting for frame time here)
      image_example.frameNStart = frameN;  // exact frame index
      
      image_example.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_prompt* updates
    if (t >= 0.0 && image_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prompt.tStart = t;  // (not accounting for frame time here)
      image_prompt.frameNStart = frameN;  // exact frame index
      
      image_prompt.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_practice_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_practice_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_practice_2' ---
    for (const thisComponent of intro_practice_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_8.stop();
    // the Routine "intro_practice_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_loop;
function prac_loopLoopBegin(prac_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'practice_object_classes.csv', '0:5'),
      seed: undefined, name: 'prac_loop'
    });
    psychoJS.experiment.addLoop(prac_loop); // add the loop to the experiment
    currentLoop = prac_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_loop of prac_loop) {
      snapshot = prac_loop.getSnapshot();
      prac_loopLoopScheduler.add(importConditions(snapshot));
      prac_loopLoopScheduler.add(prac_fixRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(prac_fixRoutineEachFrame());
      prac_loopLoopScheduler.add(prac_fixRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_stimRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(prac_stimRoutineEachFrame());
      prac_loopLoopScheduler.add(prac_stimRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_maskRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(prac_maskRoutineEachFrame());
      prac_loopLoopScheduler.add(prac_maskRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_promptRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(prac_promptRoutineEachFrame());
      prac_loopLoopScheduler.add(prac_promptRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_feedbackRoutineBegin(snapshot));
      prac_loopLoopScheduler.add(prac_feedbackRoutineEachFrame());
      prac_loopLoopScheduler.add(prac_feedbackRoutineEnd(snapshot));
      prac_loopLoopScheduler.add(prac_loopLoopEndIteration(prac_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var randomize_blocks;
function randomize_blocksLoopBegin(randomize_blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    randomize_blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block_randomizer.xlsx',
      seed: undefined, name: 'randomize_blocks'
    });
    psychoJS.experiment.addLoop(randomize_blocks); // add the loop to the experiment
    currentLoop = randomize_blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRandomize_block of randomize_blocks) {
      snapshot = randomize_blocks.getSnapshot();
      randomize_blocksLoopScheduler.add(importConditions(snapshot));
      randomize_blocksLoopScheduler.add(instructions_testRoutineBegin(snapshot));
      randomize_blocksLoopScheduler.add(instructions_testRoutineEachFrame());
      randomize_blocksLoopScheduler.add(instructions_testRoutineEnd(snapshot));
      randomize_blocksLoopScheduler.add(intro_experimentRoutineBegin(snapshot));
      randomize_blocksLoopScheduler.add(intro_experimentRoutineEachFrame());
      randomize_blocksLoopScheduler.add(intro_experimentRoutineEnd(snapshot));
      const test_loopLoopScheduler = new Scheduler(psychoJS);
      randomize_blocksLoopScheduler.add(test_loopLoopBegin(test_loopLoopScheduler, snapshot));
      randomize_blocksLoopScheduler.add(test_loopLoopScheduler);
      randomize_blocksLoopScheduler.add(test_loopLoopEnd);
      randomize_blocksLoopScheduler.add(randomize_blocksLoopEndIteration(randomize_blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'object_classes.csv',
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_loop of test_loop) {
      snapshot = test_loop.getSnapshot();
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(fixRoutineBegin(snapshot));
      test_loopLoopScheduler.add(fixRoutineEachFrame());
      test_loopLoopScheduler.add(fixRoutineEnd(snapshot));
      test_loopLoopScheduler.add(stimRoutineBegin(snapshot));
      test_loopLoopScheduler.add(stimRoutineEachFrame());
      test_loopLoopScheduler.add(stimRoutineEnd(snapshot));
      test_loopLoopScheduler.add(maskRoutineBegin(snapshot));
      test_loopLoopScheduler.add(maskRoutineEachFrame());
      test_loopLoopScheduler.add(maskRoutineEnd(snapshot));
      test_loopLoopScheduler.add(promptRoutineBegin(snapshot));
      test_loopLoopScheduler.add(promptRoutineEachFrame());
      test_loopLoopScheduler.add(promptRoutineEnd(snapshot));
      test_loopLoopScheduler.add(correctRoutineBegin(snapshot));
      test_loopLoopScheduler.add(correctRoutineEachFrame());
      test_loopLoopScheduler.add(correctRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function randomize_blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(randomize_blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function randomize_blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prac_fixMaxDurationReached;
var int_rand;
var distract_anim_nat;
var distract_inanim_nat;
var distract_inanim_art;
var final_distract;
var im_n;
var prompts;
var img_file;
var prompt1;
var prompt2;
var prompt3;
var prompt4;
var prompt5;
var prompt6;
var prompt7;
var prompt8;
var prompt9;
var prompt_1;
var prompt_2;
var prompt_3;
var prompt_4;
var prompt_5;
var prompt_6;
var prompt_7;
var prompt_8;
var prompt_9;
var corr_label;
var corr_response;
var prac_fixMaxDuration;
var prac_fixComponents;
function prac_fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prac_fixClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    prac_fixMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from prac_code_prompt
    int_rand = util.randint(1, 10);
    distract_anim_nat = anim_natural_prac;
    util.shuffle(distract_anim_nat);
    distract_inanim_nat = inanim_natural_prac;
    util.shuffle(distract_inanim_nat);
    distract_inanim_art = inanim_artificial_prac;
    util.shuffle(distract_inanim_art);
    
    final_distract = [];
    im_n = 0;
    if ((object_category === "anim_natural")) {
        for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_anim_nat.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj_n = _pj_a[_pj_c];
            if ((distract_anim_nat[obj_n] !== object_class)) {
                console.log(distract_anim_nat[obj_n]);
                final_distract = final_distract.concat(distract_anim_nat[obj_n]);
                im_n = (im_n + 1);
                console.log(im_n);
                if ((im_n === 2)) {
                    break;
                }
            }
        }
        distract_anim_nat = final_distract.concat(object_class);
    } else {
        if ((object_category === "inanim_natural")) {
            for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_inanim_nat.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                obj_n = _pj_a[_pj_c];
                if ((distract_inanim_nat[obj_n] !== object_class)) {
                    final_distract = final_distract.concat(distract_inanim_nat[obj_n]);
                    im_n = (im_n + 1);
                    if ((im_n === 2)) {
                        break;
                    }
                }
            }
            distract_inanim_nat = final_distract.concat(object_class);
        } else {
            if ((object_category === "inanim_artificial")) {
                for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_inanim_art.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    obj_n = _pj_a[_pj_c];
                    if ((distract_inanim_art[obj_n] !== object_class)) {
                        final_distract = final_distract.concat(distract_inanim_art[obj_n]);
                        im_n = (im_n + 1);
                        if ((im_n === 2)) {
                            break;
                        }
                    }
                }
                distract_inanim_art = final_distract.concat(object_class);
            }
        }
    }
    
    
    prompts = []
    distract_anim_nat = distract_anim_nat.slice(0, 3)
    distract_inanim_nat = distract_inanim_nat.slice(0, 3)
    distract_inanim_art = distract_inanim_art.slice(0,3)
    
    console.log(distract_anim_nat);
    console.log(distract_inanim_nat);
    console.log(distract_inanim_art);
    
    prompts = prompts.concat(distract_anim_nat)
    prompts = prompts.concat(distract_inanim_nat)
    prompts = prompts.concat(distract_inanim_art)
    img_file = `stim/practice_stim/${object_class}/${object_class}(${int_rand}).JPEG`;
    console.log(img_file);
    util.shuffle(prompts);
    console.log(prompts);
    
    //These prompts used as labels in prompt component
    prompt1 = "(1) " + prompts[0];
    prompt2 = "(2) " + prompts[1];
    prompt3 = "(3) " + prompts[2];
    prompt4 = "(4) " + prompts[3];
    prompt5 = "(5) " + prompts[4];
    prompt6 = "(6) " + prompts[5];
    prompt7 = "(7) " + prompts[6];
    prompt8 = "(8) " + prompts[7];
    prompt9 = "(9) " + prompts[8];
    
    //These prompts used for calculating correct response
    prompt_1 = prompts[0];
    prompt_2 = prompts[1];
    prompt_3 = prompts[2];
    prompt_4 = prompts[3];
    prompt_5 = prompts[4];
    prompt_6 = prompts[5];
    prompt_7 = prompts[6];
    prompt_8 = prompts[7];
    prompt_9 = prompts[8];
    
    // Run 'Begin Routine' code from prac_code_correct
    corr_label = object_class;
    if ((prompt_1 === corr_label)) {
        corr_response = "1";
    }
    if ((prompt_2 === corr_label)) {
        corr_response = "2";
    }
    if ((prompt_3 === corr_label)) {
        corr_response = "3";
    }
    if ((prompt_4 === corr_label)) {
        corr_response = "4";
    }
    if ((prompt_5 === corr_label)) {
        corr_response = "5";
    }
    if ((prompt_6 === corr_label)) {
        corr_response = "6";
    }
    if ((prompt_7 === corr_label)) {
        corr_response = "7";
    }
    if ((prompt_8 === corr_label)) {
        corr_response = "8";
    }
    if ((prompt_9 === corr_label)) {
        corr_response = "9";
    }
    psychoJS.experiment.addData("CorrectResponse", corr_response);
    console.log(corr_response);
    
    // Run 'Begin Routine' code from prac_code_prompt_data
    psychoJS.experiment.addData("prac_prompt_1", prompts[0]);
    psychoJS.experiment.addData("prac_prompt_2", prompts[1]);
    psychoJS.experiment.addData("prac_prompt_3", prompts[2]);
    psychoJS.experiment.addData("prac_prompt_4", prompts[3]);
    psychoJS.experiment.addData("prac_prompt_5", prompts[4]);
    psychoJS.experiment.addData("prac_prompt_6", prompts[5]);
    psychoJS.experiment.addData("prac_prompt_7", prompts[6]);
    psychoJS.experiment.addData("prac_prompt_8", prompts[7]);
    psychoJS.experiment.addData("prac_prompt_9", prompts[8]);
    
    prac_fixMaxDuration = null
    // keep track of which components have finished
    prac_fixComponents = [];
    prac_fixComponents.push(practice_cross);
    
    for (const thisComponent of prac_fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_fix' ---
    // get current time
    t = prac_fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_cross* updates
    if (t >= 0.0 && practice_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_cross.tStart = t;  // (not accounting for frame time here)
      practice_cross.frameNStart = frameN;  // exact frame index
      
      practice_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_cross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_fixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_fix' ---
    for (const thisComponent of prac_fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (prac_fixMaxDurationReached) {
        prac_fixClock.add(prac_fixMaxDuration);
    } else {
        prac_fixClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_stimMaxDurationReached;
var prac_stimMaxDuration;
var prac_stimComponents;
function prac_stimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_stim' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prac_stimClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    prac_stimMaxDurationReached = false;
    // update component parameters for each repeat
    prac_stimuli.setImage(img_file);
    prac_stimMaxDuration = null
    // keep track of which components have finished
    prac_stimComponents = [];
    prac_stimComponents.push(prac_stimuli);
    
    for (const thisComponent of prac_stimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_stimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_stim' ---
    // get current time
    t = prac_stimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_stimuli* updates
    if (t >= 0.0 && prac_stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_stimuli.tStart = t;  // (not accounting for frame time here)
      prac_stimuli.frameNStart = frameN;  // exact frame index
      
      prac_stimuli.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (prac_stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_stimuli.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_stimComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_stimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_stim' ---
    for (const thisComponent of prac_stimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (prac_stimMaxDurationReached) {
        prac_stimClock.add(prac_stimMaxDuration);
    } else {
        prac_stimClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_maskMaxDurationReached;
var prac_maskMaxDuration;
var prac_maskComponents;
function prac_maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prac_maskClock.reset(routineTimer.getTime());
    routineTimer.add(0.150000);
    prac_maskMaxDurationReached = false;
    // update component parameters for each repeat
    prac_image_mask.setImage('stim/rgb_mask.jpg');
    prac_maskMaxDuration = null
    // keep track of which components have finished
    prac_maskComponents = [];
    prac_maskComponents.push(prac_image_mask);
    
    for (const thisComponent of prac_maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_mask' ---
    // get current time
    t = prac_maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_image_mask* updates
    if (t >= 0.0 && prac_image_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_image_mask.tStart = t;  // (not accounting for frame time here)
      prac_image_mask.frameNStart = frameN;  // exact frame index
      
      prac_image_mask.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (prac_image_mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prac_image_mask.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_maskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_mask' ---
    for (const thisComponent of prac_maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (prac_maskMaxDurationReached) {
        prac_maskClock.add(prac_maskMaxDuration);
    } else {
        prac_maskClock.add(0.150000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_promptMaxDurationReached;
var _prac_key_resp_allKeys;
var prac_promptMaxDuration;
var prac_promptComponents;
function prac_promptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_prompt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prac_promptClock.reset();
    routineTimer.reset();
    prac_promptMaxDurationReached = false;
    // update component parameters for each repeat
    prac_label1.setText(prompt1);
    prac_label2.setText(prompt2);
    prac_label3.setText(prompt3);
    prac_label4.setText(prompt4);
    prac_label5.setText(prompt5);
    prac_label6.setText(prompt6);
    prac_label7.setText(prompt7);
    prac_label8.setText(prompt8);
    prac_label9.setText(prompt9);
    prac_key_resp.keys = undefined;
    prac_key_resp.rt = undefined;
    _prac_key_resp_allKeys = [];
    prac_promptMaxDuration = null
    // keep track of which components have finished
    prac_promptComponents = [];
    prac_promptComponents.push(prac_label1);
    prac_promptComponents.push(prac_label2);
    prac_promptComponents.push(prac_label3);
    prac_promptComponents.push(prac_label4);
    prac_promptComponents.push(prac_label5);
    prac_promptComponents.push(prac_label6);
    prac_promptComponents.push(prac_label7);
    prac_promptComponents.push(prac_label8);
    prac_promptComponents.push(prac_label9);
    prac_promptComponents.push(prac_key_resp);
    
    for (const thisComponent of prac_promptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_promptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_prompt' ---
    // get current time
    t = prac_promptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_label1* updates
    if (t >= 0.0 && prac_label1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label1.tStart = t;  // (not accounting for frame time here)
      prac_label1.frameNStart = frameN;  // exact frame index
      
      prac_label1.setAutoDraw(true);
    }
    
    
    // *prac_label2* updates
    if (t >= 0.0 && prac_label2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label2.tStart = t;  // (not accounting for frame time here)
      prac_label2.frameNStart = frameN;  // exact frame index
      
      prac_label2.setAutoDraw(true);
    }
    
    
    // *prac_label3* updates
    if (t >= 0.0 && prac_label3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label3.tStart = t;  // (not accounting for frame time here)
      prac_label3.frameNStart = frameN;  // exact frame index
      
      prac_label3.setAutoDraw(true);
    }
    
    
    // *prac_label4* updates
    if (t >= 0.0 && prac_label4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label4.tStart = t;  // (not accounting for frame time here)
      prac_label4.frameNStart = frameN;  // exact frame index
      
      prac_label4.setAutoDraw(true);
    }
    
    
    // *prac_label5* updates
    if (t >= 0.0 && prac_label5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label5.tStart = t;  // (not accounting for frame time here)
      prac_label5.frameNStart = frameN;  // exact frame index
      
      prac_label5.setAutoDraw(true);
    }
    
    
    // *prac_label6* updates
    if (t >= 0.0 && prac_label6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label6.tStart = t;  // (not accounting for frame time here)
      prac_label6.frameNStart = frameN;  // exact frame index
      
      prac_label6.setAutoDraw(true);
    }
    
    
    // *prac_label7* updates
    if (t >= 0.0 && prac_label7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label7.tStart = t;  // (not accounting for frame time here)
      prac_label7.frameNStart = frameN;  // exact frame index
      
      prac_label7.setAutoDraw(true);
    }
    
    
    // *prac_label8* updates
    if (t >= 0.0 && prac_label8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label8.tStart = t;  // (not accounting for frame time here)
      prac_label8.frameNStart = frameN;  // exact frame index
      
      prac_label8.setAutoDraw(true);
    }
    
    
    // *prac_label9* updates
    if (t >= 0.0 && prac_label9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_label9.tStart = t;  // (not accounting for frame time here)
      prac_label9.frameNStart = frameN;  // exact frame index
      
      prac_label9.setAutoDraw(true);
    }
    
    
    // *prac_key_resp* updates
    if (t >= 0.0 && prac_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_key_resp.tStart = t;  // (not accounting for frame time here)
      prac_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { prac_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { prac_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { prac_key_resp.clearEvents(); });
    }
    
    if (prac_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = prac_key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _prac_key_resp_allKeys = _prac_key_resp_allKeys.concat(theseKeys);
      if (_prac_key_resp_allKeys.length > 0) {
        prac_key_resp.keys = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].name;  // just the last key pressed
        prac_key_resp.rt = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].rt;
        prac_key_resp.duration = _prac_key_resp_allKeys[_prac_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (prac_key_resp.keys == corr_response) {
            prac_key_resp.corr = 1;
        } else {
            prac_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_promptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_promptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_prompt' ---
    for (const thisComponent of prac_promptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (prac_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_response)) {
         prac_key_resp.corr = 1;  // correct non-response
      } else {
         prac_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(prac_key_resp.corr, level);
    }
    psychoJS.experiment.addData('prac_key_resp.keys', prac_key_resp.keys);
    psychoJS.experiment.addData('prac_key_resp.corr', prac_key_resp.corr);
    if (typeof prac_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('prac_key_resp.rt', prac_key_resp.rt);
        psychoJS.experiment.addData('prac_key_resp.duration', prac_key_resp.duration);
        routineTimer.reset();
        }
    
    prac_key_resp.stop();
    // the Routine "prac_prompt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_feedbackMaxDurationReached;
var feed_img;
var prac_feedbackMaxDuration;
var prac_feedbackComponents;
function prac_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prac_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    prac_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    prac_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    feed_img = "";
    if ((prac_key_resp.keys === corr_response)) {
        feed_img = "stim/check_mark.png";
    } else {
        if ((prac_key_resp.keys !== corr_response)) {
            feed_img = "stim/wrong.png";
        }
    }
    
    img_feedback.setImage(feed_img);
    prac_feedbackMaxDuration = null
    // keep track of which components have finished
    prac_feedbackComponents = [];
    prac_feedbackComponents.push(img_feedback);
    
    for (const thisComponent of prac_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prac_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prac_feedback' ---
    // get current time
    t = prac_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img_feedback* updates
    if (t >= 0.0 && img_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_feedback.tStart = t;  // (not accounting for frame time here)
      img_feedback.frameNStart = frameN;  // exact frame index
      
      img_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (img_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      img_feedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of prac_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prac_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prac_feedback' ---
    for (const thisComponent of prac_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (prac_feedbackMaxDurationReached) {
        prac_feedbackClock.add(prac_feedbackMaxDuration);
    } else {
        prac_feedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_testMaxDurationReached;
var _key_resp_9_allKeys;
var instructions_testMaxDuration;
var instructions_testComponents;
function instructions_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_testClock.reset();
    routineTimer.reset();
    instructions_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    instructions_testMaxDuration = null
    // keep track of which components have finished
    instructions_testComponents = [];
    instructions_testComponents.push(text_7);
    instructions_testComponents.push(key_resp_9);
    
    for (const thisComponent of instructions_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_test' ---
    // get current time
    t = instructions_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_test' ---
    for (const thisComponent of instructions_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_9.stop();
    // the Routine "instructions_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro_experimentMaxDurationReached;
var prac_image;
var _key_resp_7_allKeys;
var intro_experimentMaxDuration;
var intro_experimentComponents;
function intro_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    intro_experimentClock.reset();
    routineTimer.reset();
    intro_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    prac_image = `stim/${block_condition}/prac_image.png`;
    console.log(prac_image);
    
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    image_ex.setImage(prac_image);
    image_prompt2.setImage('stim/prompt.png');
    const object_classes = ['airplane', 'apple', 'avocado', 'bear', 'binoculars', 'bread', 'butterfly', 'car', 'cat', 'corn', 'cow', 'dog', 'house', 'lawnmower', 'mushroom', 'pineapple', 'snail', 'train'];
    const file_list = [];
    
    object_classes.forEach(object => {
      for (let i = 1; i <= 10; i++) {
          let filename;
    
    
          filename = `stim/${block_condition}/${object}/${object}(${i}).png`;
          //console.log(filename)
          file_list.push(filename);
          }
    });
    console.log(file_list);
    psychoJS.serverManager.prepareResources(file_list);
    
    intro_experimentMaxDuration = null
    // keep track of which components have finished
    intro_experimentComponents = [];
    intro_experimentComponents.push(text_top2);
    intro_experimentComponents.push(key_resp_7);
    intro_experimentComponents.push(image_ex);
    intro_experimentComponents.push(image_prompt2);
    intro_experimentComponents.push(text_begin);
    
    for (const thisComponent of intro_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_experiment' ---
    // get current time
    t = intro_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_top2* updates
    if (t >= 0.0 && text_top2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top2.tStart = t;  // (not accounting for frame time here)
      text_top2.frameNStart = frameN;  // exact frame index
      
      text_top2.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_ex* updates
    if (t >= 0.0 && image_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_ex.tStart = t;  // (not accounting for frame time here)
      image_ex.frameNStart = frameN;  // exact frame index
      
      image_ex.setAutoDraw(true);
    }
    
    
    // *image_prompt2* updates
    if (t >= 0.0 && image_prompt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prompt2.tStart = t;  // (not accounting for frame time here)
      image_prompt2.frameNStart = frameN;  // exact frame index
      
      image_prompt2.setAutoDraw(true);
    }
    
    
    // *text_begin* updates
    if (t >= 0.0 && text_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_begin.tStart = t;  // (not accounting for frame time here)
      text_begin.frameNStart = frameN;  // exact frame index
      
      text_begin.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_experiment' ---
    for (const thisComponent of intro_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_7.stop();
    // the Routine "intro_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixMaxDurationReached;
var fixMaxDuration;
var fixComponents;
function fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fixClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    fixMaxDurationReached = false;
    // update component parameters for each repeat
    cross.setText('+');
    // Run 'Begin Routine' code from code_prompt
    int_rand = util.randint(1, 10);
    distract_anim_nat = anim_natural;
    util.shuffle(distract_anim_nat);
    distract_inanim_nat = inanim_natural;
    util.shuffle(distract_inanim_nat);
    distract_inanim_art = inanim_artificial;
    util.shuffle(distract_inanim_art);
    
    final_distract = [];
    im_n = 0;
    if ((object_category === "anim_natural")) {
        for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_anim_nat.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj_n = _pj_a[_pj_c];
            if ((distract_anim_nat[obj_n] !== object_class)) {
                console.log(distract_anim_nat[obj_n]);
                final_distract = final_distract.concat(distract_anim_nat[obj_n]);
                im_n = (im_n + 1);
                console.log(im_n);
                if ((im_n === 2)) {
                    break;
                }
            }
        }
        distract_anim_nat = final_distract.concat(object_class);
    } else {
        if ((object_category === "inanim_natural")) {
            for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_inanim_nat.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                obj_n = _pj_a[_pj_c];
                if ((distract_inanim_nat[obj_n] !== object_class)) {
                    final_distract = final_distract.concat(distract_inanim_nat[obj_n]);
                    im_n = (im_n + 1);
                    if ((im_n === 2)) {
                        break;
                    }
                }
            }
            distract_inanim_nat = final_distract.concat(object_class);
        } else {
            if ((object_category === "inanim_artificial")) {
                for (var obj_n, _pj_c = 0, _pj_a = util.range(0, distract_inanim_art.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                    obj_n = _pj_a[_pj_c];
                    if ((distract_inanim_art[obj_n] !== object_class)) {
                        final_distract = final_distract.concat(distract_inanim_art[obj_n]);
                        im_n = (im_n + 1);
                        if ((im_n === 2)) {
                            break;
                        }
                    }
                }
                distract_inanim_art = final_distract.concat(object_class);
            }
        }
    }
    
    
    prompts = []
    distract_anim_nat = distract_anim_nat.slice(0, 3)
    distract_inanim_nat = distract_inanim_nat.slice(0, 3)
    distract_inanim_art = distract_inanim_art.slice(0,3)
    
    console.log(distract_anim_nat);
    console.log(distract_inanim_nat);
    console.log(distract_inanim_art);
    
    prompts = prompts.concat(distract_anim_nat)
    prompts = prompts.concat(distract_inanim_nat)
    prompts = prompts.concat(distract_inanim_art)
    img_file = `stim/${block_condition}/${object_class}/${object_class}(${int_rand}).png`;
    console.log(img_file);
    util.shuffle(prompts);
    console.log(prompts);
    
    //used for label
    prompt1 = "(1) " + prompts[0];
    prompt2 = "(2) " + prompts[1];
    prompt3 = "(3) " + prompts[2];
    prompt4 = "(4) " + prompts[3];
    prompt5 = "(5) " + prompts[4];
    prompt6 = "(6) " + prompts[5];
    prompt7 = "(7) " + prompts[6];
    prompt8 = "(8) " + prompts[7];
    prompt9 = "(9) " + prompts[8];
    
    //used for correct response
    
    prompt_1 = prompts[0];
    prompt_2 = prompts[1];
    prompt_3 = prompts[2];
    prompt_4 = prompts[3];
    prompt_5 = prompts[4];
    prompt_6 = prompts[5];
    prompt_7 = prompts[6];
    prompt_8 = prompts[7];
    prompt_9 = prompts[8];
    
    
    
    // Run 'Begin Routine' code from code_correct
    corr_label = object_class;
    if ((prompt_1 === corr_label)) {
        corr_response = "1";
    }
    if ((prompt_2 === corr_label)) {
        corr_response = "2";
    }
    if ((prompt_3 === corr_label)) {
        corr_response = "3";
    }
    if ((prompt_4 === corr_label)) {
        corr_response = "4";
    }
    if ((prompt_5 === corr_label)) {
        corr_response = "5";
    }
    if ((prompt_6 === corr_label)) {
        corr_response = "6";
    }
    if ((prompt_7 === corr_label)) {
        corr_response = "7";
    }
    if ((prompt_8 === corr_label)) {
        corr_response = "8";
    }
    if ((prompt_9 === corr_label)) {
        corr_response = "9";
    }
    psychoJS.experiment.addData("corr_ans", corr_response);
    console.log(corr_response);
    
    // Run 'Begin Routine' code from prompts_data_sheet
    psychoJS.experiment.addData("prompt_1", prompts[0]);
    psychoJS.experiment.addData("prompt_2", prompts[1]);
    psychoJS.experiment.addData("prompt_3", prompts[2]);
    psychoJS.experiment.addData("prompt_4", prompts[3]);
    psychoJS.experiment.addData("prompt_5", prompts[4]);
    psychoJS.experiment.addData("prompt_6", prompts[5]);
    psychoJS.experiment.addData("prompt_7", prompts[6]);
    psychoJS.experiment.addData("prompt_8", prompts[7]);
    psychoJS.experiment.addData("prompt_9", prompts[8]);
    
    fixMaxDuration = null
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(cross);
    
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix' ---
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cross* updates
    if (t >= 0.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix' ---
    for (const thisComponent of fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (fixMaxDurationReached) {
        fixClock.add(fixMaxDuration);
    } else {
        fixClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimMaxDurationReached;
var stimMaxDuration;
var stimComponents;
function stimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stim' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    stimClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    stimMaxDurationReached = false;
    // update component parameters for each repeat
    stimuli.setImage(img_file);
    stimMaxDuration = null
    // keep track of which components have finished
    stimComponents = [];
    stimComponents.push(stimuli);
    
    for (const thisComponent of stimComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stim' ---
    // get current time
    t = stimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimuli* updates
    if (t >= 0.0 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      stimuli.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimuli.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stim' ---
    for (const thisComponent of stimComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (stimMaxDurationReached) {
        stimClock.add(stimMaxDuration);
    } else {
        stimClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var maskMaxDurationReached;
var maskMaxDuration;
var maskComponents;
function maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    maskClock.reset(routineTimer.getTime());
    routineTimer.add(0.150000);
    maskMaxDurationReached = false;
    // update component parameters for each repeat
    image_mask.setImage('stim/rgb_mask.jpg');
    maskMaxDuration = null
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(image_mask);
    
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mask' ---
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_mask* updates
    if (t >= 0.0 && image_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_mask.tStart = t;  // (not accounting for frame time here)
      image_mask.frameNStart = frameN;  // exact frame index
      
      image_mask.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_mask.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_mask.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mask' ---
    for (const thisComponent of maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (maskMaxDurationReached) {
        maskClock.add(maskMaxDuration);
    } else {
        maskClock.add(0.150000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var promptMaxDurationReached;
var _key_resp_allKeys;
var promptMaxDuration;
var promptComponents;
function promptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'prompt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    promptClock.reset(routineTimer.getTime());
    routineTimer.add(7.000000);
    promptMaxDurationReached = false;
    // update component parameters for each repeat
    label1.setText(prompt1);
    label2.setText(prompt2);
    label3.setText(prompt3);
    label4.setText(prompt4);
    label5.setText(prompt5);
    label6.setText(prompt6);
    label7.setText(prompt7);
    label8.setText(prompt8);
    label9.setText(prompt9);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    promptMaxDuration = null
    // keep track of which components have finished
    promptComponents = [];
    promptComponents.push(label1);
    promptComponents.push(label2);
    promptComponents.push(label3);
    promptComponents.push(label4);
    promptComponents.push(label5);
    promptComponents.push(label6);
    promptComponents.push(label7);
    promptComponents.push(label8);
    promptComponents.push(label9);
    promptComponents.push(key_resp);
    promptComponents.push(text);
    
    for (const thisComponent of promptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function promptRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'prompt' ---
    // get current time
    t = promptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *label1* updates
    if (t >= 0.0 && label1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label1.tStart = t;  // (not accounting for frame time here)
      label1.frameNStart = frameN;  // exact frame index
      
      label1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label1.setAutoDraw(false);
    }
    
    
    // *label2* updates
    if (t >= 0.0 && label2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label2.tStart = t;  // (not accounting for frame time here)
      label2.frameNStart = frameN;  // exact frame index
      
      label2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label2.setAutoDraw(false);
    }
    
    
    // *label3* updates
    if (t >= 0.0 && label3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label3.tStart = t;  // (not accounting for frame time here)
      label3.frameNStart = frameN;  // exact frame index
      
      label3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label3.setAutoDraw(false);
    }
    
    
    // *label4* updates
    if (t >= 0.0 && label4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label4.tStart = t;  // (not accounting for frame time here)
      label4.frameNStart = frameN;  // exact frame index
      
      label4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label4.setAutoDraw(false);
    }
    
    
    // *label5* updates
    if (t >= 0.0 && label5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label5.tStart = t;  // (not accounting for frame time here)
      label5.frameNStart = frameN;  // exact frame index
      
      label5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label5.setAutoDraw(false);
    }
    
    
    // *label6* updates
    if (t >= 0.0 && label6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label6.tStart = t;  // (not accounting for frame time here)
      label6.frameNStart = frameN;  // exact frame index
      
      label6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label6.setAutoDraw(false);
    }
    
    
    // *label7* updates
    if (t >= 0.0 && label7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label7.tStart = t;  // (not accounting for frame time here)
      label7.frameNStart = frameN;  // exact frame index
      
      label7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label7.setAutoDraw(false);
    }
    
    
    // *label8* updates
    if (t >= 0.0 && label8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label8.tStart = t;  // (not accounting for frame time here)
      label8.frameNStart = frameN;  // exact frame index
      
      label8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label8.setAutoDraw(false);
    }
    
    
    // *label9* updates
    if (t >= 0.0 && label9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label9.tStart = t;  // (not accounting for frame time here)
      label9.frameNStart = frameN;  // exact frame index
      
      label9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      label9.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        key_resp.duration = _key_resp_allKeys[0].duration;
        // was this correct?
        if (key_resp.keys == corr_response) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 5 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 5 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of promptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var number_to_label;
function promptRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'prompt' ---
    for (const thisComponent of promptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_response)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from response_converter
    if ((key_resp.keys === "1")) {
        number_to_label = prompts[0];
    } else {
        if ((key_resp.keys === "2")) {
            number_to_label = prompts[1];
        } else {
            if ((key_resp.keys === "3")) {
                number_to_label = prompts[2];
            } else {
                if ((key_resp.keys === "4")) {
                    number_to_label = prompts[3];
                } else {
                    if ((key_resp.keys === "5")) {
                        number_to_label = prompts[4];
                    } else {
                        if ((key_resp.keys === "6")) {
                            number_to_label = prompts[5];
                        } else {
                            if ((key_resp.keys === "7")) {
                                number_to_label = prompts[6];
                            } else {
                                if ((key_resp.keys === "8")) {
                                    number_to_label = prompts[7];
                                } else {
                                    if ((key_resp.keys === "9")) {
                                        number_to_label = prompts[8];
                                    } else {
                                        number_to_label = "no response";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    psychoJS.experiment.addData("response_label", number_to_label);
    
    if (promptMaxDurationReached) {
        promptClock.add(promptMaxDuration);
    } else {
        promptClock.add(7.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var correctMaxDurationReached;
var _pj;
var response_animacy;
var corr_animacy;
var correctMaxDuration;
var correctComponents;
function correctRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'correct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    correctClock.reset();
    routineTimer.reset();
    correctMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_animacy
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6(number_to_label, anim_natural)) {
        response_animacy = "anim_natural";
    } else {
        if (_pj.in_es6(number_to_label, inanim_natural)) {
            response_animacy = "inanim_natural";
        } else {
            if (_pj.in_es6(number_to_label, inanim_artificial)) {
                response_animacy = "inanim_artificial";
            } else {
                response_animacy = "no response";
            }
        }
    }
    psychoJS.experiment.addData("response_animacy", response_animacy);
    if ((response_animacy === object_category)) {
        corr_animacy = 1;
    } else {
        corr_animacy = 0;
    }
    psychoJS.experiment.addData("corr_animacy", corr_animacy);
    psychoJS.experiment.addData("img_condition", block_condition);
    
    correctMaxDuration = null
    // keep track of which components have finished
    correctComponents = [];
    
    for (const thisComponent of correctComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function correctRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'correct' ---
    // get current time
    t = correctClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of correctComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function correctRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'correct' ---
    for (const thisComponent of correctComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "correct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
