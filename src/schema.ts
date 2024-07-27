import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"; // Correct import for boolean

export const users = sqliteTable("users", {
    userId: text("userId").notNull().primaryKey(),
    COPS: integer('COPS', { mode: 'boolean' }).default(false),
    theQuantClub: integer('theQuantClub', { mode: 'boolean' }).default(false),
    bizClub: integer('bizClub', { mode: 'boolean' }).default(false),
    SAE: integer('SAE', { mode: 'boolean' }).default(false),
    AMC: integer('AMC', { mode: 'boolean' }).default(false),
    astroClub: integer('astroClub', { mode: 'boolean' }).default(false),
    csi: integer('csi', { mode: 'boolean' }).default(false),
    robotics: integer('robotics',{ mode: 'boolean'}).default(false)
});
