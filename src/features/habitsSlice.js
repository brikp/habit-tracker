import { createSlice } from '@reduxjs/toolkit';

let nextHabitId = -1;

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    addHabit: {
      reducer(state, action) {
        const { id, name, repeatOnDates, timesPerDay } = action.payload;
        state.push({ id, name, repeatOnDates, timesPerDay, datesCompletedOn: {} });
      },
      prepare(name, timesPerDay) {
        nextHabitId += 1;
        return { payload: { name, timesPerDay, id: nextHabitId, repeatOnDates: [0, 1, 2, 3, 4, 5, 6] } };
      }
    },
    deleteHabit(state, action) {
      const idToDelete = state.find(habit => habit.id === action.payload).id;
      state.splice(idToDelete, 1);
    },
    completeHabitOn(state, action) {
      const { id, dateKey } = action.payload;
      const { datesCompletedOn } = state.find(habit => habit.id === id);
      if (Object.keys(datesCompletedOn).includes(dateKey)) {
        datesCompletedOn[dateKey] += 1;
      } else {
        datesCompletedOn[dateKey] = 1;
      }
    },
    uncompleteHabitOn(state, action) {
      const { id, dateKey } = action.payload;
      const { datesCompletedOn } = state.find(habit => habit.id === id);
      if (Object.keys(datesCompletedOn).includes(dateKey)) {
        datesCompletedOn[dateKey] -= 1;
        if (datesCompletedOn[dateKey] === 0) {
          delete datesCompletedOn[dateKey];
        }
      }
    }
  }
});

export const { addHabit, deleteHabit, completeHabitOn, uncompleteHabitOn } = habitsSlice.actions;

export default habitsSlice.reducer;
