module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'crdb',
            user:     '',
            password: ''
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            process.env.DATABASE_URL
        }
    }
};