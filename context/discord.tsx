import React, { createContext } from "react";

interface Context {
    prefix: string
    token: string
}

export const DiscordContext = createContext<Context>({prefix: "!", token: ""})
