
// Coding challenge #1
const heightMark =  1.69; 
const massMark = 78;
const heightJohn = 1.95;
const massJohn = 92;

const bmiMark  = massMark/(heightMark**2);
const bmiJohn = massJohn/(heightJohn**2);
const markHigherBMI = Boolean (bmiMark > bmiJohn)

console.log("BMi Mark Là : " , bmiMark);
console.log("BMi John Là : " , bmiJohn);
console.log("Chỉ số BMI của Mark có cao hơn John ? : " , markHigherBMI);

//Coding Challenge #2
if (bmiMark > bmiJohn){
    console.log("Chỉ số bmi của Mark cao hơn John");
}
else{
    console.log("Chỉ số bmi của John cao hơn Mark");
}


if (bmiMark > bmiJohn){
    console.log(`BMI Mark : ${bmiMark} cao hơn  Bmi John: ${bmiJohn}`);
}
else{
    console.log(`BMI Mark : ${bmiMark} thấp hơn  Bmi John: ${bmiJohn}`);
}

//Coding Challenge #3

const dolphinScore = [97,112,101];
const koalaScore  = [109,95,123];

let sumDolphin = 0;
dolphinScore.forEach(element => {
    sumDolphin  += element
});


let sumKoala = 0;
koalaScore.forEach(element => {
    sumKoala  += element
});

const avgSumdolphin = sumDolphin /(dolphinScore.length);
const avgSumkoala = sumKoala /(koalaScore.length);

console.log("Trung bình Các giá trị điểm của DolPhin là " , avgSumdolphin);
console.log("Trung bình Các giá trị điểm của Koala là " , avgSumkoala);


if (avgSumdolphin >= 100 && avgSumkoala >= 100 ){
    if (avgSumdolphin > avgSumkoala){
        console.log("DolPhin đạt giải thưởng 1 ");
    }
    else if (avgSumdolphin < avgSumkoala){
        console.log("Koala đạt giải thưởng 1 ");
    }
    else {
        console.log("Cả 2 đội hòa");
    }
}
else {
    console.log("Không có đội nào giành được cúp");
}


//Coding Challenge #4
{
    const bill = 275;
    const tip = bill >= 50 && bill<=300 ? bill * 0.15 : bill * 0.2;
    const totalBill = bill + tip ;
    console.log(`Hóa đơn ${bill} , Tip là ${tip} , Tổng hóa đơn là : ${totalBill}`);
}


//Coding Challenge #5

{
    const calcAverage = (a  , b , c) => { return (a + b +c) / 3}

    const avgDolphins1 = calcAverage(44, 23, 71);
    const avgKoala1 = calcAverage(65, 54, 49);
    const avgDolphins2 = calcAverage(85, 54, 41);
    const avgKoalas2 = calcAverage(23, 34, 27);
    function checkWinner (dolphins , koala){ {}
        if (dolphins > koala ){
            console.log(`Đội Dolphins thắng (${dolphins} điểm so với ${koala} điểm)`);
        }
        else if (dolphins < koala){
            console.log(`Đội Koala thắng (${koala} điểm so với ${dolphins} điểm)`);
        }
        else {
            console.log("Hai Đội Hòa");
        }
    }
    checkWinner(avgDolphins1,avgKoala1);
    checkWinner(avgDolphins2 , avgKoalas2);
}

//Coding Challenge #6
    function calcTip (bill){
        if (bill >= 50 && bill <= 300){
            return bill*(15/100);
        }
        else {
            return bill*(20/100);
        }
}

const testBill = [125,555, 44];
const tips = testBill.map(calcTip);
const total = testBill.map((bill,index) => {return bill + tips[index]});
console.log(`Tổng hóa đơn của mảng lần lượt là : ${total}`);

//Coding Challenge #7
{
    const mark = {
        weight : 78,
        height : 169,
    };
    const john = {
        weight : 92,
        height : 195,
    };
    mark.bmi = mark.weight/mark.height**2;
    john.bmi = john.weight/john.height**2;
   console.log(mark);
   console.log(john);
    if (mark.bmi > john.bmi){
        console.log(`Chỉ số BMI của mark ${mark.bmi} cao hơn John ${john.bmi} !`)
    }
    else console.log(`Chỉ số BMI của mark ${mark.bmi} bé hơn John ${john.bmi} !`)
}  

//Coding Challenge #8
{
   const  bill = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
   function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100;
    }  
    const tips = bill.map(calcTip);
    console.log("Tiền tip lần lượt :",tips)
    const totals = bill.map((price,index) => {return price + tips[index]});
    console.log("Tổng Hóa Đơn lần lượt :",totals)
    
    // const arr = 0 ;
    // const calcAverage = totals.reduce((price,index)=> price + index , arr );
    // console.log(calcAverage);
    function calcAverage (arr){
        let sum = 0 ;
        for (let i = 0 ; i< arr.length ; i++){
            sum += arr[i];
        }
        return sum;
    }
    console.log(calcAverage(totals));   
}
//Coding Challenge #9
{
    function printForecast(arr) {
        let result = '';
        for (let i = 0; i < arr.length; i++) {
          const temperature = arr[i];
          const day = i + 1;
          const notice = `. ${temperature}°C in ${day} days`;
      
          result += notice;
        }
        console.log(result);
      }
      const data1 = [17, 21, 23];
      const data2 = [12, 5, -5, 0, 4];
      printForecast(data1);
      printForecast(data2);
}