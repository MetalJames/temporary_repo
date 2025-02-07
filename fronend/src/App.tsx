import { useCallback, useEffect } from "react";
import { fetchFromAPI, BASE_URL } from "./services/fetchMongo";
import useGame from "./hooks/useGame";
import { AppRoutes } from "./routes";
import { ErrorBoundary } from "./components/";

const App = () => {

  const { actions } = useGame();

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchFromAPI(BASE_URL);
      actions.setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }, [actions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;