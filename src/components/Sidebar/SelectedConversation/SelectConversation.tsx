import { Skeleton } from "@mui/material";
import { BsCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

import { useLastMessage, useUserStore, useUsersInfo } from "../../../hooks";
import { ConversationInfoType, IMAGE_PROXY } from "../../../library";
import {
  Flex,
  Name,
  LastMessage,
  Notify,
  Relative,
  ImagePrimary,
  ImageSecondary,
  Image,
} from "./Style";

const DEFAULT = "/user.png";
const fallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.target as HTMLImageElement).src = DEFAULT;
};
const safeImg = (url?: string) => (url ? IMAGE_PROXY(url) : DEFAULT);

type SelectConversationProps = {
  theme: string | null;
  conversation: ConversationInfoType;
  conversationId: string;
};

export function SelectConversation({
  theme,
  conversation,
  conversationId,
}: SelectConversationProps) {
  const { data: users, loading } = useUsersInfo(conversation.users);
  const currentUser = useUserStore((state) => state.currentUser);

  const filtered = users?.filter((user) => user.id !== currentUser?.uid);

  const { id } = useParams();

  const { data: lastMessage, loading: lastMessageLoading } =
    useLastMessage(conversationId);

  if (loading && theme)
    return (
      <Flex theme={theme}>
        <Skeleton
          variant="circular"
          width={50}
          height={50}
          sx={{ mr: 1.5, flexShrink: 0, bgcolor: "#334155", borderRadius: "14px" }}
        />
        <div style={{ flex: 1 }}>
          <Skeleton width={100} height={14} sx={{ mb: 1, bgcolor: "#334155" }} variant="rectangular" />
          <Skeleton variant="rectangular" width={140} height={12} sx={{ bgcolor: "#1e293b" }} />
        </div>
      </Flex>
    );

  // Duo Conversation
  if (conversation.users.length === 2 && theme)
    return (
      <Link to={`/${conversationId}`} style={{ textDecoration: "none" }}>
        <Flex theme={theme} className={conversationId === id ? "active" : "not-active"}>
          <Image
            src={safeImg(filtered?.[0]?.data()?.photoURL)}
            onError={fallback}
            alt=""
          />
          <Relative>
            <Name theme={theme}>{filtered?.[0].data()?.displayName}</Name>
            {lastMessageLoading ? (
              <Skeleton width={100} height={12} variant="rectangular" sx={{ bgcolor: "#1e293b" }} />
            ) : (
              <LastMessage theme={theme}>{lastMessage?.message}</LastMessage>
            )}
          </Relative>
          {!lastMessageLoading &&
            lastMessage?.lastMessageId !== null &&
            lastMessage?.lastMessageId !== conversation.seen[currentUser?.uid as string] && (
              <Notify><BsCircleFill /></Notify>
            )}
        </Flex>
      </Link>
    );

  // Group Conversation
  return (
    <Link to={`/${conversationId}`} style={{ textDecoration: "none" }}>
      {theme && (
        <Flex theme={theme} className={conversationId === id ? "active" : "not-active"}>
          {conversation?.group?.groupImage ? (
            <Image
              src={conversation.group.groupImage}
              onError={fallback}
              alt=""
            />
          ) : (
            <Relative style={{ marginLeft: "32px", marginRight: "12px" }}>
              <ImagePrimary
                src={safeImg(filtered?.[0]?.data()?.photoURL)}
                onError={fallback}
                alt=""
              />
              <ImageSecondary
                src={safeImg(filtered?.[1]?.data()?.photoURL)}
                onError={fallback}
                alt=""
              />
            </Relative>
          )}
          <Relative style={{ flex: 1, minWidth: 0, position: "static" }}>
            <Name theme={theme}>
              {conversation?.group?.groupName ||
                filtered
                  ?.map((user) => user.data()?.displayName)
                  .slice(0, 3)
                  .join(", ")}
            </Name>
            {lastMessageLoading ? (
              <Skeleton width={100} height={12} variant="rectangular" sx={{ bgcolor: "#1e293b" }} />
            ) : (
              <LastMessage theme={theme}>{lastMessage?.message}</LastMessage>
            )}
          </Relative>
          {!lastMessageLoading &&
            lastMessage?.lastMessageId !== null &&
            lastMessage?.lastMessageId !== conversation.seen[currentUser?.uid as string] && (
              <Notify><BsCircleFill /></Notify>
            )}
        </Flex>
      )}
    </Link>
  );
}
