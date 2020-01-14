import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit(state, action) {
      const { id, name, repeatOnDates, timesPerDay } = action.payload;
      state.push({ id, name, repeatOnDates, timesPerDay, datesCompletedOn: {} });
    },
    completeHabitOn(state, action) {
      const { id, date } = action.payload;
      const { datesCompletedOn } = state.find(habit => habit.id === id);
      if (Object.prototype.hasOwnProperty.call(datesCompletedOn, date)) {
        datesCompletedOn[date] += 1;
      } else {
        datesCompletedOn[date] = 1;
      }
    },
    uncompleteHabitOn(state, action) {
      const { id, date } = action.payload;
      const { datesCompletedOn } = state.find(habit => habit.id === id);
      if (Object.prototype.hasOwnProperty.call(datesCompletedOn, date)) {
        datesCompletedOn[date] = datesCompletedOn[date] > 0 ? datesCompletedOn[date] - 1 : datesCompletedOn[date];
      }
    }
  }
});
