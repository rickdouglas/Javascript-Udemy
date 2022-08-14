function TimeCounter () {
  
  function createTimer(seconds){
    const data =  new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12:false,
      timeZone: 'UTC'
    })
  }
  
  const timeCounter = document.querySelector('.timer')
  let seconds = 0;
  let timer;
  
  function startTimer(){
    timer = setInterval(function(){
      seconds++;
      timeCounter.innerHTML = createTimer(seconds);
    }, 1000)
  }
  
  document.addEventListener('click' , (event) => {
    const element = event.target;
    if (element.classList.contains('start')){
      timeCounter.classList.remove('paused')
      clearInterval(timer);
      startTimer();
    }
    else if (element.classList.contains('pause')){
      timeCounter.classList.add('paused')
      clearInterval(timer);
    }
    else if (element.classList.contains('restart')){
      timeCounter.classList.remove('paused')
      clearInterval(timer);
      timeCounter.innerHTML = '00:00:00';
      seconds = 0;
    }
    else console.log('Invalid option')
  })  
}
TimeCounter();