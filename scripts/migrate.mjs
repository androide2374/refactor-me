import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import pg from 'pg';

const { Pool } = pg;

const DATABASE_URL = 'postgresql://postgres:drk88uKCkWikmBkL@db.ocrrhcibdpcuajyrjkvb.supabase.co:5432/postgres';

async function migrate() {
    const pool = new Pool({
        connectionString: DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        const sql = readFileSync(join(import.meta.dirname, '..', 'supabase', 'migrations', '001_weight_records.sql'), 'utf-8');
        console.log('Running migration...');
        await pool.query(sql);
        console.log('Migration complete.');
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

migrate();
