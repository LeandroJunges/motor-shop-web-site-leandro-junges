import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AnnouncementsProvider from "./context/AnnouncementContext";
import { UserProvider } from "./context/userContext";
import { CommentsProvider } from "./context/CommentsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnnouncementsProvider>
          <CommentsProvider>
            <App />
          </CommentsProvider>
        </AnnouncementsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
