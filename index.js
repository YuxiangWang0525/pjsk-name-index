const full_name = ['Hatsune Miku','Kagamine Rin','Kagamine Len','Megurine Luka','MEIKO','KAITO','Hoshino Ichika','Tenma Saki','Mochizuki Honami','Hinomori Shiho','Hanasato Minori','Kiritani Haruka','Momoi Airi','Hinomori Shizuku','Azusawa Kohane','Shiraishi An','Shinonome Akito','Aoyagi Toya','Tenma Tsukasa','Otori Emu','Kusanagi Nene','Kamishiro Rui','Yoisaki Kanade','Asahina Mafuyu','Shinonome Ena','Akiyama Mizuki']
const full_name_cn = ['初音未来','镜音铃','镜音连','巡音流歌','MEIKO','KAITO','星乃一歌','天马咲希','望月穗波','日野森志步','花里实乃理','桐谷遥','桃井爱莉','日野森雫','小豆泽心羽','白石杏','东云彰人','青柳冬弥','天马司','凤笑梦','草薙宁宁','神代类','宵崎奏','朝比奈真冬','东云绘名','晓山瑞希']

const team_name = ['VIRTUAL SINGER','Leo/need','MORE MORE JUMP!','Vivid BAD SQUAD','Wonderlands x Showtime','Nightcord at 25:00']
const team_name_cn = ['虚拟歌手','Leo/need','MORE MORE JUMP!','Vivid BAD SQUAD','Wonderlands x Showtime','25时，在Nightcord。']
const team_name_cn_official = ['虚拟歌手','狮雨星绊','萌萌飞跃少女团','炫狂小队','奇幻仙境演出秀','25点,夜音见']

const simple_name = ['miku','rin','len','luka','meiko','kaito','ick','saki','hnm','shiho','mnr','hrk','airi','szk','khn','an','akt','toya','tks','emu','nene','rui','knd','mfy','ena','mzk']
const simple_team_name = ['vs','ln','mmj','vbs','ws','25时']

// 生成索引
let character_index = {};
simple_name.forEach((name, index) => {
    character_index[name] = full_name_cn[index];
});

const team_index = {};
simple_team_name.forEach((name, index) => {
    team_index[name] = team_name_cn[index];
});

export {
    full_name,
    full_name_cn,
    team_name,
    team_name_cn,
    team_name_cn_official,
    simple_name,
    simple_team_name,
    character_index,
    team_index
};