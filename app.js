const button=document.querySelector("button");

const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();


recognition.onstart=function(){
    console.log(" speech reconition started ! ")
};

recognition.onresult=function(event){
    console.log(event)

    const spokenwords =event.results[0][0].transcript;
    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords);
};


function computerSpeech(words){
    const speech= new SpeechSynthesisUtterance();
    speech.lang="eng-US";
    speech.pitch=0.9;
    speech.volume = 5;
    speech.rate =1;


    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if (words.includes("how are you")){
        speech.text="I am Fine, Thank you";
    }

    if (words.includes("ok done")){
        speech.text= "I think you are member of shoestore";
    }

    if (words.includes("where is my order")){
        speech.text ="open to dashboard click on orders"
    }
    if (words.includes("you will work right")){
        speech.text="i think this will work in your app okay cool dont be  scared lol lmao krishna";
    }
    if (words.includes("open dashboard")){
        speech.text=" okay krishna created  me and he is god  bhai you are cool tera bhai hard hai chote hai ";
        // window.open("https://www.google.com/")
    }
}

button.addEventListener("click",()=>{
    recognition.start()
});

