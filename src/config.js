module.exports = {
    server_dev: 8080,
    server_http: 80,
    server_https: 443,
    db_url: 'mongodb://localhost:27017/users',
    db_schemas: [{
            file: './user_schema',
            collection: 'user',
            schemaName: 'UserSchema',
            modelName: 'UserModel'
        },
        {
            file: './report_schema',
            collection: 'reports',
            schemaName: 'ReportSchema',
            modelName: 'ReportModel'
        }
    ]
};