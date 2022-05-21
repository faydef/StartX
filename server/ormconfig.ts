import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: [
        'dist/src/**/*.entity.js',
        'dist/src/briefs/entities/brief.entity.js',
        'dist/src/users/entities/user.entity.js',
        'dist/src/chats/entities/chat.entity.js',
    ],
    synchronize: true,
};

export default config;
