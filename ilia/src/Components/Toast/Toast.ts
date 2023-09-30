import { toast } from "react-toastify";

function Toast() {
	function successToast() {
		toast.success("Costumer created!", {
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

	return { successToast };
}

export default Toast;
