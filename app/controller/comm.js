const listData = []
const formData = {}

const fs = require('fs')
const path = require('path')
const savePath = path.join(__dirname, '../../static/');
var iconv = require('iconv-lite');
var pageNum = 0;
var finishedObj = {};

var mainHost = "https://m.qktxt.com/book/xhzqxcdf/";
// var mainHost = "http://www.xiarixs.com/html/34/34865/";
var bookName = "novel6.txt";
const novel_urls = [
	"10010.html","10020.html","10030.html","10040.html","10050.html","10060.html","10070.html","10080.html","10090.html","10100.html","10110.html","10120.html","10130.html","10140.html","10150.html","10160.html","10170.html","10180.html","10190.html","10200.html","10210.html","10220.html","10230.html","10240.html","10250.html","10260.html","10270.html","10280.html","10290.html","10300.html","10310.html","10320.html","10330.html","10340.html","10350.html","10360.html","10370.html","10380.html","10390.html","10400.html","10410.html","10420.html","10430.html","10440.html","10450.html","10460.html","10470.html","10480.html","10490.html","10500.html","10510.html","10520.html","10530.html","10540.html","10550.html","10560.html","10570.html","10580.html","10590.html","10600.html","10610.html","10620.html","10630.html","10640.html","10650.html","10660.html","10670.html","10680.html","10690.html","10700.html","10710.html","10720.html","10730.html","10740.html","10750.html","10760.html","10770.html","10780.html","10790.html","10800.html","10810.html","10820.html","10830.html","10840.html","10850.html","10860.html","10870.html","10880.html","10890.html","10900.html","10910.html","10920.html","10930.html","10940.html","10950.html","10960.html","10970.html","10980.html","10990.html","11000.html","11010.html","11020.html","11030.html","11040.html","11050.html","11060.html","11070.html","11080.html","11090.html","11100.html","11110.html","11120.html","11130.html","11140.html","11150.html","11160.html","11170.html","11180.html","11190.html","11200.html","11210.html","11220.html","11230.html","11240.html","11250.html","11260.html","11270.html","11280.html","11290.html","11300.html","11310.html","11320.html","11330.html","11340.html","11350.html","11360.html","11370.html","11380.html","11390.html","11400.html","11410.html","11420.html","11430.html","11440.html","11450.html","11460.html","11470.html","11480.html","11490.html","11500.html","11510.html","11520.html","11530.html","11540.html","11550.html","11560.html","11570.html","11580.html","11590.html","11600.html","11610.html","11620.html","11630.html","11640.html","11650.html","11660.html","11670.html","11680.html","11690.html","11700.html","11710.html","11720.html","11730.html","11740.html","11750.html","11760.html","11770.html","11780.html","11790.html","11800.html","11810.html","11820.html","11830.html","11840.html","11850.html","11860.html","11870.html","11880.html","11890.html","11900.html","11910.html","11920.html","11930.html","11940.html","11950.html","11960.html","11970.html","11980.html","11990.html","12000.html","12010.html","12020.html","12030.html","12040.html","12050.html","12060.html","12070.html","12080.html","12090.html","12100.html","12110.html","12120.html","12130.html","12140.html","12150.html","12160.html","12170.html","12180.html","12190.html","12200.html","12210.html","12220.html","12230.html","12240.html","12250.html","12260.html","12270.html","12280.html","12290.html","12300.html","12310.html","12320.html","12330.html","12340.html","12350.html","12360.html","12370.html","12380.html","12390.html","12400.html","12410.html","12420.html","12430.html","12440.html","12450.html","12460.html","12470.html","12480.html","12490.html","12500.html","12510.html","12520.html","12530.html","12540.html","12550.html","12560.html","12570.html","12580.html","12590.html","12600.html","12610.html","12620.html","12630.html","12640.html","12650.html","12660.html","12670.html","12680.html","12690.html","12700.html","12710.html","12720.html","12730.html","12740.html","12750.html","12760.html","12770.html","12780.html","12790.html","12800.html","12810.html","12820.html","12830.html","12840.html","12850.html","12860.html","12870.html","12880.html","12890.html","12900.html","12910.html","12920.html","12930.html","12940.html","12950.html","12960.html","12970.html","12980.html","12990.html","13000.html","13010.html","13020.html","13030.html","13040.html","13050.html","13060.html","13070.html","13080.html","13090.html","13100.html","13110.html","13120.html","13130.html","13140.html","13150.html","13160.html","13170.html","13180.html","13190.html","13200.html","13210.html","13220.html","13230.html","13240.html","13250.html","13260.html","13270.html","13280.html","13290.html","13300.html","13310.html","13320.html","13330.html","13340.html","13350.html","13360.html","13370.html","13380.html","13390.html","13400.html","13410.html","13420.html","13430.html","13440.html","13450.html","13460.html","13470.html","13480.html","13490.html","13500.html","13510.html","13520.html","13530.html","13540.html","13550.html","13560.html","13570.html","13580.html","13590.html","13600.html","13610.html","13620.html","13630.html","13640.html","13650.html","13660.html","13670.html","13680.html","13690.html","13700.html","13710.html","13720.html","13730.html","13740.html","13750.html","13760.html","13770.html","13780.html","13790.html","13800.html","13810.html","13820.html","13830.html","13840.html","13850.html","13860.html","13870.html","13880.html","13890.html","13900.html","13910.html","13920.html","13930.html","13940.html","13950.html","13960.html","13970.html","13980.html","13990.html","14000.html","14010.html","14020.html","14030.html","14040.html","14050.html","14060.html","14070.html","14080.html","14090.html","14100.html","14110.html","14120.html","14130.html","14140.html","14150.html","14160.html","14170.html","14180.html","14190.html","14200.html","14210.html","14220.html","14230.html","14240.html","14250.html","14260.html","14270.html","14280.html","14290.html","14300.html","14310.html","14320.html","14330.html","14340.html","14350.html","14360.html","14370.html","14380.html","14390.html","14400.html","14410.html","14420.html","14430.html","14440.html","14450.html","14460.html","14470.html","14480.html","14490.html","14500.html","14510.html","14520.html","14530.html","14540.html","14550.html","14560.html","14570.html","14580.html","14590.html","14600.html","14610.html","14620.html","14630.html","14640.html","14650.html","14660.html","14670.html","14680.html","14690.html","14700.html","14710.html","14720.html","14730.html","14740.html","14750.html","14760.html","14770.html","14780.html","14790.html","14800.html","14810.html","14820.html","14830.html","14840.html","14850.html","14860.html","14870.html","14880.html","14890.html","14900.html","14910.html","14920.html","14930.html","14940.html","14950.html","14960.html","14970.html","14980.html","14990.html","15000.html","15010.html","15020.html","15030.html","15040.html","15050.html","15060.html","15070.html","15080.html","15090.html","15100.html","15110.html","15120.html","15130.html","15140.html","15150.html","15160.html","15170.html","15180.html","15190.html","15200.html","15210.html","15220.html","15230.html","15240.html","15250.html","15260.html","15270.html","15280.html","15290.html","15300.html","15310.html","15320.html","15330.html","15340.html","15350.html","15360.html","15370.html","15380.html","15390.html","15400.html","15410.html","15420.html","15430.html","15440.html","15450.html","15460.html","15470.html","15480.html","15490.html","15500.html","15510.html","15520.html","15530.html","15540.html","15550.html","15560.html","15570.html","15580.html","15590.html","15600.html","15610.html","15620.html","15630.html","15640.html","15650.html","15660.html","15670.html","15680.html","15690.html","15700.html","15710.html","15720.html","15730.html","15740.html","15750.html","15760.html","15770.html","15780.html","15790.html","15800.html","15810.html","15820.html","15830.html","15840.html","15850.html","15860.html","15870.html","15880.html","15890.html","15900.html","15910.html","15920.html","15930.html","15940.html","15950.html","15960.html","15970.html","15980.html","15990.html","16000.html","16010.html","16020.html","16030.html","16040.html","16050.html","16060.html","16070.html","16080.html","16090.html","16100.html","16110.html","16120.html","16130.html","16140.html","16150.html","16160.html","16170.html","16180.html","16190.html","16200.html","16210.html","16220.html","16230.html","16240.html","16250.html"
]
const novel_name = [
	"第1章 初来整渣女","第2章 丫鬟太放肆","第3章 公主好凶猛","第4章 偶遇大灰狼","第5章 夺命抓鸭脖手","第6章 不是我干的","第7章 治罪长公主","第8章 染世子驾到","第9章 不做太子妃","第10章 不做也不行","第11章 我要跟你拼了","第12章 被人瞧不起","第13章 打到你害怕","第14章 气到你吐血","第15章 该怎么赔","第16章 仙气变俗气","第17章 仇恨制造者","第18章 公主看够没","第19章 倾城长公主","第20章 你快去死吧","第21章 娘子别急嘛","第22章 带你去看戏","第23章 还是相公好","第24章 入住兰碧轩","第25章 勒索姜玉娆","第26章 赶紧找男人","第27章 太子的侍妾","第28章 先帝的遗物","第29章 皇帝的心思","第30章 不要迷恋我","第31章 你可以滚了","第32章 谁还敢娶你","第33章 为何要害我","第34章 怎么还没倒","第35章 人间有真情","第36章 丢人丢大了","第37章 公主的反击","第38章 矛头指凤华","第39章 本宫有问题","第40章 宿主就是她","第41章 再来一次吧","第42章 姜玉瑶反击","第43章 都怪你好看","第44章 女人的嫉妒","第45章 我来照顾你","第46章 挑剔的世子","第47章 留个后就好","第48章 神秘的诚叔","第49章 先皇后之死","第50章 你就叫小翠","第51章 外公老糊涂","第52章 活不过二十","第53章 陪在你身边","第54章 虚弱的男人","第55章 只许你害人","第56章 赐婚染世子","第57章 大闹丞相府","第58章 姐妹终反目","第59章 出乎意料","第60章 冰凉刺骨","第61章 我让你站住","第62章 可不要怪我","第63章 指婚慕容染","第64章 太子妃出炉","第65章 谢父皇成全","第66章 有受虐倾向","第67章 没有你的份","第68章 大白和二白","第69章 爆帅慕容染","第70章 皇帝的目的","第71章 本尊的规矩","第72章 染月的较量","第73章 身份被戳穿","第74章 周莹莹出事","第75章 愤怒的凤华","第76章 友情到尽头","第77章 前途堪忧啊","第78章 神秘的老妪","第79章 好一朵幽香","第80章 太子的刁难","第81章 本宫不要你","第82章 等不到明天","第83章 我求你帮我","第84章 谣言满天飞","第85章 用行动证明","第86章 赔我烟霞锦","第87章 娘子想多了","第88章 主子你来了","第89章 嚣张的小厮","第90章 女人的较量","第91章 如今的凤魂","第92章 陌上花已开","第93章 勾起你怀疑","第94章 邪巫有猫腻","第95章 你我亲姐妹","第96章 姜玉瑶上钩","第97章 你想试试吗","第98章 咬自己一口是一口","第99章 揪出凤华来","第100章 奸夫在那里","第101章 有我保护你","第102章 为孙女报仇","第103章 不念血脉情","第104章 骄傲的凤凰","第105章 本宫回来了","第106章 我来告御状","第107章 可怜姜玉瑶","第108章 凤鸢的心思","第109章 娘子干嘛呢","第110章 儿臣知错了","第111章 皇帝废太子","第112章 不能断后路","第113章 朕记你一功","第114章 太子爱上你","第115章 皇帝的执念","第116章 你不滚，我滚","第117章 都听本宫的","第118章 染不会同意","第119章 请公主见谅","第120章 恼羞成怒","第121章 长公主绝食","第122章 脸上有花吗","第123章 想吃天鹅肉","第124章 你可有表白","第125章 就是喜欢他","第126章 听不懂人话","第127章 奴婢这就去","第128章 神一般的人","第129章 上天很公平","第130章 及笄倒计时","第131章 姐姐你好美","第132章 染世子来了","第133章 风华已初现","第134章 慕容染你来","第135章 太子抢了先","第136章 你可想好了","第137章 陌上人如玉","第138章 简直太幸福","第139章 啪啪的扇脸","第140章 本宫不允许","第141章 已经加过了","第142章 为了公主好","第143章 还是怪我咯","第144章 你就偷着乐","第145章 嫁到东陵去","第146章 生疏忘却了","第147章 你敢不救我","第148章 吓死姨母了","第149章 为儿臣做主","第150章 小七你确定","第151章 没你这女儿","第152章 没法再帮你","第153章 只是不小心","第154章 我要杀了你","第155章 心中的矛盾","第156章 暂住公主府","第157章 知道些什么","第158章 并不像假话","第159章 帝后的怀疑","第160章 你在说什么","第161章 终于完整了","第162章 先皇后身世","第163章 神奇的丹药","第164章 迟早有一天","第165章 因为玉无暇","第166章 傻傻最安全","第167章 跟我去东陵","第168章 身份被道破","第169章 要赶为夫走","第170章 狠辣碧寒宫","第171章 给老子松开","第172章 莫大的危机","第173章 交出凤魂来","第174章 谁比较厉害","第175章 还没有去死","第176章 从不是好人","第177章 该回东陵了","第178章 无暇赠流月","第179章 赏赐给你们","第180章 死得好惨啊","第181章 凤华长公主","第182章 怎么个加法","第183章 染世子出现","第184章 我陪你一起","第185章 你必须负责","第186章 能活过来吗","第187章 染世子证明","第188章 根本没资格","第189章 竟如此狡诈","第190章 一起去逛街","第191章 关键是我累","第192章 争夺染世子","第193章 留了一个人","第194章 躺枪背黑锅","第195章 染真的都懂","第196章 澜京有流匪","第197章 小看公主了","第198章 有得必有失","第199章 全军覆没了","第200章 逼着你出血","第201章 很记仇的","第202章 秀色可餐也","第203章 当真好算计","第204章 公子有吩咐","第205章 只是有些冷","第206章 唯独我不会","第207章 不能让他再误会下去","第208章 染考虑好了","第209章 比他少七年","第210章 你这是不孝","第211章 手拉手的来","第212章 让凤凰难堪","第213章 嫁给慕容染","第214章 凤凰的无力","第215章 达成了协议","第216章 你见过猪吗","第217章 主子的意思","第218章 娘子当如何","第219章 声势太浩大","第220章 凤凰要涅槃","第221章 不是来捣乱","第222章 大方的说出","第223章 公主要沐浴","第224章 奴婢想如厕","第225章 身份暴露了","第226章 蠢出新高度","第227章 主子求放过","第228章 见不着华儿","第229章 你还挺值钱","第230章 婚前不可以","第231章 动作够快啊","第232章 染世子说过","第233章 您可算来了","第234章 世子很生气","第235章 公子不大好","第236章 这算是明抢","第237章 小白兔升级","第238章 而是公主你","第239章 相互的吸引","第240章 屠姜府满门","第241章 好样的凤华","第242章 无暇可证明","第243章 无暇的决心","第244章 验明正身了","第245章 皇后也倒霉","第246章 老相爷醒了","第247章 生不如死啊","第248章 而是在害我","第249章 可悲的侍卫","第250章 阴沟里翻船","第251章 口不择言了","第252章 本宫就是真","第253章 照顾好公主","第254章 你讨厌我吗","第255章 倒是很甜蜜","第256章 依旧很尊贵","第257章 一点都不疼","第258章 凤魂要崛起","第259章 找机会开溜","第260章 凤华你快走","第261章 杀人要偿命","第262章 我知道是谁","第263章 你个死狐狸","第264章 真是太好了","第265章 心情很不好","第266章 凤华太恶毒","第267章 你个娘娘腔","第268章 别自取其辱","第269章 你是吃醋了","第270章 主子撞邪了","第271章 五日后大婚","第272章 千年老狐狸","第273章 依皇上所言","第274章 冒牌很得意","第275章 总该行了吧","第276章 想取而代之","第277章 生米煮熟饭","第278章 果然亲兄妹","第279章 掐掉烂桃花","第280章 男人虽不多","第281章 不留下遗憾","第282章 为你做些事","第283章 大婚在眼前","第284章 送妹妹嫁人","第285章 家有恶毒妻","第286章 进宫来谢恩","第287章 太医是男的","第288章 我要咬死你","第289章 必须把持住","第290章 血流成河了","第291章 不恨姜玉瑶","第292章 别想轻易死","第293章 要好听多了","第294章 难言的痛楚","第295章 应该不是他","第296章 知错不知罪","第297章 要你们何用","第298章 专业坑孙子","第299章 允许你遮羞","第300章 没有可比性","第301章 的确是不对","第302章 我要吃奶奶","第303章 沐天很可怜","第304章 得了臆想症","第305章 有一个请求","第306章 我不怕蚂蚁","第307章 因为他欠揍","第308章 他也该饿了","第309章 平白招人嫌","第310章 不会抢你爹","第311章 身份的问题","第312章 小呆暴露了","第313章 你敢不要我","第314章 专心造重孙","第315章 不敢来皇宫","第316章 挖坑埋自己","第317章 如何当皇帝","第318章 夫妻逗赤练","第319章 兄弟对不住","第320章 兄弟闹起来","第321章 可有外人来","第322章 拿萝卜钓鱼","第323章 就是要过分","第324章 就是不讲理","第325章 绝对不简单","第326章 娘子想太多","第327章 不想饶恕你","第328章 牵着鼻子走","第329章 小王爷真棒","第330章 真是不要脸","第331章 给你个机会","第332章 霸气染世子","第333章 属下想杀人","第334章 智商被拉低","第335章 娘子你真美","第336章 生只小狐狸","第337章 明明没有人","第338章 长得辣么丑","第339章 依旧不合格","第340章 牛叉的凤涅","第341章 猥琐的老头","第342章 徒弟不像话","第343章 人家不接受","第344章 娘子我想你","第345章 最毒妇人心","第346章 我叫做风华","第347章 霸气的尊主","第348章 失魂丹到手","第349章 狠毒的父亲","第350章 她有大问题","第351章 难为赤练了","第352章 清俊的流月","第353章 天生的王者","第354章 老夫最怕鬼","第355章 强烈反差萌","第356章 城主很生气","第357章 为夫相信你","第358章 长辈的权利","第359章 小呆太胖了","第360章 给你个提醒","第361章 圆房的方法","第362章 活的不耐烦","第363章 踢到了铁板","第364章 无耻的谪仙","第365章 当我是死人","第366章 这是御书房","第367章 开空头支票","第368章 请叫我染夕","第369章 遇上白莲花","第370章 院子里亲热","第371章 解药变毒药","第372章 傻子都不如","第373章 给我个机会","第374章 都怪白小姐","第375章 真是没规矩","第376章 花样作死中","第377章 太高看自己","第378章 来看殿下的","第379章 菊花送死人","第380章 护犊云城主","第381章 不要离开我","第382章 真的很幸福","第383章 算计","第384章 关系好混乱","第385章 恭贺你成年","第386章 成功变妻奴","第387章 哪里不舒服","第388章 捞金进行时","第389章 卖身契拿来","第390章 恭喜染王妃","第391章 天大的阴谋","第392章 有因必有果","第393章 总觉得不对","第394章 围剿慕王府","第395章 都不能放过","第396章 快去救王妃","第397章 追一个女子","第398章 王爷回来了","第399章 好大的胆子","第400章 你要造反吗","第401章 所谓猪队友","第402章 您没意见吧","第403章 当君不为君","第404章 皇帝要气死","第405章 王爷等一下","第406章 用天下陪葬","第407章 背后有黑手","第408章 温情在身边","第409章 你想说什么","第410章 皇上请节哀","第411章 简直是绝配","第412章 再次被说动","第413章 我来摆平你","第414章 出丑","第415章 你是活腻了","第416章 我要你偿命","第417章 时刻准备着","第418章 我能信你吗","第419章 先是长公主","第420章 皇帝的打算","第421章 染王爷是神","第422章 那我陪她去","第423章 染王妃何在","第424章 坐等着看戏","第425章 王爷请息怒","第426章 染王妃错了","第427章 背后还有人","第428章 只要王妃来","第429章 闯下大祸了","第430章 本王在这等","第431章 时机已成熟","第432章 老王爷不在","第433章 我知道在哪","第434章 也得我愿意","第435章 坐收鱼翁利","第436章 皇上你错了","第437章 要翻天不成","第438章 闯进太和殿","第439章 向皇帝发难","第440章 墙倒众人推","第441章 恕在下直言","第442章 继位当皇帝","第443章 当街被烧死","第444章 露出尾巴了","第445章 帮我一个忙","第446章 考虑真周全","第447章 凤华显身手","第448章 一环套一环","第449章 是你的夫君","第450章 娘子我好想你","第451章 与云城有关","第452章 你们是坏人","第453章 好一个黎王","第454章 比我想的快","第455章 道出了真相","第456章 阻止慕容毅","第457章 一定要帮我","第458章 这些人真逗","第459章 哪家的尊下","第460章 我只是好奇","第461章 坑舅的外甥","第462章 用我去交换","第463章 终于回来了","第464章 你丫太坏了","第465章 你竟然敢来","第466章 只想找真相","第467章 你能护住吗","第468章 想办法解决","第469章 一个月有余","第470章 老牛吃嫩草","第471章 我是你舅舅","第472章 帝尊说笑了","第473章 趁机告黑状","第474章 我只安慰你","第475章 毕竟是皇帝","第476章 他傻你也傻","第477章 将他们唬住","第478章 你们欺负我","第479章 又横生枝节","第480章 我很纯洁的","第481章 王爷体力好","第482章 舅舅没问题","第483章 娘子真机智","第484章 挤到一起来","第485章 怎么都不对","第486章 拼了命的宠","第487章 有些太巧了","第488章 你不要多想","第489章 看见就想吐","第490章 我陪你们去","第491章 倾城前辈出力","第492章 包括她自己","第493章 倾城可代劳","第494章 是你错了吧","第495章 没那么简单","第496章 故事成真事","第497章 终于要生了","第498章 为了你姐姐","第499章 还窝的住吗","第500章 来的可真快","第501章 一直被无视","第502章 帝尊第一次","第503章 染狐狸不哭","第504章 简直太绝了","第505章 终究是晚了","第506章 来了位贵人","第507章 我也想知道","第508章 皇上的心思","第509章 不让她心烦","第510章 谁劝都没用","第511章 如此能折腾","第512章 从凌家出嫁","第513章 美丽的姑娘","第514章 凤澜的国姓","第515章 这是十五妹","第516章 你想要什么","第517章 索要封口费","第518章 闭上你的嘴","第519章 现实很残酷","第520章 我不认识你","第521章 谁能奈我何","第522章 结局染别离","第523章 你叫做赤练","第524章 冰冷的阳光","第525章 要你偿命","第526章 你没有活路","第527章 给你两条路","第528章 有一件趣事","第529章 人性的丑恶","第530章 遇见新主子","第531章 赤练的独白","第532章 杀他太便宜","第533章 你们说完了","第534章 什么是对食","第535章 使坏不管用","第536章 简单又粗暴","第537章 要世代传承","第538章 只要一个人","第539章 悲催的童年","第540章 深情的呼唤","第541章 会天打雷劈","第542章 娘娘们有请","第543章 皇上您等着","第544章 做了一个梦","第545章 不平凡的夜","第546章 请皇上过来","第547章 精密的计划","第548章 不按常理来","第549章 全部打趴下","第550章 说话要算数","第551章 陛下可满意","第552章 每人一百两","第553章 中二的皇帝","第554章 并不是唯一","第555章 突来的袭击","第556章 最好的态度","第557章 你可听到了","第558章 帮皇兄一把","第559章 可以去死了","第560章 给你个说法","第561章 就是蝶恋花","第562章 六芒星迭阵","第563章 畏罪潜逃么","第564章 给你个选择","第565章 那你就去死","第566章 给你一个机会","第567章 比风华还酷","第568章 连击给满分","第569章 全是骗人的","第570章 被搅乱气氛","第571章 不看在眼里","第572章 怎么都好看","第573章 我也叫阿姐","第574章 您看我成吗","第575章 称我为帝尊","第576章 好玩的事情","第577章 三年的准备","第578章 倾城的算计","第579章 咱这就看看","第580章 漂亮的反击","第581章 传说不可信","第582章 成功的引导","第583章 黑暗中降临","第584章 倾城要气死","第585章 拿定了飘萝","第586章 不安牌理来","第587章 男神你快走","第588章 毕竟我不傻","第589章 我愿带你走","第590章 最美的风景","第591章 阿萝对不起","第592章 你要下蛋了","第593章 怀孕大事件","第594章 倾城很倒霉","第595章 两个大笨蛋","第596章 本尊没生过","第597章 帝尊在哪里","第598章 我是错了吗","第599章 简直是胡闹","第600章 很大的不同","第601章 奴婢生养过","第602章 小呆的忧桑","第603章 我是个英雄","第604章 帅的好想哭","第605章 陌生又熟悉","第606章 帝尊的打算","第607章 真是两口子","第608章 凤华小蹄子","第609章 活着的消息","第610章 你暗恋本尊","第611章 你恨那人吗","第612章 是仇而非恨","第613章 爹爹堕落了","第614章 你的节操呢","第615章 意外好消息","第616章 小绿受欢迎","第617章 得瑟的小绿","第618章 见到你真好","第619章 舅妈疼你吧","第620章 气该消了吧","第621章 云飘谣卷完","第622章 玉华染离殇","第623章 蝶月亦无暇","第624章 高处不胜寒","第625章 陪你到白头"
]
var finshedPage = 0;
module.exports = app => {
	return class commController extends app.Controller {

		/**
		 * ajax通用处理
		 * @param {*} ctx
		*/
		async ajax(ctx) {

			// 只做请求转发处理
			let res = await this.service.http.$post(ctx);
			ctx.body = res;
		}

		async getDetail2(ctx) {
			this.getDetail(ctx, novel_urls[finshedPage]);
			ctx.body = {};
		}

		async getDetail(ctx, url) {
			pageNum++;
			let times = 0;
			let pageData
			try {
				pageData = await this.getContent(ctx, url);
			} catch (e) {
				times++;
				if (times < 5) {
					pageData = await this.getContent(ctx, url);
				} else {
					console.log("try 5 times ", url);
					return;
				}
			}
			if (!pageData) return;
			// console.log("page", pageData);
			let parsedContent = this.parseContent(pageData);
			if (!parsedContent) {
			    if (pageNum < 1022) this.getDetail(ctx, url);
			    return;
			}
			this.saveContent(novel_name[finshedPage] + "\r\n" + parsedContent.content.replace(/&nbsp;/g, " ").replace(/<br \/><br \/>/g, '\r\n').replace(/<br \/>/g, '\r\n') + "\r\n", () => {
			    // if (pageNum > 478) {
			    //     console.log("暂停................", parsedContent.nextUrl)
			    //     return;
			    // }
			    if (novel_urls[finshedPage]) {
			        setTimeout(() => {
			            this.getDetail(ctx, novel_urls[finshedPage])
			        }, 500);
			    }
			}, url);
			ctx.body = {};
		}

		async getContent(ctx, pageNum) {
			console.log("下一页", pageNum);
			if (!pageNum) return;
			// http: //m.mytxt.cc/read/65478/28843751.html
			//https://www.biqugeg.com/
			//https://www.rzlib.net
			let url = `${mainHost}${pageNum}`;
			try {
				let pageDetail = await ctx.curl(`${url}`);
				// console.log("pageDetail:", pageDetail);
				// var decodedBody = iconv.decode(pageDetail.data, 'GBK');
				var decodedBody = iconv.decode(pageDetail.data, 'utf-8');
				return decodedBody;
			} catch (e) {
				console.log(e);
				// console.log("url: ", pageNum, e);
				// var decodedBody = iconv.decode(pageDetail.data, 'GBK');
				// return this.getContent(ctx, pageNum)
				return {}
			}
		}
		saveContent(content, cb, url) {
			try {
				if (finishedObj[url]) {
					cb();
				} else {
					finishedObj[url] = true;
					console.log(content.substring(0, 10));
					fs.appendFile(savePath + bookName, content, (error) => {
						if (error) return console.log("追加文件失败" + error.message);
						finshedPage++;
						cb();
					});
				}
			} catch (e) {
				console.log("追加文件失败", e);
			}
		}
		parseContent(testData) {
			let test = testData.split('<div id="content">')[1];
			// console.log(test);

			// let test = testData.split('<div class="mui-col-sm-9 mui-col-xs-12">')[1];
			// console.log(test);
			if (!test) return;
			try {
				// <li><a href="/13_13759/22900840.html">下一章</a></li>
				// let nextUrlReg = /<li><a href="(.*?)">下一章<\/a><\/li>/
				// let contentReg = /<p id="txt">(.*?)([\s\S\r\n]*?)<ul class="breadcrumb"/
				// <div id="chapter_content">
				// let contentReg = /<div class="articlecontent">(.\s\S\w\W*?)<\/div>/
				// let titleReg = /<h1 id="nr_title">(.*?)<\/h1>/
				// let nextUrl = test.match(nextUrlReg)[1];
				// let mm = test.match(contentReg);
				// console.log("====",mm)
				// let content = mm[2];
				let content = test.split('<script>viewTip2')[0];
				// let title = test.match(titleReg)[1];
				return {
					// nextUrl: nextUrl,
					// title: title,
					content: content
				}
			} catch (e) {
				console.log("异常", e);
				return false;
			}

		}
		async handleGetAjax(ctx) {
			let res = await this.service.http.$get2(ctx);
			// let headers =  res.headers
			// for(let k in headers){
			//   ctx.set(k,headers[k]);
			// }

			ctx.body = res.data;
		}
		async download(ctx) {
			let res = await this.service.http.$get(ctx);
			let headers = res.headers
			for (let k in headers) {
				ctx.set(k, headers[k]);
			}
			ctx.body = res.data;
		}
		getForm(ctx) {
			ctx.body = {
				data: formData,
				code: '00',
				msg: "dddddd"
			};

		}
		test(ctx) {
			ctx.body = {
				data: {
					records: listData.slice(0, 10),
					total: 37
				},
				code: '00',
				msg: "dddddd"
			};

		}
		// getForm(ctx) {
		//   ctx.body = {
		//     data: formData,
		//     code: '00',
		//     msg: "dddddd"
		//   };
		// }
		async login() {
			const {
				ctx
			} = this;
			await ctx.renderClient('login.js', {});
		}
	};
};