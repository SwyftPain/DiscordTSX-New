import { Message } from "discord.js";

const AuthorAvatar = (msg: Message) => msg.author.displayAvatarURL()

export default AuthorAvatar as unknown as React.ReactNode