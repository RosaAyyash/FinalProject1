import { SET_MESSAGE } from "../actions/messageAction";

const initialState = { messageType: "", messageText: "" };
const MessageReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return {
        messageType: payload.messageType,
        messageText: payload.messageText,
      };
    default:
      return state;
  }
};

export default MessageReducer;
