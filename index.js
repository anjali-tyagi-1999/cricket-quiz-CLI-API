const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
var readlineSync = require("readline-sync");
console.log(chalk.yellow ("QUIZ ON CRICKET"));
 var userName = readlineSync.question("Please enter your name ");
 console.log(chalk.blue("Welcome "+ userName));
var rules = readlineSync.question(chalk.bold.green("These are the rules to be followed during the quiz:- \n You have to answer all the questions. \n Answer should be written the option number not the complete answer. \n Every correct answer will be rewarded with 1 mark. \n Every wrong answer will reduce your score 1 mark.\n DO WE START WITH OUR QUIZ IF YOU HAVE READ ALL THE ABOVE GIVEN RULES....!!!! yes/no "));
var score = 0;
quesNumber = 1;
if (rules === "yes"){
  function play(ques,options,correctAnswer){
 console.log(chalk.cyan("\nQ "+quesNumber +" " + ques));
 for(var i =0; i<options.length; i++){
    console.log(`${i + 1}. ${options[i]}`);   
 }
 var userAnswer = readlineSync.question(chalk.red("Enter a valid choice "));
 if(userAnswer === correctAnswer){
   score++;
 }
  quesNumber++;
  }
  play("Who is Indian cricket team captian currently ",["Sachin Tendulkar","MS Dhoni","Virat Kohli"," Gautam Gambhir"],3);
  play(" How many teams participated in the ICC world cup 2019 ?",["8","9","10","12"],3);
  play(" Whic team has won most ICC Cricket World Cup titles",["West Indies","India","England","Australia"],4);
  play(" Whic of the following Indian player have got first MAN OF THE TOURNAMENT Award in the ICC Cricket World Cup?",["Sachin Tendulkar","Yuvraj Singh","Mohinder Amarnath","MS Dhoni"],1);
  play(" When was the first ICC cricket world cup started",["1972","1975","1985","1979"],2);
  play(" Which of the following country hosted the ICC Cricket World Cup most of the times ?",["England","India","Australia","West Indies"],1);
  play(" What is the full form of IPL ?",["India Premier League","India Play League","Indian Premier League","Indo Premier League"],3);
  play(" Who introduced IPL ?",["CCI","BCCI","ICCI","ICC"],2);
  play(" For a cricketer initials LBW stands for",["Loss By Weather","List Ball Win","Leg Before Wicket","Loss By Wicket"],3);
  play(" The first ever test match was held in...",["1877","1887","1897","1867"],1);
console.log(chalk.magenta("Your score is:" + score));

if(score>=6){
  console.log(chalk.bgBlueBright("You know about cricket very well")); 
}
else{
  console.log(chalk.bgRed("OOPS!! Sorry you don't know about cricket well.."));
}
}
else{
  console.log(chalk.bold.white("Okay!! Bye have a nice day.."));
}