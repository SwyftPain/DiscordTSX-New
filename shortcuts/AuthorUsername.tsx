import { Message } from "discord.js";

const AuthorUsername = (msg: Message) => msg.author.username

export default AuthorUsername as unknown as React.ReactNode