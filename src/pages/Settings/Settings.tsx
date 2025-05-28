import React, {useEffect, useState} from "react"

const Settings: React.FC = () => {
        const [darkTheme, setDarkTheme] = useState(false);
        const [checked, setChecked] = useState(false);
        const [text, setText] = useState('');

        // Меняем класс на body при смене темы
        useEffect(() => {
            if (darkTheme) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
        }, [darkTheme]);

        return (
            <form className="p-6 max-w-md mx-auto space-y-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
                {/* Переключатель темы */}
                <div className="flex items-center justify-between">
                    <label htmlFor="themeSwitch" className="text-gray-700 dark:text-gray-200">
                        Dark Theme
                    </label>
                    <input
                        id="themeSwitch"
                        type="checkbox"
                        checked={darkTheme}
                        onChange={() => setDarkTheme(!darkTheme)}
                        className="cursor-pointer"
                    />
                </div>

                {/* Чекбокс */}
                <div className="flex items-center space-x-2">
                    <input
                        id="checkbox1"
                        type="checkbox"
                        checked={checked}
                        onChange={e => setChecked(e.target.checked)}
                        className="cursor-pointer"
                    />
                    <label htmlFor="checkbox1" className="text-gray-700 dark:text-gray-200">
                        Accept Terms
                    </label>
                </div>

                {/* Текстовое поле */}
                <div>
                    <label htmlFor="textInput" className="block mb-1 text-gray-700 dark:text-gray-200">
                        Your name
                    </label>
                    <input
                        id="textInput"
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors mt-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
};

export default Settings;
