import { storageService } from "./storage.service"

export const userService = {
    getUser,
    login,
    signUp,
}

function getUser() {
    return {
        name: "Ori Teicher",
        coins: 52,
        moves: []
    }
}

async function login(userCred) {

}


function signUp() {

}