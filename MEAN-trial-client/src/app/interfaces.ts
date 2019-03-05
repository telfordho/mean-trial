export interface Note {
    _id?: String;
    title: String ;
    description: String ;
    status: String;
}

export interface Profile {
    _id: String,
    notes: Note[]
}

export interface Payload {
    email: String,
    password: String
}