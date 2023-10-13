import Facebook from "./facebook";
import LinkedIn from "./linkedin";
import Twitter from "./twitter";
import Instagram from "./instagram";
import YouTube from "./youtube";

export default function Icons({ icon, className }) {
	const iconList = {
		facebook: Facebook,
		linkedin: LinkedIn,
		twitter: Twitter,
		instagram: Instagram,
		youtube: YouTube,
	};

	const Icon = iconList[icon];
	if (typeof Icon === "function") {
		return <Icon className={className} />;
	}
}
