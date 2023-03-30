import { createContext, ReactNode, useContext, useState } from "react"

interface IChatContext {
  viewedChats: string[];
  handleViewChat: (chatId: string) => void;
}

const chatContextDefaultValues: IChatContext = {
  viewedChats: [],
  handleViewChat: () => { return }
}

const ChatContext = createContext<IChatContext>(
  chatContextDefaultValues
)

export function useChatContext(): IChatContext {
  return useContext(ChatContext)
}

type Props = {
  children: ReactNode
}

export function ChatProvider({ children }: Props): JSX.Element {
  const [viewedChats, setViewedChats] = useState<string[]>([])


  const handleViewChat = (chatId: string) => {
    setViewedChats((oldValues) => {
      if (!oldValues?.includes(chatId)) {
        return [...oldValues, chatId]
      }
      return oldValues
    })
  }

  const value = {
    viewedChats,
    handleViewChat
  }

  return (
    <>
      <ChatContext.Provider value={value}>
        {children}
      </ChatContext.Provider>
    </>
  )
}