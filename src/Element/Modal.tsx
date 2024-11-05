import Close from "../Assets/Img/close.svg";
import { sendWelcomeEmail } from "../Utils/EmailJs";

interface ModalProps {
    toggleModal: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        await sendWelcomeEmail(form);
        props.toggleModal();
    };

    return (
        <div className="fixed top-0 w-full h-screen bg-black bg-opacity-70 z-50 overflow-hidden">
            <div className="mt-10 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="sm:w-1/3 w-2/3 rounded-md bg-white p-4"
                >
                    <div className="flex justify-between items-center pb-4">
                        <p className="text-lg font-bold">Send Email</p>
                        <div
                            className="flex justify-center items-center cursor-pointer hover:bg-gray-300 w-6 h-6 rounded-full"
                            onClick={props.toggleModal}
                        >
                            <img
                                src={Close}
                                className="h-full w-full"
                                alt="Close"
                            />
                        </div>
                    </div>
                    <div className="py-10 border-y border-gray-300 ">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full text-base font-normal p-2 border rounded-md border-gray-300"
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex justify-between pt-4">
                        <button
                            type="submit"
                            className="bg-blue-700 rounded-md text-base text-white p-2"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="bg-header_button rounded-md text-base text-white p-2"
                            onClick={props.toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
