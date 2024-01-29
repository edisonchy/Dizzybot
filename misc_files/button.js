module.exports.button = (interaction) => {

  if (interaction.customId == '門面野') {
    interaction.reply({ ephemeral: true, embeds: [
      {
      "title": "**門面野**",
      "description": "‣ 勿輕易披露會暴露個人身分的資料，如住址、電話、信用卡號碼、提款卡密碼、上學或工作地點等。若對方威迫你交出這些資料，你是有權拒絕的。\n‣ 不要急於和新網友見面，提防對方隱惡揚善，或刻意製造的美麗謊言。留意對方有否前後矛盾的信息，相信自己的直覺，若感覺不妥便不宜繼續交談。\n‣ 假如希望與網友進一步交往，建議先以電話聊天一陣子，電話溝通能讓彼此較真實的進一步觀察和了解。\n‣ 若決定約會網友，宜在白天人流較多的場合。找信任的朋友陪伴或告訴朋友有關約會地點和時間。若對方有使你不舒服的舉動或要求，立即終止約會。\n\n參考︰香港家庭計劃指導會《網上交友的利弊》(Copied from 好青年荼毒室)",
      "color": 16777215
      }
    ]});
  }

  if (interaction.customId == '報名方法') {
    interaction.reply({ ephemeral: true, embeds: [
      {
        "title": "**如何報名？**",
        "description": "➀ 前往報名頻道，之後會見到右上角有三粒掣\n➁ 撳落去第一粒#號掣\n➂ 選擇其中一個對你有興趣嘅討論串\n➃ 之後向右掃，你會發現報名頻道以下會出現咗你啱啱打開嘅討論串\n➄ 長撳討論串，選擇加入討論串，完成後就會收到討論串入邊所有嘅通知\n➅ 任意報名",
        "color": 16777215,
        "fields": [
          {
            "name": "**自約踩板同訓練**",
            "value": "前往陸上運動裏面，各區頻道吹雞就可，呢度冇大台"
          }
        ]
      }
    ]});
  }

  if (interaction.customId == '租嘢?') {
    interaction.reply({ ephemeral: true, embeds: [
      {
        "title": "**租嘢 Renting**",
        "color": 16777215,
        "fields": [
          {
            "name": ":white_small_square:**器材租用：(first timer 請閱讀租板攻略）**",
            "value": "各種玩法滑板 $100/ day\n（請嘗試說出借板練習目標：初學、平花、落斜、代步、滑雪、衝浪…）\n如需租用護腕、頭盔、護膝、護肘，每項 $25/日 (平地課基本上有護腕已經可以避免嚴重受傷)"
          },
          {
            "name": ":white_small_square:**關於租板方面：**",
            "value": "兩個方案（請早一日揚聲ig dm [SBDW](https://www.instagram.com/sbdwlongboards/)）\n\n*$100 for 24hrs；比喻「 Day1－06：00pm租，Day2－06：00pm前還」*\n\n*$350 for 168hrs ： 比喻「Day1－06：00pm租，Day8－06：00pm前還」*\n\n《香港長板落斜計劃》\n（請最遲星期四揚聲ig dm [SBDW](https://www.instagram.com/sbdwlongboards/) ）\n若活動前租用器材，不方便親臨鋪仔試身嘅參加者。\n敬請自行量度：頭、肘、膝圍嘅數字：",
            "inline": true
          },
          {
            "name": ":white_small_square:**付款方式：**",
            "value": "FPS number👇🏻 (過數時請填寫你 discord 名、租咩板同租幾多日）\n62181915 W T Thomas Ng\n\nPayme number👇🏻 (過數時請填寫你 discord 名、租咩板同租幾多日）\n62181915 SBDW longboards"
          },
          {
            "name": ":white_small_square:**First timer注意事項：**",
            "value": "衣物鞋都係舒適為主～\n落斜建議襟磨但唔影響活動能力嘅褲（要踎到最低）\n只要唔著窄腳褲照計都無問題\n主要影響板感係鞋\n鞋身不能太硬／太軟\n鞋底不能太厚（如NB大部份鞋款）\n包腳＋貼腳最為理想\n(籃球鞋、皮鞋、行山鞋都不建議）\n\n強烈建議Nike SB款＋生膠底（磨擦力MAX!)\nVans雖然好適合…但大家知咩料啦\nCon屎好多款鞋底都好硬\n通常平時feel 唔到 真係要踩板先fee"
          }
        ]
      }
    ]});
  }

  if (interaction.customId == '租板攻略') {
    interaction.reply({ ephemeral: true, embeds: [
      {
        "title": "**租板攻略1.0**",
        "description": "簡單講吓租板應該點試",
        "color": 16777215,
        "fields": [
          {
            "name": ":white_small_square:**第一步－了解四大板型(Decks):**",
            "value": "➀ Skateboard (sb)（板短、轉向少、離地較高、極輕－用作碗池及街上空中花式；活動範圍細不能代步，建議先由空地熟習後才去滑板場等地方）\n\n➁ Surfskate (ss）(板短、最靈活轉向、離地亦最高、最重－由 sb 及 lb 演化而成，用作模擬滑浪動作例如 turning 及 sliding）；活動範圍細不能代步，建議先由空地熟習後才去滑板場等地方） \n\n➂ Cruiser（sb、ss、lb 之混合，以巡航代步目的為中心亦兼容以上玩法、一般較短較輕，轉向靈活，能力平均；分兩大類：\n➭ sb/ ss cruiser：離地較高但會比 sb/ ss 穩定，活動範圍中等\n➭ lb cruiser：離地低，非常穩定，活動範圍廣）\n\n➃ Longboard (lb)（板長不一、轉向不一、離地不一、重量不一變化更多；活動範圍廣) \nlb 用作下面括弧內嘅玩法 (先不包括落斜/ sliding 專用板)  由於分別更多，所以先以離地程度作參考： \n➭ Top Mount 最離地(Tricking≈Dancing=Pumping=Carving>Pushing） \n➭ Microdrop/ Drop thru/ Drop platform 冇咁離地（Tricking≈Dancing≈Pumping≈Carving≈Pushing） \n➭ Double Drop 最貼地（Pushing＞Pumping≈Carving＞Dancing≈Tricking） \n\n由此可見；基本上分咗四種Decks, 長板再略分三類－六大款（呢個有機會再講）。"
          },
          {
            "name": ":white_small_square:**第二步－以技術水平及使用傾向再作選擇：**",
            "value": "熟習咗基本技巧後想玩咩玩法而決定。 \n\n強烈建議大家由 Double Drop Longboard上手（最貼地＝安全／易上手＝Pushing 易／轉向反應較慢＝穩定） 去克服初學者最需要。基本功係以下所有玩法都必須注重。由最難學嘅起速，至剎車，至跳車，至仆街之後。 再試 「非Double Drop」（無咁貼地＋轉向反應快嘅板）去學其他技巧，就自然好快上手。當你進入學習 Turning 階段之後，多數離地愈高嘅板，轉彎越有效率。 \n\n及後可嘗試玩法：\n➀ Cruising/ Carving 巡航\n➁ Pumping 利用轉向節奏推進\n➂ Long Distance Pusp-Pump 長途\n➃ Freestyle (Dance & Tricks) 平地花式\n➄ Surf Training 模擬滑浪\n➅ Street/ Park 花式/滑板場\n➆ Freeride & Downhill 飄移（Slide) & 高速落山\n\n結論：一係唔好租，要租就試哂四大板型。由Double Drop 踩起你人生會更易。",
            "inline": true
          }
        ]
      }
    ]});
  }
}