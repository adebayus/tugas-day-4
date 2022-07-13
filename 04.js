function itsKabisatYear(year){
    const isAbadBaru = Math.ceil(year) >= 1900 ? true : false
    let itsKabisat
    const habisDibagi4 = Math.ceil(year % 4) == 0 ? true :false
    const habisDibagi100 = Math.ceil(year % 100) == 0 ? true :false 

    // console.log(Math.ceil(year % 4),Math.ceil(year % 100))
    return habisDibagi4  && habisDibagi100 ? "Kabisat" : "Bukan Kabisat"
}


console.log(itsKabisatYear(1900))
console.log(itsKabisatYear(2000))
console.log(itsKabisatYear(2001))
console.log(itsKabisatYear(2016))


