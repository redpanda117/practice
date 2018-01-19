import { Component } from '@angular/core';

@Component({
    selector:'startTrivia',
    template: `<div class = "buttonDiv" *ngFor = "let anime of animes">
                <button class = "btn btn-success" class = "animeShows" id="{{ anime }}">
                    {{ anime }}
                </button>
                </div>`
})


export class startTriviaComponent {
    animes = [
        "KUROKO NO BASKET", 
        "BLACK BUTLER", 
        "CARDCAPTOR", 
        "ASSASSINATION CLASSROOM", 
        "INUYASHA", 
        "BLUE EXORCIST", 
        "YONA OF THE DAWN", 
        "YU YU HAKUSHO", 
        "LOG HORIZON", 
        "NIJIIRO DAYS", 
        "MISS KOBAYASHI'S DRAGON MAID", 
        "MY LITTLE MONSTER"
    ]; 
}