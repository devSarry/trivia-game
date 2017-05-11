export class Question {

    question: string;
    choices: any;
    answer: string;
    viewed: boolean;

    constructor(question: string, choices: any, answer: string, viewed: boolean){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
        this.viewed = viewed;
    }

    checkAnswer(answer: string): boolean {
        return this.answer === answer;
    }
}
