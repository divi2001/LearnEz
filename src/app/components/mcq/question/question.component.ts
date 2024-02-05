import { Component, OnInit } from '@angular/core';
import { count, interval } from 'rxjs';
import { QuestionServiceService } from '../../../service/question-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public queList: any=[];
  public currQue: number=0;
  public points: number=0;
  public counter: number=60;
  public correctAns: number=0;
  public inCorrectAns: number=0;
  public progress: string="0";
  public isQuizCompleted: boolean=false;
  interval$:any;
  constructor(private queService: QuestionServiceService) { 
    
  }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllQuestion();
    this.startCounter();
  }

  getAllQuestion(){
    this.queService.getQueJson()
    .subscribe( res => {
      console.log(res);
      this.queList=res.questions;
    })
  }

  nextQue(){
    this.currQue++;
    if(this.currQue>=this.queList.length)
    {
      this.currQue=0;
    }
    
  }

  prevQue(){
    this.currQue--;
    if(this.currQue<0){
      this.currQue=0;
    }
    console.log(this.currQue);
  }

  answer(currQue: number, option: any){
    if(currQue===this.queList.length)
    {
      this.isQuizCompleted=true;
      this.stopCounter();
    }
    if(option.correct){
      this.points+=10;
      this.correctAns++;
      setTimeout(() =>{
        this.currQue++;
        this.resetCounter();
        this.getProgress();
      }, 200)
    }else{
      setTimeout(()=>{
        this.currQue++;
        this.resetCounter();
        this.getProgress();
      }, 200)
      //this.points-=10;
      this.inCorrectAns++;
    }
  }

  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter==0){
        this.currQue++;
        this.counter=60;
        this.points-=10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestion();
    this.points=0;
    this.counter=0;
    this.currQue=0;
    this.progress="0";
  }

  getProgress(){
    this.progress=((this.currQue/this.queList.length)*100).toString();
    return this.progress;
  }

}
function subscribe(arg0: (val: any) => void) {
  throw new Error('Function not implemented.');
}

