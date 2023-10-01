import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompartmentData {
  id: string;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
}

interface CompartmentState {
  data: CompartmentData[];
}

const initialState: CompartmentState = {
  data: [],
};

const compartmentSlice = createSlice({
  name: 'compartments',
  initialState,
  reducers: {
    addDataToCompartment: (
      state,
      action: PayloadAction<CompartmentData>
    ) => {
      state.data.push(action.payload);
    },
    clearAllData: (state) => {
      state.data = [];
    },
    // Add more reducer actions as needed
    editDataInCompartment: (
      state,
      action: PayloadAction<{ id: string; newData: CompartmentData }>
    ) => {
      const { id, newData } = action.payload;
      const index = state.data.findIndex(entry => entry.id === id);
      if (index !== -1) {
        state.data[index] = { ...newData, id }; // Update data with new values and same id
      }
    },

    deleteDataFromCompartment: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(entry => entry.id !== action.payload);
    },

  },
});

export const { addDataToCompartment, clearAllData, editDataInCompartment, deleteDataFromCompartment } = compartmentSlice.actions;

export default compartmentSlice.reducer;