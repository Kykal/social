//Typings
import Media from "./typings/Media";


//Icons
import {
	FaTiktok,
	FaInstagram,
	FaYoutube,
	FaTwitch,
} from 'react-icons/fa';
import {
	AiFillFacebook,
} from 'react-icons/ai';
import {
	SiKofi,
	SiTwitter
} from 'react-icons/si';


export const kProfilePictureSize: number = 150;

export const kIconSize: number = 20;


export const kPrimaryMedia: Media[] = [
	{
		label: 'Twitch',
		url: 'https://www.twitch.tv/kykaltv',
		icon: <FaTwitch />,
	},
	{
		label: 'YouTube',
		url: 'https://www.youtube.com/@KykalYT',
		icon: <FaYoutube />,
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/KykalTV',
		icon: <SiTwitter />,
	},
	{
		label: 'Ko-Fi',
		url: 'https://ko-fi.com/kykal',
		icon: <SiKofi />,
	},
];

export const kSecondaryMedia: Media[] = [
	{
		label: 'TikTok',
		url: 'https://www.tiktok.com/@kykaltv',
		icon: <FaTiktok fontSize={kIconSize} />,
	},
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/KykalTV',
		icon: <AiFillFacebook fontSize={kIconSize} />,
	},
	{
		label: 'Instagram',
		url: 'https://www.instagram.com/kykaltv/',
		icon: <FaInstagram fontSize={kIconSize} />,
	}
];
