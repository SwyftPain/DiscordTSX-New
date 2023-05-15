import React, { useEffect } from "react";
import { DiscordContext } from "../context/discord";
import client from '../context/client'

interface ICommand {
  token: string;
  prefix: string;
  children: React.ReactNode;
}

const Discord = (props: ICommand) => {
  const { children, token, prefix } = props;

  useEffect(() => {
    client.on('ready', () => {
        console.log("Bot is online!")
    })

    client.login(token)
  }, [])

  return (
    <DiscordContext.Provider value={{ token: token, prefix: prefix }}>
        {children}
    </DiscordContext.Provider>
  )
};

export default Discord;
