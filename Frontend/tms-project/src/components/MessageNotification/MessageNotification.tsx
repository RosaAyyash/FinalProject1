import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type MessageNotificationProp = {
  messageType: string;
  messageText: string;
};
function MessageNotification(props: MessageNotificationProp) {
  const notify = (messageType: string, messageText: string) => {
    if (messageType === "success") {
      toast.success(messageText);
    } else if (messageType === "error") {
      toast.error(messageText);
    }
  };
  return (
    <>
      {notify(props.messageType, props.messageText)}

      <ToastContainer limit={1} pauseOnFocusLoss={false} />
    </>
  );
}

export default MessageNotification;
