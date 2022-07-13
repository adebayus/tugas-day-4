function gradeMovie(umur){
    if (umur >= 21){
        return "DEWASA"
    }else if(umur >= 13){
        return "REMAJA"
    }else if(umur >= 9){
        return "BIMBINGAN ORANG TUA"
    }else if(umur < 9){
        return "SEMUA USIA"
    }
}

console.log(gradeMovie(15))
console.log(gradeMovie(32))