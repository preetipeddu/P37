class Question {
  constructor(){
    this.title = createElement('h2');
    this.nameInput = createInput('Enter your name here.');
    this.submitButton = createButton('Submit');
    this.answerInput = createInput('Enter your answer here.');
  }

  hide(){
    this.nameInput.hide();
    this.submitButton.hide();
    this.answerInput.hide();
    this.title.hide();
  }

  display(){
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
    this.question.html("Question - What starts and ends with the letter 'e', but has only one letter?");
    this.question.position(70,80);
    this.title.html("MyQuiz Game");
    this.title.position(350,0);
    this.option1.html("1: Everyone");
    this.option1.position(70,140);
    this.option2.html("2: Envelope");
    this.option2.position(70,160);
    this.option3.html("3: Estimate");
    this.option3.position(70,180);
    this.option4.html("4: Example");
    this.option4.position(70,200);

    this.nameInput.position(70,300);
    this.submitButton.position(450,300);
    this.answerInput.position(260,300);

    this.submitButton.mousePressed(()=>{
      this.nameInput.hide();
      this.submitButton.hide();
      this.answerInput.hide();
      this.title.hide();
      contestant.name = this.nameInput.value();
      contestant.answer = this.answerInput.value();
      contestantCount+=1;
      contestant.update();
      contestant.updateCount(contestantCount);
      })

    
    
    

  }


}