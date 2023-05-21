const prompt = require("prompt-sync")();

//random ตัวอักษร
function randomletter() {
  //สร้างชุดตัวอักษร (string เป็น array)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //random ลำดับ (number)
  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  const randomIndex = Math.floor(Math.random() * letters.length);

  //เอาลำดับกลับไปยัดลง letters เพื่อเลือกอักษร (String Indexing)
  return letters[randomIndex];
}

//สร้างคำจากอักษรที่แรนด้อมมา
function randomWord(length) {
  //สร้าง string เปล่ามารับค่า
  let word = "";

  //loop เพิ่มจำนวนอักษรไปจนครบจำนวน
  for (let i = 0; i < length; i++) {
    word += randomletter();
  }
  return word;
}

// function validate มีค่า boolean
function vaildInput(input) {
  //รับ4ตัว
  if (input.length !== 4) {
    return false;
    //เช็คตัวอักษร
  } else if (/^[A-Za-z]+$/.test(input)) {
    return false;
  } else {
    return true;
  }
}

function checkLetter(input, result) {
  //สร้างตัวแปรมานับจำนวน
  let count = 0;
  //loop จนครบจำนวนตัวอักษร
  for (let i = 0; i < input.length; i++) {
    //ปรับให้เป็นตัวใหญ่
    const letter = input[i].toUpperCase();
    //หากletterเหมือนในresult จะเพิ่มครั้งล่ะ1
    if (result.toUpperCase().includes(letter)) {
      count++;
    }
  }
  return count;
}

function checkPosition(input, result) {
  //สร้างตัวแปรมานับจำนวน
  let count = 0;
  //loop จนครบจำนวนตัวอักษร
  for (let i = 0; i < input.length; i++) {
    //ปรับให้เป็นตัวใหญ่และเทียบตำแหน่งในarray ถ้าถูกต้อง ให้นับเพิ่มครั้งล่ะ1
    if (input[i].toUpperCase() === result[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

//รันโปรแกรม
run = () => {
  const numberPosition = 4;
  const result = randomWord(numberPosition);

  //รับค่า นับจำนวนรอบที่เล่นและสถานะผลแพ้ชนะ
  let count = 0;
  let win = false;

  //ทำ loop
  while (!win) {
    //รับค่าจากprompt
    const input = prompt(`Enter a ${numberPosition} letter word [A-Z]:`);
    //เพิ่มจำนวนรอบ
    count++;
    //เช็คvalidate
    if (input.length !== numberPosition) {
      console.log(`Please enter a valid ${numberPosition} letter word[A-Z]`);
      continue;
    }
    //รับค่าจากfunction check
    const correctLetter = checkLetter(input, result);
    const correctPosition = checkPosition(input, result);

    //แสดงผล
    console.log(`Matching Letter :${correctLetter}`);
    console.log(`Matching Position :${correctPosition}`);

    //หากจรงคำตอบให้คืนค่าwin
    if (correctPosition === numberPosition) {
      console.log("Congratulations! You guessed the word correctly!");
      win = true;
    }
  }

  //แสดงคำตอบ
  if (win) {
    console.log("Game over");
    const name = prompt("Enter your Name:");
    console.log(
      `Congratulations ${name} ,Result is ${result},You played a total of ${count} rounds.`
    );
  }
};
//สั่งrun program
run();
