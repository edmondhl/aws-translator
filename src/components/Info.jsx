import { useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";

function Info({ setInput }) {
    const [show, setShow] = useState(false);
    const presetMessages = [
        "Translate to {lang} : {text}",
        "What language is this: {text}",
        "Teach me basic phrases in {lang}",
        "Give me common {category} phrases in {lang}"
    ];

    return (
        <div>
            <div className="fixed bottom-[80px] left-[347px]">
                {show && (
                    <div className="relative mb-2 w-[250px] p-3 bg-white dark:bg-gray-800 text-md rounded-lg shadow-lg border dark:border-gray-700">
                        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-l border-b border-gray-300 dark:border-gray-700"></div>
                        <div className="space-y-2">
                            {presetMessages.map((msg, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setInput(msg)}
                                    className="w-full text-left px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                                >
                                    {msg}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="fixed bottom-[18px] left-[450px]">
                <button onClick={() => setShow(!show)}>
                    <RxQuestionMarkCircled className="w-11 h-11 text-black dark:text-white hover:scale-110 transition-transform" />
                </button>
            </div>
        </div>
    );
}

export default Info;