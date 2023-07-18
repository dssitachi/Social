import { toast } from "react-toastify";

export function displayToast(type, message) {
    if (type == "success") {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    } else if (type == "error") {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    } else {
        toast.info(message, {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    }
}
