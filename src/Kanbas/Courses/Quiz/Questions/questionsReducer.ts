import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  _id?: string;
  title: string;
  questionType: string;
  points: number;
  question: string;
  options: string[];
  answers: string[];
}

interface QuestionsState {
  questions: Question[];
  question: Question | null;
}

const initialState: QuestionsState = {
  questions: [],
  question: null,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    addQuestion(state, action) {
      state.questions = [action.payload, ...state.questions];
    },
    updateQuestion(state, action) {
      const index = state.questions.findIndex(q => q._id === action.payload._id);
      if (index !== -1) {
        state.questions[index] = action.payload; 
      }
    },
    deleteQuestion(state, action) {
      state.questions = state.questions.filter(q => q._id !== action.payload);
    },
    selectQuestion(state, action) {
      state.question = action.payload;
    },
  },
});

export const { addQuestion, deleteQuestion, updateQuestion, selectQuestion, setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
