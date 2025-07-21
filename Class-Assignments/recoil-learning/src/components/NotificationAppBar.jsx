import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "../atoms/atom";
import { useMemo } from "react";

function NotificationAppBar() {
  const myNetworkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCountSelector = useRecoilValue(
    totalNotificationSelector
  );

  const totalNotificationCount = useMemo(() => {
    return (
      myNetworkNotificationCount +
      jobsNotificationCount +
      messagingNotificationCount +
      notificationCount
    );
  }, [
    myNetworkNotificationCount,
    jobsNotificationCount,
    messagingNotificationCount,
    notificationCount,
  ]);

  function showNotification(notificationC) {
    if (notificationC <= 0) {
      return "";
    } else if (notificationC > 100) {
      return "99+";
    } else {
      return notificationC;
    }
  }

  return (
    <>
      <button>Home</button>

      <button>My Network {showNotification(myNetworkNotificationCount)}</button>
      <button>Jobs {showNotification(jobsNotificationCount)}</button>
      <button>Messaging {showNotification(messagingNotificationCount)}</button>
      <button>Notifications {showNotification(notificationCount)}</button>
      <Button />
      <button>Me Total={totalNotificationCountSelector}</button>
    </>
  );
}

function Button() {
  const setNotificationCount = useSetRecoilState(notificationAtom);
  return (
    <button onClick={() => setNotificationCount((prev) => prev + 1)}>
      Increase Notifications
    </button>
  );
}

export default NotificationAppBar;
