// habits context
import { createContext, useContext, useEffect, useState } from "react";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  // mock data for habits

  // state to manage habits and modal visibility
  const [habits, setHabits] = useState(JSON.parse(localStorage.getItem("habits")) || [
    {
      id: 1,
      name: "Exercise",
      description: "30 minutes of exercise daily",
    },
    {
      id: 2,
      name: "Read",
      description: "Read 20 pages of a book daily",
    },
    {
      id: 3,
      name: "Meditate",
      description: "10 minutes of meditation daily",
    },
  ]);
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  const [showModal, setShowModal] = useState(false);
  const [formInput, setFormInput] = useState(
    {
      name: "",
      description: "",
    }
  );
  const [editingHabit, setEditingHabit] = useState(null);
  const [showToast, setShowToast] = useState(false);


  // add new habit

  function addNewHabit(e) {
    e.preventDefault();
    if (!formInput.name || !formInput.description) {
      alert("Please fill in all fields");
      return;
    }
    const newHabit = {
      id: habits.length + 1,
      name: formInput.name,
      description: formInput.description,
    };
    setHabits(prev => [...prev, newHabit]);
    setFormInput({
      name: "",
      description: "",
    });
    setShowModal(false);
    setShowToast(true);
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }
  function startEditHabit(habit) {
    setEditingHabit(habit);
    setFormInput({ name: habit.name, description: habit.description });
    setShowModal(true);
  }
  function cancelEditHabit() {
    setEditingHabit(null);
    setFormInput({ name: '', description: '' });
    setShowModal(false);
  }
  function updateHabit(e) {
    e.preventDefault();
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === editingHabit.id
          ? { ...habit, name: formInput.name, description: formInput.description }
          : habit
      )
    );
    setEditingHabit(null);
    setFormInput({ name: '', description: '' });
    setShowModal(false);
  }


  return (
    <HabitsContext.Provider
      value={{ habits, setHabits, showModal, setShowModal, addNewHabit, formInput, handleInputChange, deleteHabit, editingHabit, startEditHabit, cancelEditHabit, updateHabit, showToast, setShowToast }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => {
  return useContext(HabitsContext);
};
