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
} from "./components";
import { AuthorAvatar, AuthorUsername, Author } from "./shortcuts";
import * as dotenv from "dotenv";
dotenv.config();

const App = () => {
  return (
    <Discord token={process.env.TOKEN!} prefix="!">
      <Command name="ping">
        <Text>Hi {Author}</Text>
        <Embed title="embed title" thumbnail={AuthorAvatar} color="Yellow">
          Some description
          <EmbedField name="field name 1" value="field value 1"></EmbedField>
          <EmbedField name="field name 1" value="field value 1"></EmbedField>
        </Embed>
        <Button customId="Twitch" label="Twitch" style="Primary">
          <ButtonResponse>Crazy</ButtonResponse>
        </Button>
        <Button customId="Youtube" label="Youtube" style="Danger">
          <ButtonResponse>Man</ButtonResponse>
        </Button>
      </Command>
    </Discord>
  );
};

export default App;
```