export default class AuthService {
    isLoggedIn: boolean = false;
    login() {
        const promise = new Promise((resolve, reject) => {
            setInterval(() => {
                this.isLoggedIn = true;
                // resolve(true);                
                resolve(this.isLoggedIn);
            });
        });
        return promise;
    }
    logout() {
        const promise = new Promise((resolve, reject) => {
            setInterval(() => {
                this.isLoggedIn = false;
                // resolve(true);                
                resolve(this.isLoggedIn);
            });
        });
        return promise;
    }
};