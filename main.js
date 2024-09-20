const smartClassrooms = {
    "AA": ["110", "130", "134", "149", "153", "159"],
    "AAX": ["160"],
    "AG": ["108"],
    "COB": ["103", "104", "109", "110", "113", "117", "120", "123", "128", "130", "136", "141", "156"],
    "COM": ["111", "112"],
    "EDU": ["115", "116", "118", "120", "125", "126", "128", "129", "130"],
    "FCS": ["100"],
    "GA": ["16", "7"],
    "JWLA": ["100", "103", "104", "106", "108", "110", "111", "112", "134", "136", "138", "140", "205", "213", "218", "220"],
    "LH": ["122"],
    "MUS": ["109", "111", "136", "211", "212", "237"],
    "RH": ["141", "147"],
    "SCI": ["108", "210", "214"],
    "UCC": ["107", "108"],
    "UTC": ["160"]
};

const labs = {
    "AA": ["149", "153"],
    "COB": ["130"],
    "EDU": ["115", "130"],
    "GA": ["16"],
    "JWLA": ["100", "103", "218"],
    "UCC": ["107", "108"]
};

document.getElementById("checkButton").addEventListener("click", function() {
  const building = document.getElementById("building").value;
  const roomNumber = document.getElementById("roomNumber").value;
  
  const isSmartClassroom = smartClassrooms[building] && smartClassrooms[building].includes(roomNumber);
  const isLab = labs[building] && labs[building].includes(roomNumber);
  
  if (isSmartClassroom && isLab) {
    document.getElementById("result").textContent = "Smart Classroom and a Lab!";
  } else if (isSmartClassroom) {
    document.getElementById("result").textContent = "Smart Classroom.";
  } else if (isLab) {
    document.getElementById("result").textContent = "Lab.";
  } else {
    document.getElementById("result").textContent = "Neither a Smart Classroom nor a Lab.";
  }
});