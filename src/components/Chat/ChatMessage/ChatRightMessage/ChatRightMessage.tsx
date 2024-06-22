/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect, Fragment } from "react";
import { BsReply } from "react-icons/bs";
import { FiSmile, FiTrash2 } from "react-icons/fi";
import { RiTranslate2 } from "react-icons/ri";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useTheme, useUserStore } from "../../../../hooks";
import {
  MessageItemType,
  ReplyInfoType,
  formatDate,
  formatFileSize,
  splitLinkFromMessage,
} from "../../../../library";
import { firebaseFirestore } from "../../../../firebase/firebaseConfig";
import { FileIcon } from "../../../Media/FileIcon";
import { ChatReplyBadge } from "../../ChatReplyBadge";
import { ChatReactionPopUp, ChatReactionStatus } from "../..";
import {
  RightMessageActions,
  RightMessageContainer,
  RightMessageFile,
  RightMessageImage,
  RightMessageRemoved,
  RightMessageTextLink,
  RightReplyMessage,
} from "./Style";
import { IoMdDownload } from "react-icons/io";
import { translateText } from '../../../Translate/translateService'; // import translate service
import { languages } from "../../../Translate/language";



type RightMessageProps = {
  message: MessageItemType;
  replyInfo: ReplyInfoType | null;
  setReplyInfo: (value: ReplyInfoType | null) => void;
};

export function ChatRightMessage({ message, setReplyInfo }: RightMessageProps) {
  const [isSelectReactionOpen, setIsSelectReactionOpen] = useState(false);
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { id: conversationId } = useParams();
  const currentUser = useUserStore(state => state.currentUser);
  const { theme } = useTheme();

  const formattedDate = formatDate(
    message.createdAt?.seconds ? message.createdAt?.seconds * 1000 : Date.now()
  );
   useEffect(() => {
    const loadTranslatedText = async () => {
      try {
        if (currentUser) {
          const docRef = doc(firebaseFirestore, "translatedMessages", message.id as string);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data)
            if (data.currentUserUid === currentUser.uid) {
              setTranslatedText(data.translatedText);
            } else {
              setTranslatedText(null); // Clear translated text if not for current user
            }
          } else {
            setTranslatedText(null);
          }
        }
      } catch (error) {
        console.error("Error loading translated text:", error);
      }
    };

    loadTranslatedText();
  }, [message.id, currentUser]);


  // Function to translate message using the actual API
  async function translateMessage(content: string, targetLang: string) {
    try {if(currentUser){
      const translatedContent = await translateText(content, 'auto', targetLang);
      setTranslatedText(translatedContent);
      const docRef = doc(firebaseFirestore, "translatedMessages", message.id as string);
      await setDoc(docRef, { translatedText: translatedContent,currentUserUid: currentUser.uid });
    }
    } catch (error) {
      console.error("Error translating message:", error);
      setTranslatedText("Translation error");
    }
  }

  // Function to remove a message
  const removeMessage = (messageId: string) => {
    updateDoc(
      doc(
        firebaseFirestore,
        "conversations",
        conversationId as string,
        "messages",
        messageId
      ),
      {
        type: "removed",
        file: null,
        content: "",
        reactions: [],
      }
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          translateY: "20px",
          opacity: 0,
        },
        visible: {
          translateY: "0px",
          opacity: 1,
          transition: {
            delay: 0.2,
            type: "spring",
            duration: 0.8,
          },
        },
      }}
    >
      <RightReplyMessage theme={theme} className="rightMessage__reply--badge">
        {!!message.replyTo && (
          <ChatReplyBadge messageId={message.replyTo as string} />
        )}
      </RightReplyMessage>
      <RightMessageContainer
        onClick={(event) => {
          if (event.detail === 2 && message.type !== "removed") {
            setReplyInfo(message as ReplyInfoType);
          }
        }}
      >
        {translatedText ? (
          <RightMessageTextLink onClick={(event) => event.stopPropagation()} title={formattedDate} theme={theme}>
            {translatedText}
          </RightMessageTextLink>
        ) : (
          <>
            {message.type === "text" ? (
              <RightMessageTextLink
                theme={theme}
                onClick={(event) => event.stopPropagation()}
              >
                {splitLinkFromMessage(message.content).map((item, index) => (
                  <Fragment key={index}>
                    {typeof item === "string" ? (
                      <span>{item}</span>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.link}
                      </a>
                    )}
                  </Fragment>
                ))}
              </RightMessageTextLink>
            ) : message.type === "image" ? (
              <RightMessageImage>
                <img
                  className="image"
                  title={formattedDate}
                  src={message.content}
                  alt=""
                />
              </RightMessageImage>
            ) : message.type === "file" ? (
              <RightMessageFile
                href={message.content}
                download
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                onClick={(event) => event.stopPropagation()}
              >
                <FileIcon
                  extension={message.file?.name.split(".").slice(-1)[0] as string}
                />
                <div>
                  <p>{message.file?.name}</p>
                  <p>{formatFileSize(message.file?.size as number)}</p>{" "}
                </div>
                <IoMdDownload />
              </RightMessageFile>
            ) : (
              <RightMessageRemoved
                onClick={(event) => event.stopPropagation()}
                title={formattedDate}
              >
                Message has been removed
              </RightMessageRemoved>
            )}
          </>
        )}
        {message.type !== "removed" && (
          <RightMessageActions theme={theme}>
            {isLanguageDropdownOpen && (
              <select
                onChange={(event) => {
                  const lang = event.target.value;
                  setSelectedLanguage(lang);
                  translateMessage(message.content, lang);
                }}
                value={selectedLanguage}
                onClick={(event) => event.stopPropagation()}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={(event) => {
                event.preventDefault();
                setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
              }}
            >
              <RiTranslate2 />
            </button>

            
            <button
              onClick={(event) => {
                setReplyInfo(message as ReplyInfoType);
                event.stopPropagation();
              }}
            >
              <BsReply />
            </button>

            <button
              onClick={() => setIsSelectReactionOpen(!isSelectReactionOpen)}
            >
              <FiSmile />
            </button>

            

            <button
              onClick={(event) => {
                removeMessage(message.id as string);
                event.stopPropagation();
              }}
            >
              <FiTrash2 />
            </button>
          </RightMessageActions>
        )}
        {isSelectReactionOpen && theme && (
          <ChatReactionPopUp
            theme={theme}
            position="right"
            isOpen={isSelectReactionOpen}
            setIsOpen={setIsSelectReactionOpen}
            messageId={message.id as string}
            currentReaction={
              message.reactions?.[currentUser?.uid as string] || 0
            }
          />
        )}
        {Object.keys(message.reactions || {}).length > 0 && (
          <ChatReactionStatus message={message} position="right" />
        )}
      </RightMessageContainer>
    </motion.div>
  );
}
