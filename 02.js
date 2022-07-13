
function grade(nilai){
    if (nilai >= 90){
        return "A"
    }else if(nilai >= 80){
        return "B"
    }else if(nilai >= 70){
        return "C"
    }else if(nilai >= 60){
        return "D"
    }else if(nilai <= 59){
        return "E"
    }

}


console.log(grade(30))
console.log(grade(75))