export interface UserDbModel {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    created_at: string,
    address: string,
    phone_number: number,
    profile_picture: string,
    description: string,
    last_login: string,
    status: string,
    preferences: string,
    pets_count: number
}

export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    createdAt: Date,
    address: string,
    phoneNumber: number,
    profilePicture: string,
    description: string,
    lastLogin: string,
    status: string,
    preferences: string,
    petsCount: number
}


export class User {
    constructor(
        private _id: string,
        private _name: string,
        private _email: string,
        private _password: string,
        private _role: string,
        private _createdAt: string,
        private _address: string,
        private _phoneNumber: number,
        private _profilePicture: string,
        private _description: string,
        private _lastLogin: string,
        private _status: string,
        private _preferences: string,
        private _petsCount: number,
    ) { }


    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }


    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }


    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }


    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }


    public get createdAt(): string {
        return this._createdAt;
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }


    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }


    public get phoneNumber(): number {
        return this._phoneNumber;
    }
    public set phoneNumber(value: number) {
        this._phoneNumber = value;
    }


    public get profilePicture(): string {
        return this._profilePicture;
    }
    public set profilePicture(value: string) {
        this._profilePicture = value;
    }


    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }


    public get lastLogin(): string {
        return this._lastLogin;
    }
    public set lastLogin(value: string) {
        this._lastLogin = value;
    }


    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }


    public get preferences(): string {
        return this._preferences;
    }
    public set preferences(value: string) {
        this._preferences = value;
    }


    public get petsCount(): number {
        return this._petsCount;
    }
    public set petsCount(value: number) {
        this._petsCount = value;
    }


    public get userDbModel():UserDbModel {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            password: this._password,
            role: this._role,
            created_at: this._createdAt,
            address: this._address,
            phone_number: this._phoneNumber,
            profile_picture: this._profilePicture,
            description: this._description,
            last_login: this._lastLogin,
            status: this._status,
            preferences: this._preferences,
            pets_count: this._petsCount
        }
    }

    public get userModel() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            password: this._password,
            role: this._role,
            createdAt: this._createdAt,
            address: this._address,
            phoneNumber: this._phoneNumber,
            profilePicture: this._profilePicture,
            description: this._description,
            lastLogin: this._lastLogin,
            status: this._status,
            preferences: this._preferences,
            petsCount: this._petsCount
        }
    }


}