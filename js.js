var audio = new Audio();
var clicks = 1

function soundClick() { 
    if (clicks !== 1) {
        audio.src = 'The Official FIFA World Cup Qatar 2022™ Theme FIFA World Cup 2022 Soundtrack.mp3'; 
        audio.autoplay = true;
        clicks ++    
    } else {
        clicks = 0
    }
     
    
}

function penalty() {
    $('.circle#10').css('background', '#ccc') 
    for (i = 0; i < 2; i++) {
        let button = $('<button class="button">Удар</button>')
        let random = Math.random() * (2 - 1) + 1
        if (i > 0) {
            button.css('bottom', '0')
            
        }
        if (random > 1.5) {
            button.css('right', '0')

        } else {
            button.css('margin-left', '5px')

        };
        button.attr('id', i)
        button[0].addEventListener('click', function() {
            goalkeeper(button.attr('id'))
        })
        $('.gates').append(button)
    }

}

var a = 0       
var command_1 = 0
var command_2 = 0
var attempt_1 = 0
var attempt_2 = 0

function goalkeeper(answer) {
    $('.button').remove()
    a ++
    let random = Math.floor(Math.random() * 2);
    if (a % 2) {
        $('.shock').html('goalkeeper')
        if (Number(random) === Number(answer)){
            attempt_1 ++      
            $('.answer').html('Safe!')
            let lak = '#' + (attempt_1)
            $('.circle' + lak).css('background', 'red')
                
        } else {
            attempt_1 ++
            command_2 ++
            $('.answer').html('Shot!')
            let lak = '#' + (attempt_1)
            $('.circle' + lak).css('background', 'green')
        
        }                 
          
    } else {
        $('.shock').html('performer of the strike')
        if (Number(random) === Number(answer)){      
            attempt_2 ++
            $('.answer').html('Safe!')
            let lak = '#' + (attempt_2 + 5)    
            $('.circle' + lak).css('background', 'red')        
        } else {
            attempt_2 ++
            command_1 ++
            $('.answer').html('Shot!')
            let lak = '#' + (attempt_2 + 5)
            $('.circle' + lak).css('background', 'green')
        
        } 
    }  

    game_over()    

}

function game_over() {
    if (attempt_1 === 5 && attempt_2 === 5) {
        if (command_2 > command_1) {
            alert('Вы чемпион!')
            a = 0       
            command_1 = 0
            command_2 = 0
            attempt_1 = 0
            attempt_2 = 0
            for (i = 0; i < 10; i++) {
                $('.circle' + '#' + i).css('background', '#ccc') 
            }

        } else if(command_2 < command_1) {
            alert('2 место')
            a = 0       
            command_1 = 0
            command_2 = 0
            attempt_1 = 0
            attempt_2 = 0
            for (i = 0; i < 10; i++) {
                $('.circle' + '#' + i).css('background', '#ccc') 
            }     


        } else {
            alert('Ничья')
            a = 0       
            command_1 = 0
            command_2 = 0
            attempt_1 = 0
            attempt_2 = 0
            for (i = 0; i < 10; i++) {
                $('.circle' + '#' + i).css('background', '#ccc') 
            }
        
        }
    }
    penalty()
}

$('.button_music')[0].addEventListener('click', function() {
    audio.pause()
    soundClick()   

})

console.log("Игра разработана Олейниковым Александром")
console.log("Приятной игры!")
penalty()
soundClick()

