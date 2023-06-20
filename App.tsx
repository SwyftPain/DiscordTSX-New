import React from "react";
import {
  Command,
  Discord,
  Embed,
  EmbedField,
  Button,
  Text,
  ButtonResponse,
  EmbedAuthor,
  EmbedFooter,
} from "./components";
import { AuthorAvatar, AuthorUsername, Author } from "./shortcuts";
import * as dotenv from "dotenv";
dotenv.config();

const App = () => {
  return (
    <Discord token={process.env.TOKEN!} prefix="!">
      <Command name="ping">
        <Text>Hi {Author}</Text>
        <Embed
          title="embed title"
          thumbnail={AuthorAvatar}
          color="Yellow"
          timestamp={new Date()}
        >
          Some description
          <EmbedField name="field name 1" value="field value 1"></EmbedField>
          <EmbedField name="field name 1" value="field value 1"></EmbedField>
          <EmbedAuthor name="Author name" iconURL={AuthorAvatar}></EmbedAuthor>
          <EmbedFooter text="Footer text" iconURL={AuthorAvatar}></EmbedFooter>
        </Embed>
        <Button customId="Twitch" label="Twitch" style="Primary">
          <ButtonResponse>Twitch Button Response</ButtonResponse>
        </Button>
        <Button customId="YouTube" label="YouTube" style="Danger">
          <ButtonResponse>YouTube Button Response</ButtonResponse>
        </Button>
      </Command>
    </Discord>
  );
};

export default App;
