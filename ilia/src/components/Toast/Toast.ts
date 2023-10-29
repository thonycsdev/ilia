import { toast } from "react-toastify";

function Toast() {
	function successToast(text: string) {
		toast.success(text, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	function failToast(text: string) {
		toast.error(text, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	return { successToast, failToast };
}

export default Toast;
