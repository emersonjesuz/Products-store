import { toast } from "react-toastify";

type NotifyTypes = "info" | "success" | "warning" | "default" | "error";

export default function notify(message: string, type: NotifyTypes) {
  toast(message, {
    position: "top-right",
    type: type,
    theme: "colored",
  });
}
