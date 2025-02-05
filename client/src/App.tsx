import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Nav from "@/components/Nav";
import './index.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routerr() {
  return (
      <Router>
          <Routes>
              {/* Используем 'element' вместо 'component' */}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Routerr />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
