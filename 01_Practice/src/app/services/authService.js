export default class AuthService {
    login() {
        const promise = new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(true);
            }, 3000);
        });
        return promise;
    }
};