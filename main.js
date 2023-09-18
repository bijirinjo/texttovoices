let textarea = document.getElementById("text");
let listen = document.getElementById("listen");

listen.addEventListener("click", function(){
  let text = textarea.value;
  let utterence = new SpeechSynthesisUtterance();
  utterence.text = text;
  utterence.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(utterence);

})

// Fetch available voices
function populateVoiceList() {
  const voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voiceSelect");

  voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.text = voice.name;
      voiceSelect.appendChild(option);
  });
}

// Wait for voices to be loaded before populating the select
speechSynthesis.onvoiceschanged = populateVoiceList;

 voiceSelect.addEventListener("change",() =>{
  speech.voice = voices[voiceSelect.value];
 }) 



