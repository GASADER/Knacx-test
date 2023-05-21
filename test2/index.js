const prompt = require ('prompt-sync')()

// funtion validate มีค่า boolean
 function vaildInput(input){
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
    //รับค่าจากprompt
    const input = prompt('Enter a 4 letter word:')
    //เช็คvalidate
    if(!vaildInput(input)){
        console.log("Please enter a valid 4 letter word")
    }
}
//สั่งrun program
run()
