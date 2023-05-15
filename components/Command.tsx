import React, { useEffect } from "react";
import client from "../context/client";
import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  Interaction,
  Message,
} from "discord.js";
import { Embed, Button, Text, EmbedField } from "./";
import { AuthorUsername, AuthorAvatar } from "../shortcuts";

interface ICommand {
  name: string;
  children: React.ReactNode
}

const Command = (props: ICommand): JSX.Element => {
  const { children, name } = props;

  useEffect(() => {
    client.on("messageCreate", async (msg) => {
      if (msg.author.bot) return;

      let text: string = "";
      let embedShow: any[] = [];
      let embedFields: any[] = [];
      let button: any[] = [];
      let hasEmbed = false;
      let hasButtons = false;

      if (msg.content.toLowerCase() === name) {
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
            const toMap = Array.isArray(child.props.children) ? child.props.children.map((d: any) => {
              if(d === AuthorUsername) {
                d = d(msg);
              }
              return d;
            }) : child.props.children

            text += Array.isArray(child.props.children) ? toMap.join("") : toMap;
          }

          if (child.type === Embed) {
            hasEmbed = true;
            let myEmbed: any = {
              title: child.props.title,
              thumbnail: child.props.thumbnail === AuthorAvatar ? child.props.thumbnail(msg) : child.props.thumbnail,
              color: child.props.color,
            };

            if (
              Array.isArray(child.props.children) &&
              typeof child.props.children[0] === "string"
            ) {
              myEmbed.description = child.props.children[0];
            } else {
              if (typeof child.props.children === "string") {
                myEmbed.description = child.props.children;
              } else {
                myEmbed.description = null;
              }
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
