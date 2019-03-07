var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by tishoy
 * 2018.8.8
 */
var SoundEnum = (function () {
    function SoundEnum() {
    }
    /**
     * 背景音乐
     */
    SoundEnum.MAIN1SOUND_1_MP3 = "124_Main1Sound_1_mp3";
    /**
     * 获得物品
     */
    SoundEnum.ITEMSOUND_MP3 = "112_ItemSound_mp3";
    /**
     * 点击声音
     */
    SoundEnum.CLICKSOUND_MP3 = "52_ClickSound_mp3";
    /**
     * 选择声音
     */
    SoundEnum.SELECTSOUND_MP3 = "98_SelectSound_mp3";
    /**
     * stage1 boom
     */
    SoundEnum.BURST2SOUND_MP3 = "111_Burst2Sound_mp3";
    /**
     * stage2 开始敲钟
     */
    SoundEnum.GONGSTARTSOUND_MP3 = "80_GongStartSound_mp3";
    /**
     * stage2 结束敲钟
     */
    SoundEnum.GONGENDSOUND_MP3 = "81_GongEndSound_1_mp3";
    /**
     * stage2 攻击声音
     */
    SoundEnum.KICKSOUND_MP3 = "78_KickSound_mp3";
    /**
     * stage2 欢呼
     */
    SoundEnum.KANSEISOUND_1 = "41_KanseiSound_1_mp3";
    /**
     * stage3 击球
     */
    SoundEnum.HITSOUND_MP3 = "40_HitSound_mp3";
    /**
     * stage3 红光
     */
    SoundEnum.AURA2SOUND_MP3 = "67_Aura2Sound_mp3";
    /**
     * stage3 蓝光
     */
    SoundEnum.AURASOUND_MP3 = "68_AuraSound_mp3";
    /**
     * stage3 挥舞球棒
     */
    SoundEnum.SUBURISOUND_MP3 = "23_SuburiSound_mp3";
    /**
     * stage3 眼神
     */
    SoundEnum.SHINE2SOUND_MP3 = "88_Shine2Sound_mp3";
    /**
     * stage3 失败
     */
    SoundEnum.BOKESOUND_MP3 = "25_BokeSound_mp3";
    /**
     * 打出地球
     */
    /**
     * stage4 水喷脸上
     */
    SoundEnum.WATER5SOUND_MP3 = "12_Water5Sound_mp3";
    /**
     * stage4 滴水
     */
    SoundEnum.WATER4SOUND_MP3 = "15_Water4Sound_mp3";
    /**
     * stage4 水阀
     */
    SoundEnum.VALVESOUND_MP3 = "17_ValveSound_mp3";
    /**
     * stage4 水阀放水
     */
    SoundEnum.WATER7SOUND_MP3 = "21_Water7Sound_mp3";
    /**
     * stage4 出水浇花
     */
    SoundEnum.WATER6SOUND_MP3 = "27_Water6Sound_mp3";
    /**
     * stage4 挪开脚
     */
    SoundEnum.PUYONSOUND_MP3 = "35_PuyonSound_mp3";
    /**
     * stage4  蛇咬人
     */
    SoundEnum.ASERISOUND_MP3 = "123_AseriSound_mp3";
    /**
     * stage4 彩虹
     */
    // static ShineSound_mp3: string = "8_ShineSound_mp3"
    /**
     * stage5 开冰箱
     */
    SoundEnum.REIZOUKOOPENSOUND_MP3 = "33_ReizoukoOpenSound_mp3";
    /**
     * stage5 关冰箱
     */
    SoundEnum.REIZOUKOCLOSESOUND_MP3 = "34_ReizoukoCloseSound_mp3";
    /**
     * stage5 长牙
     */
    SoundEnum.UPSOUND_MP3 = "38_UpSound_mp3";
    /**
     * stage5 吃
     */
    SoundEnum.EATSOUND_MP3 = "43_EatSound_mp3";
    /**
     * stage5 倒牙
     */
    SoundEnum.KUWAGATASOUND_MP3 = "74_KuwagataSound_mp3";
    /**
     * stage5 打虫子
     */
    // static KickSound_mp3: string = "78_KickSound_mp3";
    /**
     * stage5 牙掉桌子
     */
    // static _mp3:string = ""
    /**
     * stage6 水池
     */
    SoundEnum.WATER8SOUND_MP3 = "14_Water8Sound_mp3";
    /**
     * stage6 草
     */
    SoundEnum.BUSH2SOUND_MP3 = "113_Bush2Sound_mp3";
    /**
     * stage6 草草
     */
    SoundEnum.BUSHSOUND_MP3 = "114_BushSound_mp3";
    /**
    * stage7 开关门
    */
    SoundEnum.AUTODOORSOUND_MP3 = "125_AutoDoorSound_mp3";
    /**
    * stage7 刮风
    */
    SoundEnum.WINDSOUND_1_MP3 = "10_WindSound_1_mp3";
    /**
    * stage7 彩虹
    */
    SoundEnum.SHINESOUND_MP3 = "8_ShineSound_mp3";
    /**
     * stage7 打伞
     */
    SoundEnum.UMBRELLASOUND_MP3 = "3_UmbrellaSound_mp3";
    /**
     * stage8 16 27 慢走
     */
    SoundEnum.ZOMBIMOVESOUND_MP3 = "5_ZombiMoveSound_mp3";
    /**
     * stage8 16 27 攻击
     */
    SoundEnum.ZOMBIATTACKSOUND_MP3 = "20_ZombiAttackSound_mp3";
    /**
     * stage8 16 27 胜利
     */
    SoundEnum.ZOMBICLEARSOUND_MP3 = "64_ZombiClearSound_mp3";
    /**
     * stage8 16 27
     */
    SoundEnum.ZOMBIGAMEOVERSOUND_MP3 = "65_ZombiGameOverSound_mp3";
    /**
     * stage8 16 27 人掉坑
     */
    SoundEnum.ZOMBIDIGGINGSOUND_MP3 = "70_ZombiDiggingSound_mp3";
    /**
     * stage8 16 27 僵尸掉坑
     */
    SoundEnum.ZOMBIDEADSOUND_MP3 = "127_ZombiDeadSound_mp3";
    /**
     * stage8 16 27 摇摇乐
     */
    SoundEnum.ZOMBIMARAKASUSOUND_MP3 = "54_ZombiMarakasuSound_mp3";
    /**
     * stage8 16 27 快走
     */
    SoundEnum.ZOMBIMOVEFASTSOUND_MP3 = "6_ZombiMoveFastSound_mp3";
    /**
     * stage9 巨浪来临
     */
    SoundEnum.NAMISOUND_1_MP3 = "57_NamiSound_1_mp3";
    /**
     * stage9 浮出水面
     */
    SoundEnum.WATER2SOUND_MP3 = "61_Water2Sound_mp3";
    /**
     * stage10 开门
     */
    SoundEnum.DOOROPENSOUND_MP3 = "91_DoorOpenSound_mp3";
    /**
     * stage10 裂冰
     */
    SoundEnum.GLASSBREAK2SOUND_MP3 = "82_GlassBreak2Sound_mp3";
    /**
     * stage10 倒水
     */
    // static WATER8SOUND_mp3: string = "14_Water8Sound_mp3"
    /**
     * stage10 冻
     */
    SoundEnum.FREEZESOUND_MP3 = "96_FreezeSound_mp3";
    /**
     * stage10 摔倒1
     */
    SoundEnum.SUBERISOUND_MP3 = "53_SuberiSound_mp3";
    /**
     * stage10 摔倒2
     */
    // static KICKSOUND_mp3: string = "78_KickSound_mp3"
    /**
     * stage10 摔倒3 失败声音
     */
    // static BOKESOUND_mp3: string = "25_BokeSound_mp3"
    /**
     * 掉水ed
     *
    */
    SoundEnum.WATERSOUND_MP3 = "26_WaterSound_mp3";
    /**
     * stage10 掉水ing
     */
    SoundEnum.DONSOUND_MP3 = "120_DonSound_mp3";
    /**
     * stage11 失败
     */
    // 25_BokeSound_mp3
    /**
     * stage11 骑树
     */
    SoundEnum.KISHIMISOUND_MP3 = "69_KishimiSound_mp3";
    /**
     * stage11 猫
     */
    SoundEnum.CATSOUND_MP3 = "106_CatSound_mp3";
    /**
     * stage11 草
     */
    // static BushSound_mp3: string = 114_BushSound_mp3 
    /**
     * stage11 气球爆
     */
    SoundEnum.BURSTSOUND_MP3 = "119_BurstSound_mp3";
    /**
     * stage 11 点击气球
     */
    // static PUYONSOUND_mp3: string = "35_PuyonSound_mp3"
    /**
     * stage12 阳光 除了喝茶
     */
    // static SHINESOUND_MP3: string = "8_ShineSound_mp3"
    /**
     * stage12 吃
     */
    // static EATSOUND_MP3: string = "43_EatSound_mp3"
    /**
     * stage12 把手
     */
    SoundEnum.METAL4SOUND_MP3 = "72_Metal4Sound_mp3";
    /**
     * stage12 喝茶
     */
    SoundEnum.DRINKSOUND_MP3 = "90_DrinkSound_mp3";
    /**
     * stage12 木板
     */
    SoundEnum.OPEN2SOUND_MP3 = "44_Open2Sound_mp3";
    /**
     * stage13 小羊跳
     */
    SoundEnum.JUMPSOUND_MP3 = "4_JumpSound_mp3";
    /**
     * stage13 马跑
     */
    SoundEnum.UMASTEPSOUND_MP3 = "55_UmaStepSound_mp3";
    /**
     * stage13 马跳
     */
    SoundEnum.UMAVOICESOUND_MP3 = "56_UmaVoiceSound_mp3";
    /**
     * stage13 黑羊
     */
    SoundEnum.TOSSHINSOUND_MP3 = "63_TosshinSound_mp3";
    /**
     * stage13 黑羊
     */
    // static KICKSOUND_MP3: string = "78_KickSound_mp3"
    /**
    * stage13 草
    */
    // static BUSHSOUND_MP3: string = "114_BushSound_mp3"
    /**
     * stage14 好轮胎
     */
    // static ShineSound_mp3: string =  "8_ShineSound_mp3"
    /**
     * stage14 前盖
     */
    // static Open2Sound_mp3: string =  "44_Open2Sound_mp3"
    /**
     * stage14 拧车盖
     */
    SoundEnum.METALSOUND_MP3 = "62_MetalSound_mp3";
    /**
     * stage14 修管
     */
    SoundEnum.METAL6SOUND_MP3 = "73_Metal6Sound_mp3";
    /**
    * stage14 爆胎
    */
    /**
     * stage14 往前 转圈
     */
    SoundEnum.CARSTARTSOUND_MP3 = "86_CarStartSound_1_mp3";
    /**
     * stage14  后开
     */
    SoundEnum.CARPASSSOUND_1_MP3 = "87_CarPassSound_1_mp3";
    /**
     * stage15  咬鼻子
     */
    // static KuwagataSound_mp3: string = "74_KuwagataSound_mp3"
    /**
     * stage15  打架
     */
    // static KickSound_mp3: string = "78_KickSound_mp3"
    /**
     * stage15 失败
     */
    // 25_BokeSound_mp3
    /**
     * stage15  拉窗户
     */
    SoundEnum.FUSUMAOPENSOUND_MP3 = "83_FusumaOpenSound_mp3";
    /**
     * stage15  挪椅子
     */
    SoundEnum.CHAIRSOUND_MP3 = "105_ChairSound_mp3";
    /**
     * stage16
     */
    /**
     * stage17  木桩
     */
    SoundEnum.KONSOUND_MP3 = "9_KonSound_mp3";
    /**
     * stage17  出
     */
    // static SUBURISOUND_MP3: string = "23_SuburiSound_mp3"
    /**
     * stage17  绳子
     */
    SoundEnum.BUCHISOUND_MP3 = "30_BuchiSound_mp3";
    /**
     * stage17  吃
     */
    // static EatSound_mp3: string =  "43_EatSound_mp3"
    /**
     * stage17  爆苹果
     */
    SoundEnum.CRASH2SOUND_MP3 = "77_Crash2Sound_mp3";
    /**
     * stage18  撞球
     */
    SoundEnum.WARESOUND_MP3 = "115_WareSound_mp3";
    /**
     * stage18  进槽
     */
    SoundEnum.BOWLINGGUTTERSOUND_MP3 = "116_BowlingGutterSound_mp3";
    /**
     * stage18  扔球时
     */
    SoundEnum.BOWLINGTHROWSOUND_MP3 = "117_BowlingThrowSound_mp3";
    /**
     * stage18  砸脚
     */
    SoundEnum.DON2SOUND_MP3 = "118_Don2Sound_mp3";
    /**
     * stage18  成功
     */
    SoundEnum.CORRECTSOUND_MP3 = "101_CorrectSound_mp3";
    /**
     * stage19  伞
     */
    // static UMBRELLASOUND_MP3: string = "3_UmbrellaSound_mp3"
    /**
    * stage19  阳光
    */
    SoundEnum.SHINE3SOUND_MP3 = "93_Shine3Sound_mp3";
    /**
     * stage19  滴水
     */
    // static WATER4SOUND_MP3: string = "15_Water4Sound_mp3"
    /**
     * stage20  镜子
     */
    // static ShineSound_mp3: string =  "8_ShineSound_mp3"
    /**
     * stage20  剪头发
     */
    SoundEnum.KUSASOUND_MP3 = "11_KusaSound_mp3";
    /**
     * stage20  生发水
     */
    // static WATER8SOUND_MP3: string = "14_Water8Sound_mp3"
    /**
     * stage20  掉剪子
     */
    SoundEnum.METAL2SOUND_MP3 = "37_Metal2Sound_mp3";
    /**
     * stage20  吹风
     */
    SoundEnum.DRYERSOUND_MP3 = "103_DryerSound_mp3";
    /**
     * stage21 钟表 鸟
     */
    SoundEnum.HATODOKEISOUND_MP3 = "16_HatodokeiSound_mp3";
    /**
     * stage21 冰箱门
     */
    // static REIZOUKOOPENSOUND_MP3: string ="33_ReizoukoOpenSound_mp3"
    /**
     * stage21 冰箱门
     */
    // static ReizoukoCloseSound_mp3: string ="34_ReizoukoCloseSound_mp3"
    /**
     * stage21 拉门
     */
    // static REIZOUKOCLOSESOUND_MP3: string ="83_FusumaOpenSound_mp3"
    /**
     * stage21 拉门
     */
    SoundEnum.FUSUMACLOSESOUND_MP3 = "84_FusumaCloseSound_mp3";
    /**
     * stage21 转钟表
     */
    SoundEnum.KACHISOUND_MP3 = "49_KachiSound_mp3";
    /**
     * stage21 敲门
     */
    // static KickSound_mp3: string = "78_KickSound_mp3"
    /**
     * stage21 涨豆子
     */
    // static UPSOUND_MP3: string =  "38_UpSound_mp3"
    /**
     * stage21 日历
     */
    SoundEnum.BIRISOUND_MP3 = "42_BiriSound_mp3";
    /**
     * stage21 豆子发光
     */
    // static Shine3Sound_mp3: string = "93_Shine3Sound_mp3"
    /**
     * stage22 扔蘑菇
     */
    // static JumpSound_mp3: string ="4_JumpSound_mp3"
    /**
     * stage22 出洞
     */
    // static PUYONSOUND_MP3: string = "35_PuyonSound_mp3"
    /**
     * stage22 吃蘑菇 吃栗子
     */
    // static EatSound_mp3: string = "43_EatSound_mp3"
    /**
     * stage22 大树吃
     */
    SoundEnum.OPENSOUND_MP3 = "45_OpenSound_mp3";
    /**
     * stage22 草丛
     */
    // 113_Bush2Sound_mp3
    /**
     * stage22 砸人
     */
    SoundEnum.HIT2SOUND_MP3 = "79_Hit2Sound_mp3";
    /**
     * stage23 青椒
     */
    // static JumpSound_mp3: string = "4_JumpSound_mp3"
    /**
     * stage23 跑步
     */
    SoundEnum.RUNECHOSOUND_MP3 = "32_RunEchoSound_mp3";
    /**
    * stage23 吃
    */
    //    static EatSound_mp3: string = "43_EatSound_mp3"
    /**
    * stage23 撞玻璃
    */
    //    static KickSound_mp3: string ="78_KickSound_mp3"
    /**
    * stage23 玻璃碎
    */
    //    static GLASSBREAK2SOUND_MP3: string ="82_GlassBreak2Sound_mp3"
    /**
     * stage24 鱼钩
     */
    SoundEnum.WATER3SOUND_MP3 = "13_Water3Sound_mp3";
    /**
     * stage24 撞到人
     */
    // static KickSound_mp3: string =  "78_KickSound_mp3"
    /**
     * stage24 草带头上
     */
    // static ASERISOUND_MP3: string = "123_AseriSound_mp3"
    /**
     * stage 25 拔草
     */
    // static KusaSound_mp3: string = "11_KusaSound_mp3"
    /**
     * stage 25 倒水
     */
    // static Water8Sound_mp3: string = "14_Water8Sound_mp3"
    /**
     * stage 25 ufo
     */
    SoundEnum.UFOSOUND_1_MP3 = "18_UfoSound_1_mp3";
    /**
     * stage 25 吃东西
     */
    // static EatSound_mp3: string ="43_EatSound_mp3"
    /**
     * stage 25 除草机器
     */
    SoundEnum.KUSAKARIKISOUND_MP3 = "58_KusakarikiSound_mp3";
    /**
     * stage 25 牛
     */
    SoundEnum.COWSOUND_MP3 = "76_CowSound_mp3";
    /**
     * stage 25 狗
     */
    SoundEnum.DOGSOUND_MP3 = "92_DogSound_mp3";
    /**
     * stage 26 倒水
     */
    // static WATER5SOUND_MP3: string ="12_Water5Sound_mp3"
    /**
     * stage 26 放学
     */
    SoundEnum.SCHOOLCHIMESOUND_1_MP3 = "31_SchoolChimeSound_1_mp3";
    /**
     * stage 26 钥匙
     */
    // static Metal4Sound_mp3: string = "72_Metal4Sound_mp3"
    /**
     * stage 26 储藏门
     */
    // static DOOROPENSOUND_MP3: string ="91_DoorOpenSound_mp3"
    /**
     * stage26 水管门
     */
    SoundEnum.TODANAOPENSOUND_MP3 = "99_TodanaOpenSound_mp3";
    /**
     * stage26 教室门
     */
    SoundEnum.SLIDEDOORSOUND_MP3 = "104_SlideDoorSound_mp3";
    /**
     * stage27
     */
    /**
     * stage28 草莓前
     */
    SoundEnum.KOROGARISOUND_MP3 = "48_KorogariSound_mp3";
    /**
     * stage28 草莓后
     */
    SoundEnum.KOROGARI2SOUND_MP3 = "46_Korogari2Sound_mp3";
    /**
     * stage28 恐怖
     */
    SoundEnum.HORRORSOUND_MP3 = "94_HorrorSound_mp3";
    /**
     * stage29 扔薯条
     */
    // static JumpSound_mp3: string = "4_JumpSound_mp3"
    /**
     * stage29 榴莲失败
     */
    SoundEnum.KUSAISOUND_MP3 = "24_KusaiSound_mp3";
    /**
     * stage29 点气球
     */
    // static PuyonSound_mp3: string ="35_PuyonSound_mp3"
    /**
     * stage29 吃东西
     */
    // static EatSound_mp3: string ="43_EatSound_mp3"
    /**
     * stage29 金币掉地
     */
    SoundEnum.COIN6SOUND_MP3 = "60_Coin6Sound_mp3";
    /**
     * stage29 结账失败
     */
    SoundEnum.INCORRECTSOUND_MP3 = "75_IncorrectSound_mp3";
    /**
     * stage29 扫码
     */
    SoundEnum.REGISOUND_MP3 = "97_RegiSound_mp3";
    /**
     * stage29 结账
     */
    SoundEnum.REGI2SOUND_MP3 = "102_Regi2Sound_mp3";
    /**
     * stage29 气球爆炸
     */
    // static Don2Sound_mp3: string ="118_Don2Sound_mp3"
    /**
     * stage29 抓蛇 鱼
     */
    // static AseriSound_mp3: string = "123_AseriSound_mp3"
    /**
     * stage29 蛋碎
     */
    SoundEnum.TAMAGOCRASHSOUND_MP3 = "22_TamagoCrashSound_mp3";
    /**
     * stage30 扔人
     */
    // static JumpSound_mp3: string = "4_JumpSound_mp3"
    /**
     * stage30 吃
     */
    // static EatSound_mp3: string ="43_EatSound_mp3"
    /**
     * stage30 乌鸦
     */
    SoundEnum.KARASUSOUND_MP3 = "71_KarasuSound_mp3";
    /**
     * stage30 钟声
     */
    SoundEnum.BELL3SOUND_MP3 = "121_Bell3Sound_mp3";
    /**
     * stage30 木马
     */
    SoundEnum.BELL2SOUND_MP3 = "122_Bell2Sound_mp3";
    return SoundEnum;
}());
__reflect(SoundEnum.prototype, "SoundEnum");
