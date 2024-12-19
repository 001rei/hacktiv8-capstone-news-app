  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import fetchNews from "../services/fetchNews";

  // action
  export const fetchArticles = createAsyncThunk(
    "news/fetchNews",
    async ({ query }) => {
      const data = await fetchNews(query);
      return data;
    }
  );

  // slice
  const newsSlice = createSlice({
    name: "news",
    initialState: {
      articles: [],
      savedArticles: [],
      loading: false,
      error: null,
    },
    reducers: {
      saveArticle: (state, action) => {
        const article = action.payload;
        if (!state.savedArticles.some((saved) => saved._id === article._id)) {
          state.savedArticles.push(article);
        }
      },
      unsaveArticle: (state, action) => {
        const articleId = action.payload;
        state.savedArticles = state.savedArticles.filter(
          (saved) => saved._id !== articleId
        );
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticles.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.articles = action.payload;
        })
        .addCase(fetchArticles.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default newsSlice.reducer;
  export const { saveArticle, unsaveArticle } = newsSlice.actions;
