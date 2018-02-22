let login = (username, password) => {
    if(username !== 'admin' || password !== 'test') {
        console.log('Incorrect login !!');
    }
};

export {login}