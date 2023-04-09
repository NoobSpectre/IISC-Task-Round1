import { _getItem, _setItem, verifyItem } from '../store/store';

// returns either 0 or 1 randomly
const generateRand = () => {
  return Math.round(Math.random());
};

// file to be called depending on the value of answer2(response of Q2)
export const JSON_FILE = [
  'sample_db_0km.json',
  'sample_db_5km.json',
  'sample_db_10km.json',
  'sample_db_15km.json',
  'sample_db_20km.json',
  'sample_db_25km.json',
];

// base object type of a mode
const mode = {
  mode: '',
  ivtt: 0,
  tcost: 0,
  walktime: 0,
  waittime: 0,
  tvariab: 0,
  trans: 0,
  crowd: 0,
  serv: 0,
};

// returns an array where the 1st, 2nd and 3rd element is the mode1, mode2 and mode3 of the table respectively
export const getModes1_2_3 = data => {
  const modes = [{ ...mode }, { ...mode }, { ...mode }];
  //iterates over the array created by Object.entries(data)
  for (const [key, value] of Object.entries(data)) {
    //skips the first element and the elements that has a key starting with mode_3
    if (key.startsWith('Choice situation') || key.startsWith('mode_3'))
      continue;
    if (key.startsWith('mode_1')) {
      //sets the mode1 of the table
      const prop = key.split('.').pop();
      if (prop.includes('_')) modes[0] = { ...modes[0], mode: value };
      else modes[0] = { ...modes[0], [prop]: value };
    } else if (key.startsWith('mode_2')) {
      //sets the mode2 of the table
      const prop = key.split('.').pop();
      if (prop.includes('_')) modes[1] = { ...modes[1], mode: value };
      else modes[1] = { ...modes[1], [prop]: value };
    } else if (key.startsWith('mode_4')) {
      //sets the mode3 of the table
      const prop = key.split('.').pop();
      if (prop.includes('_')) modes[2] = { ...modes[2], mode: value };
      else modes[2] = { ...modes[2], [prop]: value };
    } else break; // breaks from the loop
  }

  return modes;
};

// returns an object which consists the data for mode4 of the table
export const getMode4 = data => {
  // once mode5 is set, it won't change on page refresh
  if (verifyItem('mode4')) {
    // verifies if there is any mode5 in localstorage
    const mode4 = JSON.parse(_getItem('mode4'));
    return mode4; // if exists returns the value else proceeds downward
  }

  // this part of the code runs only once first time the 2nd page mounts
  const a1 = _getItem('a1');
  let mode4 = { ...mode };
  const modes = ['mode_8', 'mode_9'];

  if (a1 === 'Own Car') {
    for (const [k, v] of Object.entries(data)) {
      if (k.startsWith('mode_9')) break;
      if (!k.startsWith('mode_8')) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode4 = { ...mode4, mode: v };
      else mode4 = { ...mode4, [prop]: v };
    }
  } else if (a1 === 'Own Two-wheeler') {
    for (const [k, v] of Object.entries(data)) {
      if (!k.startsWith('mode_9')) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode4 = { ...mode4, mode: v };
      else mode4 = { ...mode4, [prop]: v };
    }
  } else {
    const rand = generateRand();
    for (const [k, v] of Object.entries(data)) {
      if (!k.startsWith(modes[rand])) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode4 = { ...mode4, mode: v };
      else mode4 = { ...mode4, [prop]: v };
    }
  }

  _setItem('mode4', JSON.stringify(mode4));
  return mode4;
};

// returns an object which consists the data for mode5 of the table
export const getMode5 = data => {
  // once mode5 is set, it won't change on page refresh
  if (verifyItem('mode5')) {
    // verifies if there is any mode5 in localstorage
    const mode5 = JSON.parse(_getItem('mode5'));
    return mode5; // if exists returns the value else proceeds downward
  }

  // this part of the code runs only once first time the 2nd page mounts
  const a1 = _getItem('a1');
  let mode5 = { ...mode };
  const modes = ['mode_5', 'mode_7'];

  if (a1 === 'Auto') {
    for (const [k, v] of Object.entries(data)) {
      if (k.startsWith('mode_8')) break;
      if (!k.startsWith('mode_7')) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode5 = { ...mode5, mode: v };
      else mode5 = { ...mode5, [prop]: v };
    }
  } else if (a1 === 'App based ride hailing cab services including Ola/Uber') {
    for (const [k, v] of Object.entries(data)) {
      if (k.startsWith('mode_6')) break;
      if (!k.startsWith('mode_5')) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode5 = { ...mode5, mode: v };
      else mode5 = { ...mode5, [prop]: v };
    }
  } else {
    const rand = generateRand();
    for (const [k, v] of Object.entries(data)) {
      if (k.startsWith('mode_8')) break;
      if (!k.startsWith(modes[rand])) continue;
      const prop = k.split('.').pop();
      if (prop.includes('_')) mode5 = { ...mode5, mode: v };
      else mode5 = { ...mode5, [prop]: v };
    }
  }

  _setItem('mode5', JSON.stringify(mode5));
  return mode5;
};
