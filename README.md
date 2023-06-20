# DiscordTSX
 Discord bot with TSX syntax

``npm i swyft-discordtsx``

```tsx
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
```

## ToDo

+ enable stuff like AuthorUsername in places like author name, footer text and button response
+ completing button functionality (stuff like adding url, emoji, disabled, visible only to command author, etc)
+ Events such as creating channels or joining VoiceChat, etc
+ Actions such as banning or kicking a user, adding or removing a role, etc