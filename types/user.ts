export interface UserData {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    type: "user" | "administrator"
}