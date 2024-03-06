import { PetDbModel, PetModel } from "./Pets";

export interface VaccineAdministeredDbModel {
    id: string;
    vaccineId: string;
    petId: string;
    dateAdministered: string; // Representação da data em formato de string
    nextDoseDue: string; // Representação da data em formato de string
    vetAdministered: string;
    comments: string | undefined;
}

export interface VaccineAdministeredModel {
    id: string;
    vaccineId: string;
    petId: string;
    dateAdministered: Date; // Tipo Date para representar datas
    nextDoseDue: Date; // Tipo Date para representar datas
    vetAdministered: string;
    comments: string | undefined;
}

export interface PetVaccinesAdministered {
    vaccinesAdministered: VaccineAdministeredModel[];
}

export class VaccineAdministered {
    constructor(
        private _id: string,
        private _vaccineId: string,
        private _petId: string,
        private _dateAdministered: Date | string, // Pode ser do tipo Date ou string, dependendo da representação desejada
        private _nextDoseDue: Date | string, // Pode ser do tipo Date ou string, dependendo da representação desejada
        private _vetAdministered: string,
        private _comments: string | undefined,
    ) { }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get vaccineId(): string {
        return this._vaccineId;
    }
    public set vaccineId(value: string) {
        this._vaccineId = value;
    }

    public get petId(): string {
        return this._petId;
    }
    public set petId(value: string) {
        this._petId = value;
    }

    public get dateAdministered(): Date | string {
        return this._dateAdministered;
    }
    public set dateAdministered(value: Date | string) {
        this._dateAdministered = value;
    }

    public get nextDoseDue(): Date | string {
        return this._nextDoseDue;
    }
    public set nextDoseDue(value: Date | string) {
        this._nextDoseDue = value;
    }

    public get vetAdministered(): string {
        return this._vetAdministered;
    }
    public set vetAdministered(value: string) {
        this._vetAdministered = value;
    }

    public get comments(): string {
        return this._comments;
    }
    public set comments(value: string) {
        this._comments = value;
    }

    public get vaccineAdministeredDbModel(): VaccineAdministeredDbModel {
        return {
            id: this._id,
            vaccineId: this._vaccineId,
            petId: this._petId,
            dateAdministered: this._dateAdministered.toString(), // Converte para string se necessário
            nextDoseDue: this._nextDoseDue.toString(), // Converte para string se necessário
            vetAdministered: this._vetAdministered,
            comments: this._comments,
        };
    }

    public get vaccineAdministeredModel(): VaccineAdministeredModel {
        return {
            id: this._id,
            vaccineId: this._vaccineId,
            petId: this._petId,
            dateAdministered: new Date(this._dateAdministered),
            nextDoseDue: new Date(this._nextDoseDue),
            vetAdministered: this._vetAdministered,
            comments: this._comments,
        };
    }
}
