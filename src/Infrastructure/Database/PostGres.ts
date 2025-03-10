import config from '@application/Config/config';
// import mysql, { Pool, PoolConnection, PoolOptions } from 'mysql2/promise';
import { Pool, PoolClient, ConnectionConfig } from 'pg';

export type QueryParams = string | number | boolean | undefined;

export interface IDatabase {
    getConnection(): Promise<PoolClient>;
    execute(query: string, params?: QueryParams[]): Promise<any[]>;
}

export class Database implements IDatabase {
    private connection: Pool;
    private connectionObject: ConnectionConfig = {
        host: config.DATABASE.host,
        user: config.DATABASE.user,
        password: config.DATABASE.password,
        database: config.DATABASE.database,
        port: config.DATABASE.port,
    };

    constructor() {
        this.connection = new Pool(this.connectionObject);
    }

    async getConnection(): Promise<PoolClient> {
        return await this.connection.connect();
    }

    async execute(query: string, params: QueryParams[] = []): Promise<any[]> {
        const { rows } = await this.connection.query(query, params);
        return rows.constructor === Array ? rows : [rows];
    }
}
