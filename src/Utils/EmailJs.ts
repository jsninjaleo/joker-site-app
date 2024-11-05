import emailjs from "emailjs-com";

export async function sendWelcomeEmail(form: any) {
    try {
        const result = await emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID || "",
            process.env.REACT_APP_TEMPLATE_ID || "",
            form,
            process.env.REACT_APP_PUBLIC_KEY || ""
        );

        if (result.status === 200) return true;
        else return false;
    } catch (error) {
        return false;
    }
}
