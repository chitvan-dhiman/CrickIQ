import { db } from './firebase-config.js';

class DatabaseService {
    constructor() {
        this.db = db;
    }

    // ===== MATCHES =====
    async createMatch(matchData) {
        try {
            const matchRef = await this.db.collection('matches').add({
                ...matchData,
                status: 'created',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            return matchRef.id;
        } catch (error) {
            console.error('Error creating match:', error);
            throw error;
        }
    }

    async getMatch(matchId) {
        try {
            const doc = await this.db.collection('matches').doc(matchId).get();
            return doc.exists ? { id: doc.id, ...doc.data() } : null;
        } catch (error) {
            console.error('Error getting match:', error);
            throw error;
        }
    }

    async updateMatch(matchId, updates) {
        try {
            await this.db.collection('matches').doc(matchId).update({
                ...updates,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error('Error updating match:', error);
            throw error;
        }
    }

    async getMatches(limit = 50) {
        try {
            const snapshot = await this.db.collection('matches')
                .orderBy('createdAt', 'desc')
                .limit(limit)
                .get();
            
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error getting matches:', error);
            throw error;
        }
    }

    // ===== TEAMS =====
    async createTeam(teamData) {
        try {
            const teamRef = await this.db.collection('teams').add({
                ...teamData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                totalMatches: 0,
                wins: 0,
                losses: 0
            });
            
            return teamRef.id;
        } catch (error) {
            console.error('Error creating team:', error);
            throw error;
        }
    }

    async getTeam(teamId) {
        try {
            const doc = await this.db.collection('teams').doc(teamId).get();
            return doc.exists ? { id: doc.id, ...doc.data() } : null;
        } catch (error) {
            console.error('Error getting team:', error);
            throw error;
        }
    }

    async getTeams() {
        try {
            const snapshot = await this.db.collection('teams')
                .orderBy('name')
                .get();
            
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error getting teams:', error);
            throw error;
        }
    }

    async updateTeamStats(teamId, matchResult) {
        try {
            const team = await this.getTeam(teamId);
            const updates = {
                totalMatches: (team.totalMatches || 0) + 1,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            if (matchResult === 'win') {
                updates.wins = (team.wins || 0) + 1;
            } else if (matchResult === 'loss') {
                updates.losses = (team.losses || 0) + 1;
            }

            await this.db.collection('teams').doc(teamId).update(updates);