/* eslint-disable no-unused-vars */
import { useMultiChatLogic,MultiChatSocket,MultiChatWindow } from "react-chat-engine-advanced"

const Chat = () => {
    const chatProps= useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Simoh",
        "1234"
    )
  return (
    <div>Chat</div>
  )
}

export default Chat