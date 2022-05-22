import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.js', 'dist/src/forms/form.entity.js'],
    synchronize: true,
};

export default config;
