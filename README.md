# Habit tracker

Habit tracker app built with React and Vite. This application allows users to create, track, and manage their daily habits, helping them build positive routines over time.

## Key Functions

### Add a Habit

```javascript
// Add a new habit to the list
function addHabit(name) {
  setHabits([...habits, { name, completed: false }]);
}
```

### Toggle Habit Completion

```javascript
// Toggle the completion status of a habit
function toggleHabit(index) {
  setHabits(
    habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    )
  );
}
```

### List Habits

```javascript
// Render the list of habits
habits.map((habit, index) => (
  <div key={index}>
    <span>{habit.name}</span>
    <button onClick={() => toggleHabit(index)}>
      {habit.completed ? "Completed" : "Incomplete"}
    </button>
  </div>
));
```



