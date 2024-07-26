import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"; // Correct import for boolean

export const users = sqliteTable("users", {
    userId: text("userId").notNull().primaryKey(),
    cops: integer('COPS', { mode: 'boolean' }).default(false),
    theQuantClub: integer('theQuantClub', { mode: 'boolean' }).default(false),
    bizClub: integer('bizClub', { mode: 'boolean' }).default(false),
    sae: integer('SAE', { mode: 'boolean' }).default(false),
    amc: integer('AMC', { mode: 'boolean' }).default(false),
    astro: integer('astroClub', { mode: 'boolean' }).default(false),
    csi: integer('csi', { mode: 'boolean' }).default(false)
});
