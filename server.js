export const sqlConfig = {
    server: '192.168.224.167',
    port: 1433,
    user: 'sa',
    password: 'Rm2785',
    database: 'senai',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}