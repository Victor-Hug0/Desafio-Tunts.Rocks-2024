class Student {
    constructor(res, name, absent, p1, p2, p3) {
        this.res = res;
        this.name = name;
        this.absent = absent;
        this.p1 = parseInt(p1);
        this.p2 = parseInt(p2);
        this.p3 = parseInt(p3);
        this.average = Math.round((this.p1+this.p2+this.p3)/3)
        this.situation = null;
        this.verifySituation();
        this.naf = null;
        this.setNAF();
    }

    verifySituation(){
        // Verify the situation of the students
        const totalClasses = 60;

        if(this.absent > totalClasses*0.25 || this.average < 50){
            this.situation = "Reprovado";
        } else if(this.average >= 50 && this.average < 70){
            this.situation = "Exame Final";
        } else {
            this.situation = "Aprovado";
        }
    }

    setNAF(){
        // Set a NAF of the students
        if(this.situation == "Exame Final"){
            this.naf = Math.max(0, (50 * 2) - this.average);
        }
    }

    toString() {
        // Return a string with Student Class informations
        return `Student {res: ${this.res}, name: ${this.name}, absent: ${this.absent}, p1: ${this.p1}, p2: ${this.p2}, p3: ${this.p3}, average: ${this.average}, situation: ${this.situation}, gfa: ${this.naf}}`;
    }
}

module.exports = Student;