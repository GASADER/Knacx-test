const prompt = require ('prompt-sync')()

//random ตัวอักษร
function randomletter(){

    //สร้างชุดตัวอักษร (string เป็น array)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    //random ลำดับ (number)
    //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    const randomIndex = Math.floor(Math.random() * letters.length);
    console.log(randomIndex)

    //เอาลำดับกลับไปยัดลง letters เพื่อเลือกอักษร (String Indexing)
    return letters[randomIndex];
}

//สร้างคำจากอักษรที่แรนด้อมมา
function randomWord(length) {
    //สร้าง string เปล่ามารับค่า
    let word = '';

    //loop เพิ่มจำนวนอักษรไปจนครบจำนวน
    for (let i = 0; i < length; i++) {
      word += randomletter();
    }
    return word;
  }


// function validate มีค่า boolean
function vaildInput(input){

    const result = randomWord(4)
    console.log(result)

    //รับ4ตัว
    if(input.length !== 4){
        return false
    //เช็คตัวอักษร
    } else if(/^[A-Za-z]+$/.test(input)){
        return false
    }
    else{
        return true
    }
}


//
run = () => {

    //ทำ loop
    //รับค่าจากprompt
    const input = prompt('Enter a 4 letter word:')
    //เช็คvalidate
    if(!vaildInput(input)){
        console.log("Please enter a valid 4 letter word")
    }
}
//สั่งrun program
run()
