export interface PetExamDbModel {
    id: string;
    petId: string;
    exameId: string;
    datePerformed: string;
    vetPerformed: string;
    contactVet: string;
    results: string;
    comments: string;
}

export interface PetExamModel {
    id: string;
    petId: string;
    exameId: string;
    datePerformed: Date; 
    vetPerformed: string;
    contactVet: string;
    results: string;
    comments: string;
}

export class PetExam {
    constructor(
        private _id: string,
        private _petId: string,
        private _exameId: string,
        private _datePerformed: Date | string,
        private _vetPerformed: string,
        private _contactVet: string,
        private _results: string,
        private _comments: string
    ) { }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get petId(): string {
        return this._petId;
    }
    public set petId(value: string) {
        this._petId = value;
    }

    public get exameId(): string {
        return this._exameId;
    }
    public set exameId(value: string) {
        this._exameId = value;
    }

    public get datePerformed(): Date | string {
        return this._datePerformed;
    }
    public set datePerformed(value: Date | string) {
        this._datePerformed = value;
    }

    public get vetPerformed(): string {
        return this._vetPerformed;
    }
    public set vetPerformed(value: string) {
        this._vetPerformed = value;
    }

    public get contactVet(): string {
        return this._contactVet;
    }
    public set contactVet(value: string) {
        this._contactVet = value;
    }

    public get results(): string {
        return this._results;
    }
    public set results(value: string) {
        this._results = value;
    }

    public get comments(): string {
        return this._comments;
    }
    public set comments(value: string) {
        this._comments = value;
    }

    public get petExamDbModel(): PetExamDbModel {
        return {
            id: this._id,
            petId: this._petId,
            exameId: this._exameId,
            datePerformed: this._datePerformed.toString(), // Converte para string se necessário
            vetPerformed: this._vetPerformed,
            contactVet: this._contactVet,
            results: this._results,
            comments: this._comments,
        };
    }

    public get petExamModel(): PetExamModel {
        return {
            id: this._id,
            petId: this._petId,
            exameId: this._exameId,
            datePerformed: new Date(this._datePerformed),
            vetPerformed: this._vetPerformed,
            contactVet: this._contactVet,
            results: this._results,
            comments: this._comments,
        };
    }

}
