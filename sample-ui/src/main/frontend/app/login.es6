let login = (username, password) => {
    if(username !== 'admin' || password !== 'test') {
        console.log('Incorrect login !!');
    }
};

login('admin','pass');