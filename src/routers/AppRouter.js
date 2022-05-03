import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BettorPage from "../components/BettorPage";
import Landing from "../components/Landing";
import GoalSetting from "../components/GoalSettingPage";
import NotFound from "../components/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";

const AppRouter = () => {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" exact element={ <Landing/> } />
                    <Route path="/dashboard" exact element={ <Dashboard/> } />
                    <Route path="/bet" exact element={ <BettorPage/> } />
                    <Route path="/goal" exact element={ <GoalSetting/> } />
                    <Route path="*" element={ <NotFound/> } />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default AppRouter;