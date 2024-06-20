const full_name = ['Hatsune Miku','Kagamine Rin','Kagamine Len','Megurine Luka','MEIKO','KAITO','Hoshino Ichika','Tenma Saki','Mochizuki Honami','Hinomori Shiho','Hanasato Minori','Kiritani Haruka','Momoi Airi','Hinomori Shizuku','Azusawa Kohane','Shiraishi An','Shinonome Akito','Aoyagi Toya','Tenma Tsukasa','Otori Emu','Kusanagi Nene','Kamishiro Rui','Yoisaki Kanade','Asahina Mafuyu','Shinonome Ena','Akiyama Mizuki'];
const full_name_cn = ['初音未来','镜音铃','镜音连','巡音流歌','MEIKO','KAITO','星乃一歌','天马咲希','望月穗波','日野森志步','花里实乃理','桐谷遥','桃井爱莉','日野森雫','小豆泽心羽','白石杏','东云彰人','青柳冬弥','天马司','凤笑梦','草薙宁宁','神代类','宵崎奏','朝比奈真冬','东云绘名','晓山瑞希'];

const team_name = ['VIRTUAL SINGER','Leo/need','MORE MORE JUMP!','Vivid BAD SQUAD','Wonderlands x Showtime','Nightcord at 25:00'];
const team_name_cn = ['虚拟歌手','Leo/need','MORE MORE JUMP!','Vivid BAD SQUAD','Wonderlands x Showtime','25时，在Nightcord。'];
const team_name_cn_official = ['虚拟歌手','狮雨星绊','萌萌飞跃少女团！','炫狂小队','奇幻仙境演出秀','25点,夜音见'];

const simple_name = ['miku','rin','len','luka','meiko','kaito','ick','saki','hnm','shiho','mnr','hrk','airi','szk','khn','an','akt','toya','tks','emu','nene','rui','knd','mfy','ena','mzk'];
const simple_team_name = ['vs','ln','mmj','vbs','ws','25时'];
//待补全,所有戏称/别名必须在字典的嵌套列表中
const joke_name_cn = {
    'Hatsune Miku':['葱','猫葱','白葱'],
    'Kagamine Rin':[],
    'Kagamine Len':[],
    'Megurine Luka':[],
    'MEIKO':[],
    'KAITO':[],
    'Hoshino Ichika':[],
    'Tenma Saki':['马晓希'],
    'Mochizuki Honami':['穗波妈妈'],
    'Hinomori Shiho':[],
    'Hanasato Minori':[],
    'Kiritani Haruka':[],
    'Momoi Airi':[],
    'Hinomori Shizuku':[],
    'Azusawa Kohane':[],
    'Shiraishi An':[],
    'Shinonome Akito':[],
    'Aoyagi Toya':[],
    'Tenma Tsukasa':[],
    'Otori Emu':['汪大吼'],
    'Kusanagi Nene':[],
    'Kamishiro Rui':[],
    'Yoisaki Kanade':['小气走'],
    'Asahina Mafuyu':['马福友'],
    'Shinonome Ena':['董慧敏'],
    'Akiyama Mizuki':[]
};
// 生成索引
let character_index = {};
simple_name.forEach((name, index) => {
    character_index[name] = full_name_cn[index];
});

let team_index = {};
simple_team_name.forEach((name, index) => {
    team_index[name] = team_name_cn[index];
});

let team_cn_official_index = {};
team_name_cn_official.forEach((name, index) => {
    team_cn_official_index[name] = team_name_cn[index];
})

let team_cn_index = {};
team_name_cn.forEach((name, index) => {
    team_cn_index[name] = team_name_cn_official[index];
})

function sekai_index(name,type) {
    function createIndex(data) {
        const groupedData = {
            teams: [],
            individual: []
        };

        // 遍历团队数据并添加到groupedData中
        data.team_name.forEach((team, index) => {
            groupedData.teams.push({
                full_name: team,
                full_name_cn: data.team_name_cn[index],
                full_name_cn_official: data.team_name_cn_official[index],
                simple_name: data.simple_team_name[index]
            });
        });

        // 遍历个人数据并添加到groupedData中
        data.full_name.forEach((name, index) => {
            const member = {
                full_name: name,
                full_name_cn: data.full_name_cn[index],
                simple_name: data.simple_name[index],
                joke_name_cn: data.joke_name_cn[name] ? data.joke_name_cn[name].join(',') : ''
            };
            groupedData.individual.push(member);
        });

        return groupedData;
    }
    const data = {
        full_name: full_name,
        full_name_cn: full_name_cn,
        simple_name: simple_name,
        joke_name_cn: joke_name_cn,
        team_name: team_name,
        team_name_cn: team_name_cn,
        team_name_cn_official: team_name_cn_official,
        simple_team_name: simple_team_name
    };
    const index = createIndex(data);


    let result;
    if (type === 'team') {
        result = index.teams.find(team => {
            return Object.values(team).some(value =>
                String(value).toLowerCase().includes(name.toLowerCase())
            );
        });
    } else if (type === 'individual') {
        result = index.individual.find(member => {
            return Object.values(member).some(value =>
                String(value).toLowerCase().includes(name.toLowerCase())
            );
        });
    }
    if (result === undefined){
        result = null;
    }
    return result;
}

export {
    full_name,
    full_name_cn,
    team_name,
    team_name_cn,
    team_name_cn_official,
    simple_name,
    simple_team_name,
    character_index,
    team_index,
    joke_name_cn,
    team_cn_official_index,
    team_cn_index,
    sekai_index
};