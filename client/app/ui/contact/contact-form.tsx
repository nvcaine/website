import { ReactElement } from 'react';

export default function ContactForm(): ReactElement {
    return (
        <form>
            <div className="mb-5">
                <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    placeholder="Email"
                    required
                />
            </div>

            <div className="mb-5">
                <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md bg-white/20 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    placeholder="Message"
                ></textarea>
            </div>

            <div className="flex flex-row-reverse">
                <button
                    type="submit"
                    className="max-sm:block max-sm:w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Send
                </button>
            </div>
        </form>
    );
}
