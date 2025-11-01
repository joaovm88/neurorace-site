import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, doublePrecision, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Schema para jogadores do NeuroRace
export const players = pgTable("players", {
  email: varchar("email").primaryKey(),
  phone: text("phone"),
});

export const sessions = pgTable("sessions", {
  id: varchar("id").primaryKey(),
  playerEmail: varchar("player_email").notNull().references(() => players.email),
  startedAt: timestamp("started_at").notNull(),
  tzf: doublePrecision("tzf").notNull(), // Time in Zone Focus
  cvfLabel: text("cvf_label").notNull(), // Consistência: "estavel" ou "oscilante"
  ircLabel: text("irc_label").notNull(), // Resiliência: "baixo", "medio", "alto"
  lfoMean: doublePrecision("lfo_mean"), // Nova métrica LFO
  badges: jsonb("badges"), // { isTZFPB: boolean, etc }
});

export const stats = pgTable("stats", {
  playerEmail: varchar("player_email").primaryKey().references(() => players.email),
  tzfPB: doublePrecision("tzf_pb"), // Recorde pessoal de TZF
  trzPBsec: doublePrecision("trz_pb_sec"), // Recorde de sequência de foco
  tzfSeries: doublePrecision("tzf_series").array(), // Histórico de TZF
});

export const insertPlayerSchema = createInsertSchema(players);
export const insertSessionSchema = createInsertSchema(sessions).omit({ id: true });
export const insertStatsSchema = createInsertSchema(stats);

export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type Player = typeof players.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Stats = typeof stats.$inferSelect;
