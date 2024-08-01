const MBTI_BUTTON = document.getElementById('create-mbti');
MBTI_BUTTON.addEventListener('click', () => {
    //mbtiコードと対応する日本語名称
    var mbti_code = ["ENTP", "INTP", "INTJ", "ENTJ", "ENFP", "INFP", "INFJ", "ENFJ", "ESTJ", "ISTJ", "ISFJ", "ESFJ", "ESTP", "ISTP", "ISFP", "ESFP"];
    let mbti_janame = ["討論者", "論理学者", "建築家", "指揮官", "運動家", "仲介者", "提唱者", "主人公", "幹部", "管理者", "擁護者", "執事", "起業家", "巨匠", "冒険家", "エンターテイナー"];
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
    if (judge_str_1 == "N") {
        Chokkan_or_Kansatsu = "直感"
    } else {
        Chokkan_or_Kansatsu = "観察"
    }
    document.getElementById("personality_1").innerHTML = "あなたは" + random_1 + "%" + Chokkan_or_Kansatsu + "型です．";

    //性格2
    let random_2 = 100 - Math.floor(Math.random() * max);
    judge_str_2 = your_mbti.substring(2, 3);
    let Shiko_or_Kanjo = null;
    if (judge_str_2 == "T") {
        Shiko_or_Kanjo = "思考"
    } else {
        Shiko_or_Kanjo = "感情"
    }
    document.getElementById("personality_2").innerHTML = "あなたは" + random_2 + "%" + Shiko_or_Kanjo + "型です．";

    //性格3
    let random_3 = 100 - Math.floor(Math.random() * max);
    judge_str_3 = your_mbti.substring(3, 4);
    let Tansaku_or_Keikaku = null;
    if (judge_str_3 == "P") {
        Tansaku_or_Keikaku = "探索"
    } else {
        Tansaku_or_Keikaku = "計画"
    }
    document.getElementById("personality_3").innerHTML = "あなたは" + random_3 + "%" + Tansaku_or_Keikaku + "型です．";

});