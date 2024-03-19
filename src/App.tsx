import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/test_app" element={<PostsList />} />
            <Route path="/post/:postId" element={<PostDetails />} />
          </Routes>
        </Router>
      </QueryClientProvider>
  );
}

export default App;
