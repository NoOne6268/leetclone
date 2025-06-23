import React, { useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import SettingsModel from "@/components/models/settings_model";
import { ISettings } from "./playground";
import { judge0LanguageMap, languageNames } from "@/utils/constants";

type Language = keyof typeof judge0LanguageMap;

type PreferenceNavProps = {
	settings: ISettings;
	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
	selectedLanguage: Language;
	onLanguageChange: (language: Language) => void;
};

export default function PreferenceNav({
	settings,
	setSettings,
	selectedLanguage,
	onLanguageChange,
}: PreferenceNavProps) {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const handleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullScreen(!isFullScreen);
	};

	return (
		<>
			<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
				<div className='flex items-center text-white'>
					<button 
						className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium'
						onClick={() =>
							setSettings({ ...settings, dropdownIsOpen: !settings.dropdownIsOpen })
						}
					>
						<div className='flex items-center px-1'>
							<div className='text-xs text-label-2 dark:text-dark-label-2'>
								{languageNames[selectedLanguage]}
							</div>
						</div>
						<div className='ml-1 transform transition flex items-center'>
							<FaChevronDown fontSize={12} />
						</div>
					</button>
					{settings.dropdownIsOpen && (
						<div className='absolute mt-1 top-10 left-2 z-50 w-48 bg-dark-layer-1 border border-dark-border-2 rounded-lg shadow-lg'>
							<div className='py-1'>
								{Object.keys(judge0LanguageMap).map((lang) => (
									<button
										key={lang}
										className={`block w-full text-left px-4 py-2 text-sm hover:bg-dark-fill-3 ${
											selectedLanguage === lang
												? 'bg-dark-fill-3 text-white'
												: 'text-dark-label-2'
										}`}
										onClick={() => {
											onLanguageChange(lang as Language);
											setSettings({ ...settings, dropdownIsOpen: false });
										}}
									>
										{languageNames[lang as Language]}
									</button>
								))}
							</div>
						</div>
					)}
				</div>

				<div className='flex items-center m-2'>
					<button
						className='preferenceBtn group'
						onClick={() =>
							setSettings({ ...settings, settingsModalIsOpen: true })
						}
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
			</div>
			{settings.settingsModalIsOpen && (
				<SettingsModel settings={settings} setSettings={setSettings} />
			)}
		</>
	);
}
