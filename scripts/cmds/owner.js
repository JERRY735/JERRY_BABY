const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		author: "Rifad",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: '𝗔𝗟𝗔𝗠𝗜𝗡_🐤',
				gender: '𝐌𝐚𝐥𝐞',
				age: '19+',
				Tiktok: 'af_alamin72',
				Relationship: '𝐒𝐢𝐧𝐠𝐥𝐞',
				religion: '𝐈𝐬𝐥𝐚𝐦',
				facebook: 'https://www.facebook.com/xnxx.com2015?mibextid=JRoKGi'
			};

			const bold = 'https://i.imgur.com/neQa5kf.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│𝐍𝐚𝐦𝐞: ${ownerInfo.name}
│𝐆𝐞𝐧𝐝𝐞𝐫 : ${ownerInfo.gender}
│𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :${ownerInfo.Relationship}
│𝐀𝐠𝐞 :${ownerInfo.age}
│𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧: ${ownerInfo.religion}
│𝐓𝐢𝐤𝐭𝐨𝐤 : ${ownerInfo.instagram}
│𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${ownerInfo.facebook}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
