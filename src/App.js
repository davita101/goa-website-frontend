import * as React from "react";
import Login from "./page/Login";
import { Route, Routes, } from "react-router-dom";
import NavigationRouter from "./page/NavigationRouter";
import { Toaster } from "./components/ui/sonner";
export default function App() {
    return (React.createElement("div", null,
        React.createElement("header", { className: "text-green-300 text-3xl font-bold p-2 absolute" }, "GOA"),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(React.Fragment, null) }),
            React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
            React.createElement(Route, { path: "/*", element: React.createElement(NavigationRouter, null) })),
        React.createElement(Toaster, null)));
}
