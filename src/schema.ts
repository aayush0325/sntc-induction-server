import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    userId: text("userId").notNull().primaryKey(),
    clubs: text("clubs").notNull(),
});