const MBTI_BUTTON = document.getElementById('create-mbti');
MBTI_BUTTON.addEventListener('click', () => {
    //mbtiコードと対応する日本語名称
    var mbti_code = ["ENTP", "INTP", "INTJ", "ENTJ", "ENFP", "INFP", "INFJ", "ENFJ", "ESTJ", "ISTJ", "ISFJ", "ESFJ", "ESTP", "ISTP", "ISFP", "ESFP"];
    let mbti_janame = ["討論者", "論理学者", "建築家", "指揮官", "運動家", "仲介者", "提唱者", "主人公", "幹部", "管理者", "擁護者", "領事", "起業家", "巨匠", "冒険家", "エンターテイナー"];
    //ランダムなmbtiコードの割当
    let your_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    var your_mbti_number = mbti_code.indexOf(your_mbti);
    let your_mbti_name = mbti_janame[your_mbti_number];
    let result = "あなたは" + your_mbti + "(" + your_mbti_name + ")です．";
    //配列から割り当てられたmbtiを削除
    mbti_code.splice(your_mbti_number, 1);
    mbti_janame.splice(your_mbti_number, 1);
    //相性の良いmbti割当
    let good_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    let your_good_mbti_number = mbti_code.indexOf(good_mbti);
    let good_mbti_janame = mbti_janame[your_good_mbti_number];
    //相性の悪いmbti割当
    //さらに削除
    mbti_code.splice(your_good_mbti_number, 1);
    mbti_janame.splice(your_good_mbti_number, 1);
    //悪いの割当
    let bad_mbti = mbti_code[Math.floor(Math.random() * mbti_code.length)];
    let your_bad_mbti_number = mbti_code.indexOf(bad_mbti);
    let bad_mbti_janame = mbti_janame[your_bad_mbti_number];

    //htmlに反映
    let goodresult = "相性が良いのは" + good_mbti + "(" + good_mbti_janame + ")，悪いのは" + bad_mbti + "(" + bad_mbti_janame + ")です．";
    document.getElementById("your").innerHTML = result;
    document.getElementById("aisho").innerHTML = goodresult;
    document.getElementById("create-mbti").innerHTML = "もう一度診断する";

    //性格0
    let max = 50;
    let random_0 = 100 - Math.floor(Math.random() * max);
    judge_str_0 = your_mbti.substring(0, 1);
    let Gaiko_or_Naiko = null;
    let Naikodo = null;
    if (judge_str_0 == "E") {
        Gaiko_or_Naiko = "外向"
        Naikodo = 100 - random_0;
    } else {
        Gaiko_or_Naiko = "内向"
        Naikodo = random_0;
    }
    document.getElementById("personality_0").innerHTML = "あなたは" + random_0 + "%" + Gaiko_or_Naiko + "型です．";
    let p_bar_0 = document.getElementById("p_0");
    let str = "<progress max='100' value = " + Naikodo + "></progress>";
    p_bar_0.innerHTML = str;

    //性格1
    let random_1 = 100 - Math.floor(Math.random() * max);
    judge_str_1 = your_mbti.substring(1, 2);
    let Chokkan_or_Kansatsu = null;
    let kansatsudo = null;
    if (judge_str_1 == "N") {
        Chokkan_or_Kansatsu = "直感"
        kansatsudo = 100 - random_1;
    } else {
        Chokkan_or_Kansatsu = "観察"
        kansatsudo = random_1;
    }
    document.getElementById("personality_1").innerHTML = "あなたは" + random_1 + "%" + Chokkan_or_Kansatsu + "型です．";

    //性格2
    let random_2 = 100 - Math.floor(Math.random() * max);
    judge_str_2 = your_mbti.substring(2, 3);
    let Shiko_or_Kanjo = null;
    let kanjodo = null;
    if (judge_str_2 == "T") {
        Shiko_or_Kanjo = "思考"
        kanjodo = 100 - random_2;
    } else {
        Shiko_or_Kanjo = "感情"
        kanjodo = random_2;
    }
    document.getElementById("personality_2").innerHTML = "あなたは" + random_2 + "%" + Shiko_or_Kanjo + "型です．";

    //性格3
    let random_3 = 100 - Math.floor(Math.random() * max);
    judge_str_3 = your_mbti.substring(3, 4);
    let Tansaku_or_Keikaku = null;
    let tansakudo = null;
    if (judge_str_3 == "P") {
        Tansaku_or_Keikaku = "探索"
        tansakudo = random_3;
    } else {
        Tansaku_or_Keikaku = "計画"
        tansakudo = 100 - random_3;
    }
    document.getElementById("personality_3").innerHTML = "あなたは" + random_3 + "%" + Tansaku_or_Keikaku + "型です．";

    //リザルトやり直し(新しく書いてる部分)

    //hidden解除
    document.getElementById("r_area").classList.remove("hidden");

    //16タイプ表示
    document.getElementById("mbti_type_h1").innerHTML = your_mbti + "(" + your_mbti_name + ")";

    //性格タイプ表示
    document.getElementById("mbti_result").innerHTML = your_mbti + " (" + your_mbti_name + ")";

    //クラス追加(色の制御)
    let colorname = null;
    let nu = null;
    let nowclassname = document.getElementById("personality_type").className;
    switch (nowclassname) {
        case "purple": document.getElementById("personality_type").classList.remove("purple");
            document.getElementById("shosaibutton").classList.remove("purple");
            break;
        case "green": document.getElementById("personality_type").classList.remove("green");
            document.getElementById("shosaibutton").classList.remove("green");
            break;
        case "blue": document.getElementById("personality_type").classList.remove("blue");
            document.getElementById("shosaibutton").classList.remove("blue");
            break;
        case "yellow": document.getElementById("personality_type").classList.remove("yellow");
            document.getElementById("shosaibutton").classList.remove("yellow");
            break;
        default: break;
    }

    nu = Math.floor(your_mbti_number / 4);
    switch (nu) {
        case 0: colorname = "purple";
            break;
        case 1: colorname = "green";
            break;
        case 2: colorname = "blue";
            break;
        case 3: colorname = "yellow";
            break;
        default: colorname = "red";
    };
    document.getElementById("personality_type").classList.add(colorname);
    document.getElementById("shosaibutton").classList.add(colorname);

    document.getElementById("num").innerHTML = nu
    nu = null;
    colorname = null;

    //性格タイプ説明文
    let description_txt_list = ["討論者は好奇心旺盛で，柔軟にものごとを考える上に，知的な難題が大好きです．", "論理学者は創造力に富む発明家で，無限の知識欲があります．", "建築家は独創的・戦略的にものごとを考える上に，どんなことについても計画がある人たちです．", "指揮官は大胆で意思が強い上に，想像力豊かで，どんな時でも解決手段を見つけたり作り出したりできます．", "運動家は熱意にあふれる性分の持ち主で，クリエイティブかつ自由奔放で，社交的です．「笑顔になる理由」をいつでも見つけられます．", "仲介者は自分の利益を顧みず，大義のためにはいつでも手を差し伸べる優しい人たちです．詩的でもあります．", "提唱者は静かなビジョナリーです．理想主義者として周りの人をインスパイアしながら精力的に働くことが多いでしょう．", "主人公は楽観主義者として周囲をインスパイアし，自分が正しいと思うことをすぐさま実行します．", "幹部は「まとめ役」として非常に優れていて，人やものごとを管理するのが飛び抜けて上手です．", "ロジスティシャンは現実的かつファクト重視の気質があり，とても頼りがいがあります．", "擁護者は「周りの人を守る」タイプとして非常に献身的かつ友好的で，いつでも喜んで愛する人を擁護します．", "領事は面倒見が良く，社交的です．いつでも喜んで周りの人をサポートする人たちで，コミュニティを大切にします．", "起業家はエネルギッシュな上に抜け目がなく，洞察力の鋭い人たちです．危険と隣り合わせの生き方を心から楽しみます．", "巨匠は独創的かつ現実的です．新しいことを試すのが大好きで，どんなツールでも使いこなせます．", "冒険家はいつも新しいことを体験したり探ってみたりするのが好きな人たちです．柔軟な考えの持ち主で，魅力的でもあります．", "エンターテイナーは熱意にあふれた精力的な人たちで，無計画に行動するのを好みます．エンターテイナーの周りにいて，退屈することは決してないでしょう．"];

    let your_txt = description_txt_list[your_mbti_number]
    document.getElementById("setumei").innerHTML = your_txt

    //グラフの点の場所
    let ene_dot = '<div class="dot" style="margin-left: calc((100% - 12px) * (' + Naikodo + ' / 100));"></div>';
    let ishiki_dot = '<div class="dot" style="margin-left: calc((100% - 12px) * (' + kansatsudo + ' / 100));"></div>';
    let kishitsu_dot = '<div class="dot" style="margin-left: calc((100% - 12px) * (' + kanjodo + ' / 100));"></div>';
    let senjutsu_dot = '<div class="dot" style="margin-left: calc((100% - 12px) * (' + tansakudo + ' / 100));"></div>';

    /*文字情報*/
    document.getElementById("ene_dsc").innerHTML = 'エネルギー：<strong class="font-blue">' + random_0 + '% </strong><strong class="emp">' + Gaiko_or_Naiko + '型</strong>';
    document.getElementById("isi_dsc").innerHTML = '意識：<strong class="font-yellow">' + random_1 + '% </strong><strong class="emp">' + Chokkan_or_Kansatsu + '型</strong>';
    document.getElementById("kst_dsc").innerHTML = '気質：<strong class="font-green">' + random_2 + '% </strong><strong class="emp">' + Shiko_or_Kanjo + '型</strong>';
    document.getElementById("sen_dsc").innerHTML = '戦術：<strong class="font-purple">' + random_3 + '% </strong><strong class="emp">' + Tansaku_or_Keikaku + '型</strong>';

    /*ドット位置調整*/
    document.getElementById("ene").innerHTML = ene_dot;
    document.getElementById("ishiki").innerHTML = ishiki_dot;
    document.getElementById("kishitsu").innerHTML = kishitsu_dot;
    document.getElementById("senjutsu").innerHTML = senjutsu_dot;

});