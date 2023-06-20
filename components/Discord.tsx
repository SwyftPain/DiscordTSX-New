import React, { useEffect } from "react";
import { DiscordContext } from "../context/discord";
import client from "../context/client";

interface ICommand {
  /**
   * Discord bot token
   */
  token: string;
  /**
   * Discord bot prefix
   */
  prefix: string;
  children: React.ReactNode;
}

/**
 * Discord component (all children must be wrapped inside this component)
 * @param props Discordcomponent props
 * @param props.token Discord bot token
 * @param props.prefix Discord bot prefix
 */
const Discord = (props: ICommand) => {
  const { children, token, prefix } = props;

  useEffect(() => {
    client.on("ready", () => {
      console.log("Bot is online!");
    });

    client.login(token);
  }, []);

  return (
    <DiscordContext.Provider value={{ token: token, prefix: prefix }}>
      {children}
    </DiscordContext.Provider>
  );
};

export default Discord;
