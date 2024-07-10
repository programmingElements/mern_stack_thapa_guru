const signup = async (request, response) => {
    try {
        console.log(request.body);
        response.status(200).json({ message: 'Welcome to signup page.'});
    } catch (error) {
        console.log(error);
    }
}

const login = async (request, response) => {
    try {
        response.status(200).json({ message: 'Welcome to login page.'});
    } catch (error) {
        console.log(error);
    }
}

export { 
    signup,
    login 
}