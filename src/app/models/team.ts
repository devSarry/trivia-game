export class Team {

    name: string;
    points: number;

    constructor(name: string, points = 0){
        this.name = name;
        this.points = points;
    }

    addPoint(): number {
        return this.points = this.points++;
    }

}
