import React, { useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
import SettingsModel from "@/components/models/settings_model";
import { ISettings } from "./playground";

type PreferenceNavProps = {
    settings: ISettings;
    setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
};

export default function PreferenceNav({ settings, setSettings }: PreferenceNavProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    
    const handleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullScreen(!isFullScreen);
	};

    return <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full '>
        <div className='flex items-center text-white'>
            <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
                <div className='flex items-center px-1'>
                    <div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
                </div>
            </button>
        </div>

        <div className='flex items-center m-2'>
            <button
                className='preferenceBtn group'
                onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
            >
                <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                    <AiOutlineSetting />
                </div>
                <div className='preferenceBtn-tooltip'>Settings</div>
            </button>

            <button className='preferenceBtn group' onClick={handleFullScreen}>
                <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                    {!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
                </div>
                <div className='preferenceBtn-tooltip'>Full Screen</div>
            </button>
        </div>
        {settings.settingsModalIsOpen && <SettingsModel settings={settings} setSettings={setSettings} />}
    </div>;
};