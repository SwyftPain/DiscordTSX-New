import React, { useEffect, useContext } from "react";
import client from "../context/client";
import { DiscordContext } from "../context/discord";
import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedAuthorOptions,
  EmbedBuilder,
  Interaction,
  Message,
} from "discord.js";
import { Embed, Button, Text, EmbedField, EmbedFooter } from "./";
import { AuthorUsername, AuthorAvatar, Author } from "../shortcuts";
import EmbedAuthor from "./EmbedAuthor";

interface ICommand {
  /**
   * Command name
   */
  name: string;
  children: React.ReactNode;
}

/**
 * Command component
 * @param props Command props
 * @param props.name Command name
 */
const Command = (props: ICommand): JSX.Element => {
  const { children, name } = props;
  const { prefix } = useContext(DiscordContext);

  useEffect(() => {
    client.on("messageCreate", async (msg) => {
      if (msg.author.bot) return;
      if (!msg.content.startsWith(prefix)) return;

      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const commandName = args.shift()?.toLowerCase();

      let text: string = "";
      let embedShow: any[] = [];
      let embedFields: any[] = [];
      let button: any[] = [];
      let hasEmbed = false;
      let hasButtons = false;

      let embedAuthor = {} as any;
      let embedFooter = {} as any;

      if (commandName === name) {
        React.Children.forEach(children, (child) => {
          if (!React.isValidElement(child)) {
            throw new Error(
              "Children of the command component must be components!"
            );
          }

          if (child.type === Button) {
            button.push({ ...child.props });
            hasButtons = true;
          }

          if (child.type === Text) {
            const toMap = Array.isArray(child.props.children)
              ? child.props.children.map((d: any) => {
                  if (d === AuthorUsername) {
                    d = d(msg);
                  }
                  if (d === Author) {
                    d = d(msg);
                  }
                  return d;
                })
              : child.props.children;

            text += Array.isArray(child.props.children)
              ? toMap.join("")
              : toMap;
          }

          if (child.type === Embed) {
            hasEmbed = true;
            let myEmbed: any = {
              title: child.props.title,
              thumbnail:
                child.props.thumbnail === AuthorAvatar
                  ? child.props.thumbnail(msg)
                  : child.props.thumbnail,
              color: child.props.color,
              image:
                child.props.image === AuthorAvatar
                  ? child.props.image(msg)
                  : child.props.image ?? null,
              url: child.props.url ?? null,
              timestamp: child.props.timestamp ?? false,
            };

            let meee = AuthorUsername as any

            if (Array.isArray(child.props.children)) {
              const description = child.props.children
                .map((childChild: any) => {
                  if (childChild === AuthorUsername) {
                    return meee(msg); // Render the AuthorUsername component
                  } else if (typeof childChild === "string") {
                    return childChild;
                  } else {
                    return null;
                  }
                })
                .filter((childChild: any) => childChild !== null)
                .join("");
          
              myEmbed.description = description;
            } else if (typeof child.props.children === "string") {
              myEmbed.description = child.props.children;
            } else {
              myEmbed.description = null;
            }

            if (Array.isArray(child.props.children)) {
              const fields = child.props.children.map((childChild: any) => {
                if (typeof childChild === "string") return;
                if (childChild.type === EmbedField)
                  embedFields.push({
                    name: childChild.props.name,
                    value: childChild.props.value,
                    inline: childChild.props.inline,
                  });

                if (childChild.type === EmbedAuthor) {
                  const myIconUrl =
                    childChild.props.iconURL === AuthorAvatar
                      ? childChild.props.iconURL(msg)
                      : childChild.props.iconURL ?? null;
                  embedAuthor!.name = childChild.props.name;
                  embedAuthor!.url = childChild.props.url;
                  embedAuthor!.iconURL = myIconUrl;
                }

                if (childChild.type === EmbedFooter) {
                  const myIconUrl =
                    childChild.props.iconURL === AuthorAvatar
                      ? childChild.props.iconURL(msg)
                      : childChild.props.iconURL ?? null;
                  embedFooter!.text = childChild.props.text;
                  embedFooter!.iconURL = myIconUrl;
                }
              });

              if (fields.length > 0) myEmbed.fields = fields;
            }
            embedShow.push(myEmbed);
          }
        });

        let messageObject: any = {};

        if (text.length > 0) messageObject.content = text;
        if (hasEmbed) {
          const embed = new EmbedBuilder();
          embed.setTitle(`${embedShow[0].title}`);
          embed.setColor(embedShow[0].color);
          embed.setDescription(embedShow[0].description);
          embed.setThumbnail(embedShow[0].thumbnail);
          embed.addFields(embedFields);
          if (Object.values(embedAuthor).length > 0)
            embed.setAuthor(embedAuthor);
          if (Object.values(embedFooter).length > 0)
            embed.setFooter(embedFooter);
          embed.setImage(embedShow[0].image);
          embed.setTimestamp(embedShow[0].timestamp ?? false);
          embed.setURL(embedShow[0].url);

          messageObject.embeds = [embed];
        }

        if (hasButtons && button.length > 0) {
          const row = new ActionRowBuilder();

          button.forEach((button) => {
            const btn = new ButtonBuilder();
            btn.setCustomId(button.customId);
            btn.setLabel(button.label);
            btn.setStyle(button.style);
            row.addComponents(btn);
          });

          messageObject.components = [row];
        }

        msg.reply(messageObject).then((message) => {
          const filter = (i: Interaction) => i.isButton();
          const collector = message.createMessageComponentCollector({
            filter,
          });

          collector.on("collect", (i) => {
            if (button.length > 0) {
              button.forEach((button) => {
                if (button.customId === i.customId) {
                  i.reply(button.children.props.children);
                }
              });
            }
          });

          collector.on("end", () => {
            return;
          });
        });
      }
    });
  }, []);

  return null as unknown as JSX.Element;
};

export default Command;
