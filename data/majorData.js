const images = [
  {
    name: "ball",
    num: "00",
    type: "0",
  },
  {
    name: "tie",
    num: "01",
    type: "0",
  },
  {
    name: "noah",
    num: "02",
    type: "0",
  },
  {
    name: "me",
    num: "03",
    type: "0",
  },
  {
    name: "rye",
    num: "04",
    type: "0",
  },
  {
    name: "lee",
    num: "05",
    type: "0",
  },
  {
    name: "chew",
    num: "06",
    type: "0",
  },
  {
    name: "cow",
    num: "07",
    type: "0",
  },
  {
    name: "ivy",
    num: "08",
    type: "0",
  },
  {
    name: "bee",
    num: "09",
    type: "0",
  },
  {
    name: "dice",
    num: "10",
    type: "1",
  },
  {
    name: "tot",
    num: "11",
    type: "1",
  },
  {
    name: "tin",
    num: "12",
    type: "1",
  },
  {
    name: "time",
    num: "13",
    type: "1",
  },
  {
    name: "tyre",
    num: "14",
    type: "1",
  },
  {
    name: "doll",
    num: "15",
    type: "1",
  },
  {
    name: "dish",
    num: "16",
    type: "1",
  },
  {
    name: "dog",
    num: "17",
    type: "1",
  },
  {
    name: "dive",
    num: "18",
    type: "1",
  },
  {
    name: "tub",
    num: "19",
    type: "1",
  },
  {
    name: "noose",
    num: "20",
    type: "2",
  },
  {
    name: "net",
    num: "21",
    type: "2",
  },
  {
    name: "nun",
    num: "22",
    type: "2",
  },
  {
    name: "nam",
    num: "23",
    type: "2",
  },
  {
    name: "nerd",
    num: "24",
    type: "2",
  },
  {
    name: "nail",
    num: "25",
    type: "2",
  },
  {
    name: "nosh",
    num: "26",
    type: "2",
  },
  {
    name: "nik",
    num: "27",
    type: "2",
  },
  {
    name: "knife",
    num: "28",
    type: "2",
  },
  {
    name: "nob",
    num: "29",
    type: "2",
  },
  {
    name: "moose",
    num: "30",
    type: "3",
  },
  {
    name: "mat",
    num: "31",
    type: "3",
  },
  {
    name: "moon",
    num: "32",
    type: "3",
  },
  {
    name: "mummy",
    num: "33",
    type: "3",
  },
  {
    name: "mower",
    num: "34",
    type: "3",
  },
  {
    name: "meal",
    num: "35",
    type: "3",
  },
  {
    name: "match",
    num: "36",
    type: "3",
  },
  {
    name: "mug",
    num: "37",
    type: "3",
  },
  {
    name: "movie",
    num: "38",
    type: "3",
  },
  {
    name: "mop",
    num: "39",
    type: "3",
  },
  {
    name: "rose",
    num: "40",
    type: "4",
  },
  {
    name: "rat",
    num: "41",
    type: "4",
  },
  {
    name: "rain",
    num: "42",
    type: "4",
  },
  {
    name: "ram",
    num: "43",
    type: "4",
  },
  {
    name: "rower",
    num: "44",
    type: "4",
  },
  {
    name: "roll",
    num: "45",
    type: "4",
  },
  {
    name: "roach",
    num: "46",
    type: "4",
  },
  {
    name: "rock",
    num: "47",
    type: "4",
  },
  {
    name: "ref",
    num: "48",
    type: "4",
  },
  {
    name: "rope",
    num: "49",
    type: "4",
  },
  {
    name: "lace",
    num: "50",
    type: "5",
  },
  {
    name: "light",
    num: "51",
    type: "5",
  },
  {
    name: "lion",
    num: "52",
    type: "5",
  },
  {
    name: "lamb",
    num: "53",
    type: "5",
  },
  {
    name: "lure",
    num: "54",
    type: "5",
  },
  {
    name: "lilo",
    num: "55",
    type: "5",
  },
  {
    name: "leash",
    num: "56",
    type: "5",
  },
  {
    name: "log",
    num: "57",
    type: "5",
  },
  {
    name: "leaf",
    num: "58",
    type: "5",
  },
  {
    name: "lip",
    num: "59",
    type: "5",
  },
  {
    name: "chess",
    num: "60",
    type: "6",
  },
  {
    name: "jet",
    num: "61",
    type: "6",
  },
  {
    name: "chain",
    num: "62",
    type: "6",
  },
  {
    name: "gym",
    num: "63",
    type: "6",
  },
  {
    name: "chair",
    num: "64",
    type: "6",
  },
  {
    name: "shell",
    num: "65",
    type: "6",
  },
  {
    name: "choo-choo",
    num: "66",
    type: "6",
  },
  {
    name: "jug",
    num: "67",
    type: "6",
  },
  {
    name: "chef",
    num: "68",
    type: "6",
  },
  {
    name: "ship",
    num: "69",
    type: "6",
  },
  {
    name: "case",
    num: "70",
    type: "7",
  },
  {
    name: "cat",
    num: "71",
    type: "7",
  },
  {
    name: "coin",
    num: "72",
    type: "7",
  },
  {
    name: "comb",
    num: "73",
    type: "7",
  },
  {
    name: "car",
    num: "74",
    type: "7",
  },
  {
    name: "coal",
    num: "75",
    type: "7",
  },
  {
    name: "cash",
    num: "76",
    type: "7",
  },
  {
    name: "coke",
    num: "77",
    type: "7",
  },
  {
    name: "coffee",
    num: "78",
    type: "7",
  },
  {
    name: "cop",
    num: "79",
    type: "7",
  },
  {
    name: "face",
    num: "80",
    type: "8",
  },
  {
    name: "fat",
    num: "81",
    type: "8",
  },
  {
    name: "phone",
    num: "82",
    type: "8",
  },
  {
    name: "foam",
    num: "83",
    type: "8",
  },
  {
    name: "fire",
    num: "84",
    type: "8",
  },
  {
    name: "file",
    num: "85",
    type: "8",
  },
  {
    name: "fish",
    num: "86",
    type: "8",
  },
  {
    name: "fog",
    num: "87",
    type: "8",
  },
  {
    name: "five",
    num: "88",
    type: "8",
  },
  {
    name: "fib",
    num: "89",
    type: "8",
  },
  {
    name: "bus",
    num: "90",
    type: "9",
  },
  {
    name: "bat",
    num: "91",
    type: "9",
  },
  {
    name: "pen",
    num: "92",
    type: "9",
  },
  {
    name: "bomb",
    num: "93",
    type: "9",
  },
  {
    name: "bear",
    num: "94",
    type: "9",
  },
  {
    name: "bell",
    num: "95",
    type: "9",
  },
  {
    name: "peach",
    num: "96",
    type: "9",
  },
  {
    name: "pick",
    num: "97",
    type: "9",
  },
  {
    name: "puff",
    num: "98",
    type: "9",
  },
  {
    name: "pop",
    num: "99",
    type: "9",
  },
];

export default images;
