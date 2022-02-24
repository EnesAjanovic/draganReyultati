import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'football',
    matches: [
        {
            id: 1,
            league: 'English Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 2,
            league: 'English Premier League',
            homeTeam: 'Liverpool',
            awayTeam: 'Norwich',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 3,
            league: 'English Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 4,
            league: 'English Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 5,
            league: 'English Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 6,
            league: 'English Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 7,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 8,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 9,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 10,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 11,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 12,
            league: 'Bosnian Premier League',
            homeTeam: 'Newcastle',
            awayTeam: 'Crystal Palace',
            category: 'football',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },

        {
            id: 13,
            league: 'Bosna',
            homeTeam: 'Zrinjski',
            awayTeam: 'Široki',
            category: 'basketball',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        },
        {
            id: 14,
            league: 'Bosna',
            homeTeam: 'Zrinjski',
            awayTeam: 'Široki',
            category: 'basketball',
            homeScore: '-',
            awayScore: '-',
            matchStart: '21:00'
        }
    ]
}

const footballSlice = createSlice({
        name: 'creator',
        initialState,
        reducers: {
            getCategory(state, action) {
                state.selectedCategory = action.payload
            }

        }
    }
)

export const {getCategory} = footballSlice.actions

export default footballSlice.reducer