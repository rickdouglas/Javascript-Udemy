function createTimer(seconds){
  const data =  new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'UTC'
  })
}

const timeCounter = document.querySelector('.timer')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const restart = document.querySelector('.restart')
let seconds = 0;
let timer;

function startTimer(){
  timer = setInterval(function(){
    seconds++;
    timeCounter.innerHTML = createTimer(seconds);
  }, 1000)
}

start.addEventListener('click', function(event){
  timeCounter.classList.remove('paused')
  clearInterval(timer);
  startTimer();
});
pause.addEventListener('click', function(event){
  timeCounter.classList.add('paused')
  clearInterval(timer);
})
restart.addEventListener('click', function(event){
  clearInterval(timer);
  timeCounter.innerHTML = '00:00:00';
  seconds = 0;
})