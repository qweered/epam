import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {reatomContext} from '@reatom/npm-react'
import {createCtx} from "@reatom/core";

const root = document.getElementById("root");
const rootElement = createRoot(root);
const ctx = createCtx()

rootElement.render(
        <reatomContext.Provider value={ctx}>
            <App/>
        </reatomContext.Provider>
);
