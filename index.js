const createStructure = () => {
  return `
    <div class="container">
      <h1>Age Calculator</h1>
      <div class="form">
        <label for="birthday">Enter your date of birth</label>
        <input type="date" name="birthday" id="birthday" />
        <button id="btn">Calculate Age</button>
        <p id="result">Your age is___years old</p>
      </div>
    </div>
    `;
};

const insertHTML = () => {
  document.querySelector("body").innerHTML = createStructure();
};

const calculateAge = () => {
  const birthdayEl = document.querySelector("#birthday");
  const resultEl = document.querySelector("#result");
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    alert("Please enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);
  resultEl.innerText = `Your age is ${age} year${age !== 1 ? "s" : ""} old`;
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();
  const dayDifference = currentDate.getDate() - birthdayDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
};

insertHTML();

const btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", calculateAge);
