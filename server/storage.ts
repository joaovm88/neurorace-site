import { type Player, type InsertPlayer, type Session, type Stats } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getPlayer(email: string): Promise<Player | undefined>;
  createPlayer(player: InsertPlayer): Promise<Player>;
  getPlayerSessions(email: string): Promise<Session[]>;
  getPlayerStats(email: string): Promise<Stats | undefined>;
}

export class MemStorage implements IStorage {
  private players: Map<string, Player>;
  private sessions: Map<string, Session[]>;
  private stats: Map<string, Stats>;

  constructor() {
    this.players = new Map();
    this.sessions = new Map();
    this.stats = new Map();
    
    // Mock data for testing
    //todo: remove mock functionality
    const testPlayer: Player = {
      email: "teste@email.com",
      phone: "(11) 99999-8888",
    };
    this.players.set("teste@email.com", testPlayer);
    
    const testSession: Session = {
      id: "sessao_teste_1",
      playerEmail: "teste@email.com",
      startedAt: new Date(),
      tzf: 0.75,
      cvfLabel: "estavel",
      ircLabel: "alto",
      lfoMean: 3.5,
      badges: { isTZFPB: true },
    };
    this.sessions.set("teste@email.com", [testSession]);
    
    const testStats: Stats = {
      playerEmail: "teste@email.com",
      tzfPB: 0.85,
      trzPBsec: 2.1,
      tzfSeries: [0.6, 0.75, 0.85],
    };
    this.stats.set("teste@email.com", testStats);
  }

  async getPlayer(email: string): Promise<Player | undefined> {
    return this.players.get(email);
  }

  async createPlayer(insertPlayer: InsertPlayer): Promise<Player> {
    const player: Player = { ...insertPlayer };
    this.players.set(player.email, player);
    return player;
  }

  async getPlayerSessions(email: string): Promise<Session[]> {
    return this.sessions.get(email) || [];
  }

  async getPlayerStats(email: string): Promise<Stats | undefined> {
    return this.stats.get(email);
  }
}

export const storage = new MemStorage();
