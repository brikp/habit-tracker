import habits, { addHabit, deleteHabit, completeHabitOn, uncompleteHabitOn } from './habitsSlice';

test('should handle initial state', () => {
  expect(habits(undefined, {})).toEqual([]);
});

test('should handle addHabit action', () => {
  expect(habits([], addHabit('First habit', 1))).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        }
      ],
      addHabit('Second habit', 4)
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    },
    {
      name: 'Second habit',
      timesPerDay: 4,
      id: 1,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        },
        {
          name: 'Second habit',
          timesPerDay: 4,
          id: 1,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        }
      ],
      addHabit('Third habit', 2)
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    },
    {
      name: 'Second habit',
      timesPerDay: 4,
      id: 1,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    },
    {
      name: 'Third habit',
      timesPerDay: 2,
      id: 2,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    }
  ]);
});

test('should handle deleteHabit action', () => {
  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        },
        {
          name: 'Second habit',
          timesPerDay: 4,
          id: 1,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        },
        {
          name: 'Third habit',
          timesPerDay: 2,
          id: 2,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        }
      ],
      deleteHabit(1)
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    },
    {
      name: 'Third habit',
      timesPerDay: 2,
      id: 2,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        },
        {
          name: 'Second habit',
          timesPerDay: 4,
          id: 1,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        },
        {
          name: 'Third habit',
          timesPerDay: 2,
          id: 2,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        }
      ],
      deleteHabit(2)
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    },
    {
      name: 'Second habit',
      timesPerDay: 4,
      id: 1,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: {}
    }
  ]);
});

test('should handle completeHabitOn action', () => {
  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: {}
        }
      ],
      completeHabitOn({ id: 0, dateKey: '01/10/2020' })
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: { '01/10/2020': 1 }
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: { '01/10/2020': 1 }
        }
      ],
      completeHabitOn({ id: 0, dateKey: '01/10/2020' })
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: { '01/10/2020': 2 }
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: { '01/10/2020': 2 }
        }
      ],
      completeHabitOn({ id: 0, dateKey: '22/10/2020' })
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: { '01/10/2020': 2, '22/10/2020': 1 }
    }
  ]);
});

test('should handle uncompleteHabitOn action', () => {
  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: { '01/10/2020': 2, '22/10/2020': 1 }
        }
      ],
      uncompleteHabitOn({ id: 0, dateKey: '01/10/2020' })
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: { '01/10/2020': 1, '22/10/2020': 1 }
    }
  ]);

  expect(
    habits(
      [
        {
          name: 'First habit',
          timesPerDay: 1,
          id: 0,
          repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
          datesCompletedOn: { '01/10/2020': 1, '22/10/2020': 1 }
        }
      ],
      uncompleteHabitOn({ id: 0, dateKey: '01/10/2020' })
    )
  ).toEqual([
    {
      name: 'First habit',
      timesPerDay: 1,
      id: 0,
      repeatOnDates: [0, 1, 2, 3, 4, 5, 6],
      datesCompletedOn: { '22/10/2020': 1 }
    }
  ]);
});
