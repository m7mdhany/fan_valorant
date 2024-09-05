import { createSlice } from '@reduxjs/toolkit'
const fetcherSlice = createSlice({
  name: 'fetcherSlice',
  initialState: {
    agents: null,
    agent: null,
    desc: '',
    maps: null,
    map: null,
    mapSlider: 'left-0',
    gear: null,
    weapons: null,
    gearDetails: null,
    showDetails: 'hidden',
    slideDetails: '!left-0'
  },
  reducers: {
    fetcher: (state, { payload }) => {
      state.agents = payload.agents
      state.maps = payload.maps
      state.gear = payload.gear
      state.weapons = payload.weapons
    },
    change_agent: (state, { payload }) => {
      state.agent = payload
    },
    change_desc: (state, { payload }) => {
      state.desc = payload
    },
    change_map: (state, { payload }) => {
      state.map = payload
    },
    change_mapSlider: (state, { payload }) => {
      state.mapSlider = payload
    },
    change_gearDetails: (state, { payload }) => {
      state.gearDetails = payload.gearDetails
      state.showDetails = payload.showDetails
    },
    change_slideDetails: (state, { payload }) => {
      state.slideDetails = payload
    },
  }
})

export const { fetcher, change_agent, change_desc, change_map, change_gearDetails, change_slideDetails, change_mapSlider } = fetcherSlice.actions
export default fetcherSlice.reducer