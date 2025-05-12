let devProfile = {
  fullName: "Viviana Ojeda",
  age: 43,
  profession: "Criminalistic and Graphologist",
  skills: ["JavaScript", " Adaptability to different environments", " Analytical capacity", " Team Collaboration"],
  isEmployed: true,
  contact: {
    email: "viv.mo82@gmail.com",
    location: "Posadas, Misiones"
  }
};

function introduceInEnglish(profile) {
  let message = `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. `;
  message += `I work with ${profile.skills.join(", ")}. `;
  message += `I live in ${profile.contact.location}. `;
  message += `I am ${profile.age} years old. `;
  message += profile.isEmployed ? "I am currently employed." : "I am currently looking for opportunities.";
  return message;
}


console.log(introduceInEnglish(devProfile));