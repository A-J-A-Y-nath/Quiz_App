// script.js
const questions = [
    {
        question: "What do you call fake spaghetti?",
        options: ["Noodlini", "Impostoroni", "Fauxghetti", "Spaghoot"],
        answer: "Impostoroni"
    },
    {
        question: "Which animal is most likely to become a stand-up comedian?",
        options: ["Giraffe", "Hyena", "Parrot", "Sloth"],
        answer: "Hyena"
    },
    {
        question: "If a tomato is a fruit, then ketchup is...",
        options: ["A smoothie", "A fruit salad", "A juice", "A sauce"],
        answer: "A smoothie"
    },
    {
        question: "What’s a cow’s favorite activity?",
        options: ["Moo-sic", "Moo-vies", "Moo-deling", "Moo-dling"],
        answer: "Moo-vies"
    },
    {
        question: "What’s faster than a cheetah?",
        options: ["A speeding car", "A running ostrich", "My Wi-Fi when I don’t need it", "Superman"],
        answer: "My Wi-Fi when I don’t need it"
    },
    {
        question: "What did the ocean say to the beach?",
        options: ["Nothing, it just waved", "See you later", "I'm tide up", "Stop shore-ing off"],
        answer: "Nothing, it just waved"
    },
    {
        question: "What’s a computer’s favorite snack?",
        options: ["Microchips", "Byte-sized cookies", "RAM-en noodles", "Apple sauce"],
        answer: "Microchips"
    },
    {
        question: "Why don’t skeletons fight each other?",
        options: ["They’re bone-tired", "They don’t have the guts", "They crack up too easily", "They’re spineless"],
        answer: "They don’t have the guts"
    },
    {
        question: "Why don’t eggs tell jokes?",
        options: ["They crack up too easily", "They’re too egg-static", "They’re scrambled", "They’re too shellfish"],
        answer: "They crack up too easily"
    },
    {
        question: "What do you get when you cross a snowman and a vampire?",
        options: ["Frostbite", "A chilly scare", "An ice-cold bite", "Snowfang"],
        answer: "Frostbite"
    },
    {
        question: "Why did the bicycle fall over?",
        options: ["It lost its balance", "It had two-tired", "It got tired", "It hit a spoke"],
        answer: "It lost its balance"
    },
    {
        question: "Why don’t some fish play basketball?",
        options: ["They’re afraid of nets", "They can’t dunk", "Too slippery", "They swim too much"],
        answer: "They’re afraid of nets"
    },
    {
        question: "What do you call a bear with no teeth?",
        options: ["A gummy bear", "Toothless", "Fluffy", "A bearly bear"],
        answer: "A gummy bear"
    },
    {
        question: "What’s an astronaut’s favorite part of a computer?",
        options: ["The space bar", "The rocket drive", "The gravity board", "The orbit chip"],
        answer: "The space bar"
    },
    {
        question: "Why did the scarecrow win an award?",
        options: ["He was outstanding in his field", "He made a big scare", "He had the best straw suit", "He was scary good"],
        answer: "He was outstanding in his field"
    },
    {
        question: "Why can’t you give Elsa a balloon?",
        options: ["She'll let it go", "She’s too cool for it", "She’ll freeze it", "It will melt"],
        answer: "She'll let it go"
    },
    {
        question: "Why did the math book look sad?",
        options: ["It had too many problems", "It got divided", "It had no solution", "It was missing its number one"],
        answer: "It had too many problems"
    },
    {
        question: "Why do ducks have feathers?",
        options: ["To cover their quack", "For extra fluff", "For flight control", "To stay warm"],
        answer: "To cover their quack"
    },
    {
        question: "Why are ghosts bad at lying?",
        options: ["You can see right through them", "They’re too transparent", "They always vanish mid-sentence", "They spook themselves"],
        answer: "You can see right through them"
    },
    {
        question: "What did one wall say to the other?",
        options: ["I’ll meet you at the corner", "Hold it together", "We’re cornered!", "Let’s build something"],
        answer: "I’ll meet you at the corner"
    }
];

// declaration of question and answer
let question = document.getElementById("Question");
options = document.querySelectorAll(".options");

let QuestionNo = 0;
let point = 0;
ShowQuestion();

function option(val){
    if(questions[QuestionNo].answer === questions[QuestionNo].options[val]){
        options[val].style.background = 'green';
        options[val].style.color = 'white';
        point = point + 1;
        options.forEach(options => {
            options.disabled = true;
        });
    }
    else{
        alert("Correct answer is "+questions[QuestionNo].answer);
        options[val].style.background = 'red';
        options[val].style.color = 'white';
        options.forEach(options => {
            options.disabled = true;
        });
        
    }
}
function next(){
    if (QuestionNo < questions.length-1){
        QuestionNo = QuestionNo + 1;
        ShowQuestion();
        options.forEach(options => {
            options.disabled = false;
        });
        options.forEach(options =>{
            options.style.background = "white";
            options.style.color = 'black';
        })
        
    }
    else{
        document.writeln("Question finished current score is "+point+"/"+questions.length);
    }
    
}
function ShowQuestion(){
    
    question.innerHTML = questions[QuestionNo].question;

    options[0].innerHTML = questions[QuestionNo].options[0];
    options[1].innerHTML = questions[QuestionNo].options[1];
    options[2].innerHTML = questions[QuestionNo].options[2];
    options[3].innerHTML = questions[QuestionNo].options[3];
}
container = document.querySelector("body");
colorpicker = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function changecolor(){
    
let color = "#"
for(i=0;i<6;i++){
    random = Math.floor(Math.random()* colorpicker.length)
    color = color + colorpicker[random];
}
container.style.background = color;
}

 setInterval(changecolor,2000);



