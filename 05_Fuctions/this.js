const student = {
    name: "Prince",
    age : 20,
    math:93,
    eng:34,
    phy:76,
    get avg(){
        let avg = (this.age + this.eng + this.math)/3;
        console.log(avg);
    }
}
//  console.log(student.avg);.
student.avg 