type ExamQuestions = {
  examNumber: number;
  data: DATA[];
};

type DATA = {
  question: string;
  options: string[];
  ans: number;
  hint: string;
};

export const examQuestions: ExamQuestions[] = [
  {
    examNumber: 1,
    data: [
      {
        question: "Umuvuduko ntarengwa wa velomoteri mu gahanda k’amagare ni:",
        options: [
          "Km 50 mu isaha",
          "Km 25 mu isaha",
          "Km 60 mu isaha",
          "Km 40 mu isaha",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Uburebure ntarengwa bw’ibinyabiziga bikururana ni:",
        options: ["Metero 15", "Metero 20", "Metero 10", "Metero 25"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ikinyabiziga gishyirwaho ikimenyetso cy’uko umuyobozi wacyo yabonye ikimenyetso cy’uwitegura kumunyuraho ni ikinyabiziga gikurikira:",
        options: [
          "Kirenza uburebure bwa metero 10",
          "Kirenza metero 2,10 z'ubugari",
          "Kirenza metero 8 z'uburebure",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Za rumoruki zigira amatara yateganyirijwe ibinyabiziga bizikurura iyo:",
        options: [
          "Zifite ubugali burengeje metero 2 na santimetero 10",
          "Imbogamizi itewe na zo idatuma amatara yazo atabona neza",
          "Zifite uburebure burenga metero 6",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Ibyapa ndanga bishyirwa aho biboneye kurushaho ukurikijwe:",
        options: [
          "Aho abagenzi bireba bagana",
          "Ubwinshi bw'ibinyabiziga",
          "Uko birushije kubonwa neza n'abo byagenewe",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "Biterwa n'icyo byerekana.",
      },
      {
        question:
          "Itara ryo gusubira inyuma rigomba kohereza urumuri mu ntera ikurikira:",
        options: ["Metero 30", "Metero 50", "Metero 150", "Metero 20"],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Utugarura rumuri turi mu mbavu z'ikinyabiziga tugomba gusa:",
        options: [
          "Umweru",
          "Umutuku",
          "Icyatsi kibisi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "Umuhondo cyangwa icunga rihishije.",
      },
      {
        question:
          "Umuvuduko ntarengwa w'ibinyabiziga bitwarira abantu hamwe mu nsisiro ni:",
        options: [
          "Km 50 mu isaha",
          "Km 40 mu isaha",
          "Km 60 mu isaha",
          "Km 75 mu isaha",
          "Km 70 mu isaha",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Ibimenyetso bikoreshwa berekana impera y'inyuma y'imizigo bishyirwa ku buhagarike bukurikira:",
        options: [
          "Hagati ya cm 80 na cm 110",
          "Butarenze m 1,50",
          "Butarenze m 1,25",
          "Butarenze m 1,55",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Umuyobozi w'imodoka agomba kugira aho yicara hafite ubugari bwa:",
        options: ["Cm 50", "Cm 60", "Cm 40", "Ntagisubizo cy'ukuri kirimo"],
        ans: 3,
        hint: "Igisubizo nyacyo ni cm 55.",
      },

      {
        question:
          "Kimwe mu binyabiziga bikurikira ntibishobora gukurura rumoruki n'imwe:",
        options: [
          "Ipikipiki ifite akanyabaziga kuruhande",
          "Ipikipiki idafite akanyabiziga kuruhande",
          "Velomoteri",
          "Igare",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Gushyira mu muhanda ibinyabiziga bikururana birenze bitatu bitangirwa uruhushya na:",
        options: [
          "Perefe",
          "Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Minisitiri w'imirimo ya leta",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Umubare ntarengwa w'ibinyabiziga bikururana ni:",
        options: ["Bibiri", "Bitatu", "Bine", "Ntagisubizo cy'ukuri kirimo"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Umuvuduko ntarengwa w'ibinyabiziga bikururana birenze bitatu:",
        options: [
          "Km 25 mu isaha",
          "Km 20 mu isaha",
          "Km 5 mu isaha",
          "Km 15 mu isaha",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Ikizirikanyije ibinyabiziga bikururana kigomba kugaragazwa, iyo hagati y'uruhande rw'imbere rwa rumoruki n'uruhande rw'inyuma rw'ikinyabiziga gikurura hari umwanya ukurikira:",
        options: [
          "Urenze metero imwe",
          "Utarenze metero imwe",
          "Urenze metero eshatu",
          "Utarenze metero eshatu",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Ibizirikisho by'iminyururu cyangwa by'insinga kimwe n'ibindi bizirikisho by'ingoboka bigaragazwa n'ikimenyetso gikurikira:",
        options: [
          "Icyapa cyera cya mpande enye gifite cm 30 z'uruhande",
          "Igitambaro gitukura gifite cm 50 z'uruhande",
          "Icyapa cyera cya mpande enye gifite cm 50 z'uruhande",
          "Icyapa cyera cya mpande eshatu gifite cm 30 z'uruhande",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Uburemere ntarengwa bwa rumoruki feri yayo y'urugendo ishobora gukoreshwa gusa n'uburemere ni:",
        options: ["Kg 750", "Kg 3000", "Kg 1500", "Kg 3500"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo kuva bwije kugeza bukeye bidashoboka kubona neza muri metero 200, rumoruki ikuruwe na velomoteri, ikinyamitende cyangwa ipikipiki idafite akanyabiziga kuruhande igomba kugaragazwa:",
        options: [
          "N'itara ry'umutuku",
          "N'itara ry'umuhondo",
          "N'itara rimyasa",
          "N'itara ryera, ry'umuhondo cyangwa risa n'icunga",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Amatara ya kamenabihu ashobora gusimburwa n'amatara akurikira:",
        options: [
          "Yo kubisikana",
          "Y'urugendo",
          "Ndanga",
          "A na B ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Amatara ashakisha acanwa:",
        options: [
          "Bidashoboka kubona muri metero 100",
          "Bidashoboka kubona muri metero 200",
          "Iyo ari ngombwa kandi bitabangamiye abandi bayobozi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
    ],
  },
  {
    examNumber: 2,
    data: [
      {
        question: "Imburira zimurika zikoreshwa kuburyo bukurikira:",
        options: [
          "Bacana bazimya vubavuba amatara ndanga",
          "Bacana bazimya vubavuba amatara magufi",
          "Basimburanya vuba vuba amatara magufi n'amatara maremare",
          "B na C ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Abanyamaguru banyura mu butaka butsindagiye butandukanya imihanda iyo:",
        options: [
          "Nta tuyira two ku mpande z'umuhanda duhari",
          "Nta nkengero yegutse ihari",
          "A na B ni ibisubizo by'ukuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "Bohogoraro akanya gato bombukira imihanda.",
      },
      {
        question:
          "Abanyamaguru batatanye cyangwa bari mu dutsiko batagamije gahunda imwe banyura mu muhanda cyangwa mu gahanda k'amagare iyo:",
        options: [
          "Nta tuyira two ku mpande z'umuhanda duhari cyangwa zitagendeka",
          "Nta nkengero yegutse ihari cyangwa butagendeka",
          "Nta butaka butsindagiye buhari cyangwa butagendeka",
          "Nta nkengero y'umuhanda iringaniye ihari",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Amategeko y'ihariye yo kugenda mu byambu (ubwato) no ku bibuga by'indege atihutirwa amara igihe gikurikira:",
        options: [
          "Kitarenze iminsi 30",
          "Kitarenze amezi 3",
          "Kitarenze amezi 6",
          "Kitarenze amezi atandatu",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Igice cy'imizigo kirenga ku mpera y'inyuma y'ikinyabiziga ntikirenza:",
        options: ["Metero 1", "Metero 2,10", "Metero 2,70", "Metero 3"],
        ans: 3,
        hint: "N'agatambaro gatukura ka cm 50.",
      },
      {
        question:
          "Iyo ikinyabiziga cyikoreye ibintu birebire cyane bidashobora kugabanywamo ibice, icyogihe imizigo ntishobora kurenza kumpera y'inyuma y'ikinyabiziga ho:",
        options: ["Metero 2", "Metero 2,10", "Metero 3", "Metero 1,50"],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Ku mateme hagati y'ibinyabiziga bifite ibimenyetso byerekana umuvuduko hagomba kubamo intera ya:",
        options: ["Metero 3", "Metero 2", "Metero 5", "Metero 10"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ubugari bw'imizingo yikorewe n'ikinyabiziga bupimiwe mu butambike ubwo ari bwo bwose ntiburenza:",
        options: [
          "Metero 2,50",
          "Metero 3",
          "Metero 2,65",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Iyo imizigo isumba impera y'inyuma y'ikinyabiziga ho metero irenga, igice gihera k'umuzigo kigomba kugaragazwa ku manywa:",
        options: [
          "N'agatambaro kera gafite cm 50 z'uruhande",
          "N'agatambaro gatukura gafite cm 59 z'uruhande",
          "N'agatambaro gatukura gafite cm 50 z'uruhande",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "Niloro n'agatambaro kera ka cm 50.",
      },
      {
        question:
          "Ubugari bw'imizigo yikorewe n'igare na velomoteri kimwe na rumoruki zikuruwe nabyo ntiburenza:",
        options: ["Metero 1,25", "Metero 1", "Metero 2,10", "Santimetero 75"],
        ans: 3,
        hint: "no hint",
      },

      {
        question:
          "Birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite:",
        options: [
          "Imyaka 7",
          "Imyaka 10",
          "Ingingo ya 16",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ubugari bw'ikinyabiziga bupimiwe ku butambike ubwo ari bwo bwose ntiburenga:",
        options: ["Metero 2,65", "Metero 2,50", "Metero 3", "Metero 2,10"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Ubugari bwa rumoruki ikuruwe n'ipikipiki icometseho akanyabiziga ku ruhande rwayo cyangwa ikuruwe n'ikinyamitende 3 cyangwa 4 gifite cyangwa kidafite moteri ntiburenza:",
        options: [
          "Santimetero 75",
          "Metero 1,25",
          "Metero 1,50",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Umuvuduko ntarengwa w'ibinyabiziga bihinga {bifite imipira irambura cg utarambuka} bishobora kugeza k'ubugari bwa metero 3 ni:",
        options: [
          "Km 25 mu isaha",
          "Km 20 mu isaha",
          "Km 40 mu isaha",
          "Km 50 mu isaha",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Iyo uburebure bw'imizigo iri ku kanyamizigo gakururwa (gakururwa n'inyamanswa) burenga metero 12:",
        options: [
          "Hagomba umuherekeza ukurikira icyo kinyabiziga ku maguru",
          "Umuyobozi agomba gukurura icyo kinyabiziga ku maguru",
          "Hashyirwaho ibimenyetso bigaragaza iyo mizigo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Umubare w'inyamanswa zikurura ikinyabiziga ntushobora kurenga:",
        options: [
          "Enye ikurikiranya n'eshatu zibangikanye",
          "Eshatu zikurikiranye n'enye zibangikanye",
          "Ebyiri zibangikanye n'enye zikurikiranye",
          "Eshatu zikurikiranye n'ebyiri zibangikanye",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Hashyirwaho umuherekeza wunganira umuyobozi w'inyamanswa zikurura ikinyabiziga iyo umubare wazo:",
        options: [
          "Urenze enye",
          "Urenze eshatu",
          "Urenze ebyiri",
          "Urenze eshanu",
        ],
        ans: 3,
        hint: "Hagomba umuherekeza 1 ku inyamanswa 8.",
      },
      {
        question:
          "Ibinyabiziga bikururwa n'inyamanswa bihererekanijwe mu ubutumwa bigomba kugabanywamo amatsinda afite uburebure butarengeje:",
        options: ["Metero 300", "Metero 100", "Metero 500", "Metero 30"],
        ans: 2,
        hint: "Hagati y'imodoka n'indi = m 30.",
      },
      {
        question:
          "Igice gikikijwe n'uduce tugali dufite umweru tw'ibara kinyurwamo n'ibinyabiziga bikurukira:",
        options: [
          "Amagare na velomoteri z'imitende 2",
          "Ibinyabiziga bigenda buhoro",
          "Ibinyabiziga bitwarira abantu hamwe",
          "B na C ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Imyanya ibinyabiziga bigomba guhagararamo ishobora kugaragazwa:",
        options: [
          "N'imirongo yera irombereje",
          "N'imiringo yera yambukiranya umuhanda",
          "N'imirongo y'umuhondo yambukiranya umuhanda",
          "N'umurongo mugali wera udacagaguye uciye ku umuhanda",
        ],
        ans: 1,
        hint: "no hint",
      },
    ],
  },
  {
    examNumber: 3,
    data: [
      {
        question:
          "Iyo imirimo ikorwa mu muhanda icyapa cyerekana ikorwa ry'iyo mirimo kigomba kugira uruhande rufite:",
        options: [
          "Cm 50 z'uruhande",
          "Cm 55 z'uruhande",
          "Cm 40 z'uruhande",
          "M 1 y'uruhande",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Imikorere y'imyasa ry'amatara ndangacyerekezo rigomba kuba inshuro:",
        options: [
          "100 mu munota",
          "85 mu munota",
          "90 mu munota",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Ubugari bw'imizigo yikorewe n'ipikipiki ifite akanyabiziga kuruhande kimwe n'ubwa iya rumoruki ikuruwe na bene icyo kinyabiziga ntiburenza:",
        options: [
          "Santamirero 75 : (igare)",
          "Metero 1,25 : (moto cg pikipiki)",
          "Metero 1,50",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "Igisubizo: Santimetero 30",
      },
      {
        question:
          "Igice cy'imizigo yikorewe n'amagare na velomoteri kirenga ku impera y'inyuma ntibushobora kurenza:",
        options: ["Cm 50", "Cm 40", "M 1", "M 3"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Amatara ndanga mbere yakira rimwe buri gihe n'amatara akurikira:",
        options: [
          "Maremare",
          "Magufi na kamenabihu y'imbere",
          "Ndangamubyimba",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Icyapa cyerekana inzira y'amatungo itegetswe gifite ubuso bukurikira:",
        options: [
          "Bwera",
          "Bw'ubururu",
          "Bw'umuhondo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Ahari hejuru cyane h'ubuso bumurika bw'amatara magufi ntibushobora kuba aharenze:",
        options: [
          "Metero 1,90",
          "Metero 1,55",
          "Metero 1,20",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "ku amatara ndangambere na ndanganyuma = m 1,90",
      },
      {
        question:
          "Bamwe mu bakurikira ntibabarirwa mu bakozi babifite ububasha:",
        options: [
          "Abagenza cyaha n'abakozi bo muri gasutamo",
          "Abapolisi bo mu mutwe ushinzwe umutekano wo mu muhanda",
          "Abofisiye ba polisi y'ingabo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo imirimo iri gukorwa mu muhanda icyapa kiyerekana kigomba kugira uruhande rufite:",
        options: [
          "Cm 50 z'uruhande",
          "Cm 40 z'uruhande",
          "Cm 70 z'uruhande",
          "Cm 90 z'uruhande",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Igice gikikijwe n'uduce tugali dutandukanye tw'ibara ryera kinyurwamo bikurikira:",
        options: [
          "Amagare na velomoteri",
          "Ibinyabiziga bigenda buhoro",
          "Ibinyabiziga bitwarira abantu hamwe",
          "B na C ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },

      {
        question:
          "Amatara ndanga atuma ikinyabiziga kigaragara mu ntera ikurikira:",
        options: ["Metero 300", "Metero 200", "Metero 150", "Metero 100"],
        ans: 0,
        hint: "no hint",
      },
      {
        question: "Amatara maremare amurika mu ntera ya:",
        options: ["Metero 200", "Metero 300", "Metero 150", "Metero 100"],
        ans: 0,
        hint: "Amatara magufi amurika muri 100m, amatara magufi ku muhanda umurikiwe abonesha 40m.",
      },
      {
        question: "Ku matara ijambo ubuso bubonesha risobanura ubuso:",
        options: [
          "Burabagiranamo urumuli",
          "Busohokana urumuli",
          "Bubonesha",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Abayobozi b'amagare na velomoteri bubahiriza amategeko agenga abanyamaguru iyo:",
        options: [
          "Bagenda mukayira k'abanyamaguru",
          "Bagenda ku nkengero yegutse",
          "Bayoboye ikinyabiziga cyabo batacyicayeho",
          "A na B ni ibisubizo by'ukuri",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Iyo umuhanda ugabanyijwemo ibisate bibiri kandi kuwugendamo bigakorwa mu byerekezo byombi, abayobozi babujijwe kugendera mu gisate cy'ibumoso:",
        options: [
          "N'iyo kujya muri urwo ruhande byemewe",
          "Keretse kujya muri urwo ruhande byemewe",
          "Keretse iyo ari umuhanda w'icyerekezo",
          "Nta gisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Uretse iyo bitegetswe n'umukozi ubifitiye ububasha kandi batakwiteza ibyago, abayobozi b'ibinyabiziga ndakumirwa ntibategetswe gukurikiza amategeko akurikira:",
        options: [
          "Yerekeye ibyapa",
          "Yerekeye ibimenyetso byo mu muhanda",
          "Yerekeye gutambuka mbere",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "Igisubizo: Yerekeye ibimenyetso bimurika n'umuvuduko ntarengwa",
      },
      {
        question: "Inyamanswa zigomba kuyoborwa ku inkombe:",
        options: [
          "Y'iburyo",
          "Y'ibumoso",
          "Y'iburyo cyangwa ibumoso",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Abanyamaguru ntibashobora gutinda cyangwa guhagarara mu muhanda keretse:",
        options: [
          "Nta kinyabiziga kigenda",
          "Ari mu myanya yabagenewe",
          "Ibimenyetso by'umuriro bibibemerera",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "Igisubizo: keretse ari impamvu nyakuri ibibateye",
      },
      {
        question: "Icyapa gitegeka gukikira gifite ubuso bw'ibara:",
        options: [
          "Ryera",
          "Ritukura",
          "Ry'ubururu",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question: "Amatara maremare n'amagufi azima iyo:",
        options: [
          "Ikinyabiziga gihagaze",
          "Ikinyabiziga kigiye guhura n'ikindi",
          "Umuhanda umurikiwe hose",
          "Bishoboka kubona neza muri metero 100",
        ],
        ans: 0,
        hint: "Uhita ucana amatara yo guhagarara igihe kinini mu ijoro.",
      },
    ],
  },
  // {
  //   examNumber: 4,
  //   data: [
  //     {
  //       question:
  //         "Iyo kugenda bidashoboka kunyuzwa muyindi nzira ku buryo bworoshye, hashyirwaho icyerekezo kimwe ku buryo:",
  //       options: [
  //         "Buhoraho",
  //         "Busimburana",
  //         "Nyabwo kandi bwizewe",
  //         "Butunguranye",
  //       ],
  //       ans: 1,
  //       hint: "no hint",
  //     },
  //     {
  //       question:
  //         "Ibisobanuro cy'icyapa gishobora kuzuzwa, kugenwa cyangwa gusiganurwa n'ibyapa by'inyongera bifite ishusho y'urukiramende bishyirwa:",
  //       options: [
  //         "Munsi y'icyapa",
  //         "Hafi y'icyapa",
  //         "Hafi neza y'ahantu habi",
  //         "B na C ni ibisubizo by'ukuri",
  //       ],
  //       ans: 0,
  //       hint: "no hint",
  //     },
  //     {
  //       question:
  //         "Ibyapa by'inyongera bishyirirwaho abanyamaguru bigomba kuba biri ku buhagarike bwa:",
  //       options: [
  //         "Metero 1,55",
  //         "Metero 1,50",
  //         "Metero 1,25",
  //         "Ntagisubizo cy'ukuri kirimo",
  //       ],
  //       ans: 1,
  //       hint: "no hint",
  //     },
  //     {
  //       question:
  //         "Iyo abanyamaguru bageze mu mwanya wabagenewe, ahantu kugenda bitagengwa n'ibimenyetso by'umuriro nta n'umukozi ubifitiye ububasha uhari, abanyamaguru bashobora kwambukiranya umuhanda ari uko:",
  //       options: [
  //         "Kugenda muri icyo cyerekezo byemewe",
  //         "Batakwiteza impanuka",
  //         "Batabangamiye ibinyabiziga bigenda",
  //         "B na C ni ibisubizo by'ukuri",
  //       ],
  //       ans: 2,
  //       hint: "no hint",
  //     },
  //     {
  //       question: "Amatara ndanga ashobora gusimburwa n'amatara akurikira:",
  //       options: [
  //         "Kamenabihu",
  //         "Ndangamubyimba",
  //         "Ndangacyerekezo",
  //         "Ntagisubizo cy'ukuri kirimo",
  //       ],
  //       ans: 3,
  //       hint: "Igisubizo: asimburwa n'amatara yo guhagarara umwanya munini.",
  //     },
  //     {
  //       question:
  //         "Imodoka zikoreshwa butagisi kandi zitegereza abantu munzira zishyirwa ho amatara yerekana ibyo zikora n'itara ryerekana ko zidakodeshwa risa:",
  //       options: [
  //         "N'umweru",
  //         "N'umuhondo",
  //         "N'icunga rihishije",
  //         "N'icyatsi kibisi",
  //       ],
  //       ans: 3,
  //       hint: "no hint",
  //     },
  //     {
  //       question:
  //         "Iyo umurongo ucagaguye n'udacagaguye ibangikanye, umuyobozi yita gusa k'umurongo:",
  //       options: [
  //         "Ucagaguye",
  //         "Udacagaguye",
  //         "A na B ni ibisubizo by'ukuri",
  //         "Ntagisubizo cy'ukuri kirimo",
  //       ],
  //       ans: 3,
  //       hint: "Igisubizo: Umuyobozi yita gusa k'umurongo urushijeho kumwegera.",
  //     },
  //     {
  //       question:
  //         "Mu nsisiro, umuvuduko ntarengwa w'ikinyabiziga kidashobora kwikorera ibitenze toni imwe cyangwa 12500kg:",
  //       options: [
  //         "Km 50 mu isaha",
  //         "Km 40 mu isaha",
  //         "Km 60 mu isaha",
  //         "Km 70 mu isaha",
  //       ],
  //       ans: 0,
  //       hint: "no hint",
  //     },
  //     {
  //       question: "Ibyapa bibuza n'ibitegeka bikurikizwa mu gice gikurikira:",
  //       options: [
  //         "Cy'iburyo",
  //         "Cy'ibumoso",
  //         "Kiri aho bishinze",
  //         "Ntagisubizo cy'ukuri kirimo",
  //       ],
  //       ans: 3,
  //       hint: "Igisubizo: igice kiri hagati y'aho bishinze n'inkomone (imbogamizi) ikurikiyeho ku ruhande rw'inzira bishinzemo.",
  //     },
  //     {
  //       question:
  //         "Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri kimwe na rumoruki zikuruwe na byo iyo byamabye ibiziga by'insinga zikururuka zifite umubyimba uri hasi ya:",
  //       options: ["Cm 5", "Cm 4", "Cm 3", "Cm 2"],
  //       ans: 1,
  //       hint: "NB: Ibiziga by'insinga ntabwo bigira udushyundu cyangwa utunogo.",
  //     },
  //   ],
  // },
];

//111-130
