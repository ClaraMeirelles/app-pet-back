export interface WeightHistoryDbModel {
    id: string;
    petId: string;
    weight: number;
    date: string; // Representação da data em formato de string
}

export interface WeightHistoryModel {
    id: string;
    petId: string;
    weight: number;
    date: Date; // Tipo Date para representar datas
}

export class Weight {
    constructor(
        private _id: string,
        private _petId: string,
        private _weight: number,
        private _date: Date | string, // Pode ser do tipo Date ou string, dependendo da representação desejada
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

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }

    public get date(): Date | string {
        return this._date;
    }
    public set date(value: Date | string) {
        this._date = value;
    }

    public get weightHistoryDbModel(): WeightHistoryDbModel {
        return {
            id: this._id,
            petId: this._petId,
            weight: this._weight,
            date: this._date.toString(), // Converte para string se necessário
        };
    }

    public get weightHistoryModel(): WeightHistoryModel {
        return {
            id: this._id,
            petId: this._petId,
            weight: this._weight,
            date: new Date(this._date),
        };
    }
}
