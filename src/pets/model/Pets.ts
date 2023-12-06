export interface PetDbModel {
    id: string;
    owner_id: string;
    name: string;
    species: string;
    breed: string;
    age: number;
    size: number;
    color: string;
    weight: number;
    vaccination_status: string;
    vaccination_reminders: string;
    last_vaccination_date: string;
    next_vaccination_date: string;
    vet_contact: string;
    medical_notes: string;
    medical_history: string;
    created_at: string;
    updated_at: string;
}

export interface PetModel {
    id: string;
    ownerId: string;
    name: string;
    species: string;
    breed: string;
    age: number;
    size: number;
    color: string;
    weight: number;
    vaccinationStatus: string;
    vaccinationReminders: string;
    lastVaccinationDate: string;
    nextVaccinationDate: string;
    vetContact: string;
    medicalNotes: string;
    medicalHistory: string;
    createdAt: string;
    updatedAt: string;
}

export class Pet {
    
    constructor(
        private _id: string,
        private _ownerId: string,
        private _name: string,
        private _species: string,
        private _breed: string,
        private _age: number,
        private _size: number,
        private _color: string,
        private _weight: number,
        private _vaccinationStatus: string,
        private _vaccinationReminders: string,
        private _lastVaccinationDate: string,
        private _nextVaccinationDate: string,
        private _vetContact: string,
        private _medicalNotes: string,
        private _medicalHistory: string,
        private _createdAt: string,
        private _updatedAt: string,
    ) { }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get ownerId(): string {
        return this._ownerId;
    }
    public set ownerId(value: string) {
        this._ownerId = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get species(): string {
        return this._species;
    }
    public set species(value: string) {
        this._species = value;
    }

    public get breed(): string {
        return this._breed;
    }
    public set breed(value: string) {
        this._breed = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }

    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }

    public get vaccinationStatus(): string {
        return this._vaccinationStatus;
    }
    public set vaccinationStatus(value: string) {
        this._vaccinationStatus = value;
    }

    public get vaccinationReminders(): string {
        return this._vaccinationReminders;
    }
    public set vaccinationReminders(value: string) {
        this._vaccinationReminders = value;
    }

    public get lastVaccinationDate(): string {
        return this._lastVaccinationDate;
    }
    public set lastVaccinationDate(value: string) {
        this._lastVaccinationDate = value;
    }

    public get nextVaccinationDate(): string {
        return this._nextVaccinationDate;
    }
    public set nextVaccinationDate(value: string) {
        this._nextVaccinationDate = value;
    }

    public get vetContact(): string {
        return this._vetContact;
    }
    public set vetContact(value: string) {
        this._vetContact = value;
    }

    public get medicalNotes(): string {
        return this._medicalNotes;
    }
    public set medicalNotes(value: string) {
        this._medicalNotes = value;
    }

    public get medicalHistory(): string {
        return this._medicalHistory;
    }
    public set medicalHistory(value: string) {
        this._medicalHistory = value;
    }

    public get createdAt(): string {
        return this._createdAt;
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }

    public get updatedAt(): string {
        return this._updatedAt;
    }
    public set updatedAt(value: string) {
        this._updatedAt = value;
    }

    public get petDbModel(): PetDbModel {
        return {
            id: this._id,
            owner_id: this._ownerId,
            name: this._name,
            species: this._species,
            breed: this._breed,
            age: this._age,
            size: this._size,
            color: this._color,
            weight: this._weight,
            vaccination_status: this._vaccinationStatus,
            vaccination_reminders: this._vaccinationReminders,
            last_vaccination_date: this._lastVaccinationDate,
            next_vaccination_date: this._nextVaccinationDate,
            vet_contact: this._vetContact,
            medical_notes: this._medicalNotes,
            medical_history: this._medicalHistory,
            created_at: this._createdAt,
            updated_at: this._updatedAt,
        };
    }

    public get petModel(): PetModel {
        return {
            id: this._id,
            ownerId: this._ownerId,
            name: this._name,
            species: this._species,
            breed: this._breed,
            age: this._age,
            size: this._size,
            color: this._color,
            weight: this._weight,
            vaccinationStatus: this._vaccinationStatus,
            vaccinationReminders: this._vaccinationReminders,
            lastVaccinationDate: this._lastVaccinationDate,
            nextVaccinationDate: this._nextVaccinationDate,
            vetContact: this._vetContact,
            medicalNotes: this._medicalNotes,
            medicalHistory: this._medicalHistory,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        };
    }
}
