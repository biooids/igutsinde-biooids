type ExercisesQuestions = {
  exerciseNumber: number;
  data: DATA[];
};

type DATA = {
  question: string;
  options: string[];
  ans: number;
  hint: string;
};

export const exercisesQuestions: ExercisesQuestions[] = [
  {
    exerciseNumber: 1,
    data: [
      {
        question:
          "Iyo banyuze hafi y'inkomyi abanyamaguru bagomba gukikira banyuze mumuhanda abayobozi bagomba gusiga umwanya ufite ubugari bukurikira",
        options: [
          "Butarenze metero imwe hagati y'abo n'inkomyi",
          "Bwa metero imwe hagati y'abo n'inkomyi",
          "Butageze kuri metero imwe hagati y'abo n'inkomyi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Iyo umuhanda ugabanyijwemo ibisate bitatu kandi ukaba ugendwamo mubyerekezo byombi, umuyobozi wese abujijwe kugendera:",
        options: [
          "Mugisate cy'ibumoso",
          "Mugisate cy'iburyo",
          "Mugisate cy'ibumoso cyeretse kujya muri urwo ruhande byemewe",
          "Mugisate cyegereye inkombe y'ibumoso bw'umuhanda",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ikimenyetso gitanzwe mbere yo gukata kigomba gukomeza kwerekanwa:",
        options: [
          "Kugeza gukata birangiye",
          "Kugeza kujya k'uruhande birangiye",
          "Mugihe ikinyabiziga kikiyoborwa",
          "A na B n'ibisubizo by'ukuri",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Kugirango babe umutekano mumuhanda unyura muntara nyinshi icyemezo gifatwa:",
        options: [
          "N'umukuru w'intara",
          "Na minisitiri w'abakozi ba leta",
          "Numuyobozi mukuru wa polisi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo ari ukugenda kumirongo ibangikanye, umuyobozi ashobora gukatira iburyo aruko ari:",
        options: [
          "Mumurongo w'iburyo",
          "Mumurongo w'ubumoso",
          "Mumurongo w'uburyo cyangwa w'ubumoso",
          "A na B n'ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Ijambo inzira y'ibinyabiziga risobanura:",
        options: [
          "Ahanyurwa n'ibinyabiziga",
          "Umuhanda n'inkengero zegutse",
          "Umuhanda n'inzira ziwukikije",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Ukuboko kuzamuwe n'umukozi ubifitiye ububasha gutegeka abagenzi bose guhagarara keretse:",
        options: [
          "Abageze mu isangano",
          "Abataragera mu isangano",
          "Abari hafi y'isangano",
          "Abatwaye ibinyabiziga ndakumirwa",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Umuyobozi wese ugeze mu isangano aho ibinyabiziga biyoborwa n'ibimenyetso by'umuriro agomba:",
        options: [
          "Kubahiriza ibyo bimenyetso",
          "Guhita ava muri iryo sangano",
          "Kwitonda",
          "Kugabanya umuvuduko",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Uruhushya rw'agateganyo rwo gutwara ibinyabiziga rugira agaciro:",
        options: [
          "Kunzego zose zibinyabiziga",
          "Kunzego zose uretse C,D na E",
          "Kunzego A na B",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Abayobozi batambuka mbere mu isangano bagendamo bazengurutse ni:",
        options: [
          "Abaturutse mu kuboko kw'iburyo",
          "Abarigezemo mbere",
          "Abatwaye ibinyabiziga ndakumirwa",
          "Abatwaye ibinyabiziga bya gisirikare",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Iyo igenda munzira nyabagendwa, imikumbi igomba kugabanywamo udutsiko tugizwe n'inyamanswa:",
        options: [
          "Zitarenze umunani kandi dutandukanijwe n'intera ya metero makumyabiri",
          "Zitarenze icumi kandi dutandukanyijwe n'intera ya metero icumi",
          "Zitarenze makumyabiri kandi dutandukanyijwe n'intera ya metero icumi",
          "Zitarenze icumi kandi dutandukanyijwe n'intera ya metero",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo bibaye ngombwa ko ibinyabiziga by'iminyururu binyuzwa ku inzira nyabagendwa:",
        options: [
          "Ntibigomba kurenza umuvuduko wa km 25 mu isaha",
          "Abayobozi bagomba kubiyobora bitonze",
          "Bishyirwaho ibyangombwa bituma bitangiza umuhanda",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Umurambararo w'ibyapa bibuza n'ibitegeka bikoreshwa mukugaragaza imirimo ikorerwa mumuhanda ni:",
        options: ["Cm 50", "Cm 90", "Cm 75", "Ntagisubizo cy'ukuri kirimo"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Uruzitiro rukoreshwa mukugaragaza ahakorerwa imirimo munzira nyabagendwa rugomba gushyirwa ku ubuhagarike buri hagati ya:",
        options: [
          "Metero 1,50 na metero 2,10",
          "Metero 1 na metero 1,50",
          "Metero 1,25 na metero 1,50",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Uturanga cyerekezo dutoranya tw'ibara ryera dushyirwa:",
        options: [
          "Mu masangano",
          "Hafi neza y'ahantu habi",
          "Hafi y'ikorosi",
          "Hafi y'amasangano",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Umurongo uciyemo uduce umenyesha ko umurongo ukomeza wegereje ushobora kuzuzwa:",
        options: [
          "N'ibimenyetso by'umuriro",
          "N'ibyapa by'inyongera bifite ishusho y'urukiramende",
          "N'imirongo yambukiranya",
          "N'uturangagukata tw'ibara ryera",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Aho ibinyabiziga bitwarira abantu muri rusange bihagarara ahabujijwe guhagarara igihe kirekire hashobora kugaragazwa n'ibishushanyo",
        options: [
          "By'ibara ryera",
          "By'ibara ry'umuhondo",
          "By'ibara risa n'icunga rihishije",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Ibimenyetso by'inkomyi bishyirwaho:",
        options: [
          "N'uwayiteye",
          "Na polisi y'igihugu",
          "N'ubutegetsi bushinzwe inzira nyabagendwa",
          "A na C ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Utubendera dutukura twerekana ahakorerwa imirimo mumuhanda tugomba kugira uruhande rwa:",
        options: ["Cm 50", "Cm 75", "Cm 40", "Cm 15"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Amatara ashyirwa ahari inkomyi n'imirimo hagati ya nimugoroba no mugitondo ogohe ijuru rikeye agomba kuboneka muntera ya:",
        options: ["Metero 100", "Metero 125", "Metero 150", "Metero 0.75"],
        ans: 2,
        hint: "no hint",
      },
    ],
  },
  {
    exerciseNumber: 2,
    data: [
      {
        question:
          "Mirongo yera yambukiranya umuhanda igomba kugira ubugari hagati ya:",
        options: [
          "Santimetero 40 na santimetero 60",
          "Santimetero 20 na santimetero 60",
          "Santimetero 25 na santimetero 50",
          "Santimetero 10 na santimetero 15",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Impande za kare zera zigomba kugira umubyimba uri hagati:",
        options: [
          "Santimetero 25 na santimetero 50",
          "Santimetero 10 na santimetero 15",
          "Santimetero 20 na santimetero 60",
          "Santimetero 40 na santimetero 60",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ahanyurwa n'abayobozi b'amagare na velomoteri zifite imitende 2 bambukiranya imihanda haciye imirongo 2 icagaguye igizwe na:",
        options: [
          "Kare na mpandeshatu z'ibara ry'umuhondo",
          "Kare na mpandeshatu z'ibara ryera",
          "Kare n'ingirwamwashi z'ibara ry'umuhondo",
          "Kare n'ingirwamwashi z'ibara ryera",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Umurongo mugali wera udacagaguye uciye ku buryo bugororotse ku nkengero y'umuhanda werekana",
        options: [
          "Inkombe mpimbano",
          "Aho abayobozi bagomba guhagarara akanya gato gategetswe",
          "Aho abayobozi bagomba guhagarara akanya gato iyo ari ngombwa",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Imirongo yera irombereje idacagaguye n'icagaguye ishobora gusimburwa n'ibimenyetso by'agateganyo bigizwe:",
        options: [
          "N'imitemeri isa n'icunga rihishije",
          "N'imitemeri isa n'umuhondo",
          "N'ibyapa byo ku umuhanda",
          "A na B ni ibisubizo by'ukuri",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Uburebure n'ubutandukane by'uduce tw'umurongo ucagaguye buba bukurikiranye hagati ya:",
        options: [
          "Metero 1 na metero 5 no hagati ya metero 2 na metero 10",
          "Metero 2 na metero 5 no hagati ya metero 3 na metero 15",
          "Metero 1 na metero 5 no hagati ya metero 3 na metero 15",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Umurongo w'umuhondo ucagaguye uciye ku inkombe nyayo y'umuhanda, ku musezero w'inzira y'abanyamaguru cyangwa ku nkengero yegutse usobanura ko:",
        options: [
          "Guhagarara umwanya munini birabujijwe",
          "Guhagarara umwanya muto n'umunini birabujijwe",
          "A na B ni ibisubizo by'ukuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Igice cy'inzira nyabagendwa kigarukira kumirongo ibiri yera icagaguye ibangikanye gifite ubugali budahagije ngo imodoka zitambuke neza kiba ari:",
        options: [
          "Inzira y'abanyamaguru",
          "Inzira y'amatungo",
          "Inzira y'ibinyabiziga",
          "Agahanda k'amagare",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Iyo uduce tw'umurongo ari tugufi kandi twegeranye bivugako:",
        options: [
          "Ari hafi y'amasangano",
          "Ari hafi y'icyago kidasobanuye ukundi",
          "Ari hafi y'ikorosi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Itara ry'umutuku, iry'umuhondo ritamyasa cyangwa risa nk'icyatsi kibisi ashobora gusimburwa uko akurikirana:",
        options: [
          "N'umukozi ubifitiye ububasha",
          "N'ibyapa byo ku muhanda",
          "N'uturanga cyerekezo dutoranya",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },

      {
        question:
          "Ahantu uburyo bwo kugenda mu muhanda bwerekanwa n'ibimenyetso bimurika:",
        options: [
          "Ibinyabiziga bagomba kugenda buhoro",
          "Ibinyabiziga bagomba kugabanya umuvuduko",
          "Ibinyabiziga bishobora kugenda bibangikanye",
          "A na B ni ibisubizo by'ukuri",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Umurambararo w'ubuso bumurika bw'amatara y'inyongera yashyiriweho abanyamaguru ni:",
        options: [
          "Santimetero 5",
          "Santimetero 10",
          "Santimetero 15",
          "Santimetero 20",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Kubimenyetso bimurika byo mu buryo bw'amatara abiri itara ritukura n'iry'icyatsi kibisi azima akurikirana:",
        options: [
          "Habanje kwaka itara ritukura",
          "Habanje kwaka itara ry'icyatsi kibisi",
          "Yabanje kwakira rimwe",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Ibimenyetso bimurika byerekana uburyo bwo kugenda mu muhanda bishyirwa:",
        options: [
          "Iburyo cyangwa ibumoso bw'umuhanda",
          "Hejuru y'umuhanda",
          "Ahantu hose biboneye uburyo bwo kugenda",
          "Ibisubizo byose ni byo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo ubugali bw'umuhanda budahagije ngo ibisikana ryorohe abayobozi:",
        options: [
          "Abayobozi bagomba kuroherana",
          "Bagomba kugenda buhoro",
          "Bagomba guhagara",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Iyo icyerekezo kimwe kireba ishami ry'inzira nyabagendwa mu ntara nyinshi, icyerekezo gifatwa na:",
        options: [
          "Minisitiri ushinzwe gutwara ibintu n'abantu",
          "Umukuru wa polisi y'igihugu",
          "Minisitiri w'ubutegetsi bw'igihugu",
          "Minisitiri ushinzwe imirimo ya leta",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Uruhushya rwo gukorera amasiganwa n'indi mikino ku nzira nyabagendwa inyura mu ntara nyinshi rutangwa na:",
        options: [
          "Minisitiri w'umuco na siporo",
          "Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Minisitiri w'imirimo ya leta",
          "Minisitiri w'ubutegetsi bw'igihugu",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Uburemere ntarengwa bujya mu cyome[ubwato] bwerekanwa n'ibyapa bishyirwa:",
        options: [
          "Iburyo bw'umuhanda",
          "Ibumoso bw'umuhanda",
          "Kuri buri nkombe",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa:",
        options: [
          "N'ibyapa",
          "N'ibimenyetso bimurika",
          "N'ibikoresho ngarurarumuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question: "Ibiranga imikandara yo kwirinda ibyago bigenwa:",
        options: [
          "N'abakoze ikinyabiziga",
          "Na Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Polisi y'igihugu",
          "Na Minisitiri w'imirimo ya leta",
        ],
        ans: 1,
        hint: "no hint",
      },
    ],
  },
  {
    exerciseNumber: 3,
    data: [
      {
        question:
          "Birabujijwe gutwara ku ntebe z'ikinyabiziga umubare w'abantu urenze uwateganyijwe:",
        options: [
          "N'uwagikoze",
          "Na polisi y'igihugu",
          "Na Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Na Minisitiri w'imirimo ya leta",
        ],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Buri modoka igomba kugira uburyo bwo gusubira inyuma bukoreshwa:",
        options: [
          "Imodoka igenda",
          "Imodoka isubira inyuma",
          "Bicaye ku ntebe y'umuyobozi",
          "Umuyobozi yitonze",
        ],
        ans: 2,
        hint: "no hint",
      },
      {
        question:
          "Ikibanyabiziga kigomba gushyirwaho icyerekana umuvuduko ntarengwa kiri aho umuyobozi areba ni ikinyabiziga:",
        options: [
          "Kitarenze umuvuduko wa kilometero 40 mu isaha",
          "Kirenza umuvuduko wa kilometero 40 mu isaha",
          "Kirenza umuvuduko wa kilometero 50 mu isaha",
          "Kitarenza umuvuduko wa kilometero 60 mu isaha",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Isonga y'impombo yohereza ibyotsi ntishobora koherezwa:",
        options: [
          "Ibumoso bw'umuhanda",
          "Iburyo bw'umuhanda",
          "Ibumoso cyangwa iburyo bw'umuhanda",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Ihoni rya velomoteri rigomba kumvikanira muri:",
        options: [
          "Metero 50 nibura",
          "Metero 75 nibura",
          "Metero 25 nibura",
          "Metero 20 nibura",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Itara ryo guhagarara rigomba kwaka iyo:",
        options: [
          "Ikinyabiziga gihagaze",
          "Feri y'urugendo ikoreshejwe",
          "Ikinyabiziga kigenda",
          "A na C ni ibisubizo by'ukuri",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Utugarura rumuri turi inyuma ya za rumoroki tugomba gusa n'igishushanyo cya:",
        options: ["Mpandeshatu", "Kare", "Urukiramende", "Ingirwamwashi"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Amatara ndangacyerekezo ashobora gufatanwa n'amatara akurikira:",
        options: [
          "Maremare n'amagufi",
          "Ndanda",
          "Amatara yo guhagarara",
          "B na C ni ibisubizo by'ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Ijambo rumoruki rikoreshwa kuri rumoruki:",
        options: [
          "Zose",
          "Zagenewe gukururwa n'ibikamyo",
          "Zitarenza kg 750",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Amatara ndanga mubyimba agomba kuba adahumishije kandi agaragarira mu ntera ikurikira:",
        options: ["Metero 100", "Metero 150", "Metero 200", "Metero 125"],
        ans: 2,
        hint: "no hint",
      },

      {
        question:
          "Umuvuduko ntarengwa wa velomoteri hakurikijwe uko yakozwe ni:",
        options: [
          "Km 50 mu isaha",
          "Km 40 mu isaha",
          "Km 25 mu isaha",
          "Km 60 mu isaha",
        ],
        ans: 3,
        hint: "Ahatari mu nsisiro ni 50km/h",
      },
      {
        question: "Amategeko ntayegayezwa atihutirwa ashyirwaho n'amateka ya:",
        options: [
          "Minisitiri wo gutwara abantu n'ibintu",
          "Polisi y'igihugu",
          "Minisitiri w'ubutegetsi bw'igihugu",
          "Perezida wa Repubulika",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question: "Ikinyabiziga ntigishobora gukurura ibinyabiziga birenze:",
        options: ["2", "3", "4", "5"],
        ans: 0,
        hint: "no hint",
      },
      {
        question:
          "Iyo akanyamizigo gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi areba neza:",
        options: [
          "Hagomba umuherekeza wunganira umuyobozi",
          "Umuyobozi agomba kugakurura",
          "Umuyobozi arahagarika",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Ijambo feri y'urugendo bisobanura:",
        options: [
          "Feri ikoreshwa iyo ikinyabiziga kigenda",
          "Uburyo bukoreshwa kugira ngo ikinyabiziga kigende buhoro cyangwa gihagarare",
          "Feri ikoreshwa n'ikirenge",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question:
          "Uretse igihe icyapa kibyerekana ukundi, uburemere ntarengwa ku mateme akoze mu inginga z'ibiti no mu mbaho ni:",
        options: ["Toni 10", "Toni 50", "Toni 25", "Toni 8"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ibinyabiziga ndakumirwa bigomba kugira intabaza zihariye zifite amajwi ateye atya:",
        options: [
          "Nkarongoroye",
          "Yumvikanira kure",
          "Y’icengera amatwi",
          "A na C ni ibisubizo by’ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Amatara ndanga cyerekezo agaragarira nijoro igihe rikeye mu ntera ikurikira:",
        options: ["Metero 200", "Metero 100", "Metero 20", "Metero 150"],
        ans: 3,
        hint: "no hint",
      },
      {
        question:
          "Ijambo akayira risobanura inzira ifunganye yegenewe abagenzi bakurikira:",
        options: [
          "Abanyamaguru gusa",
          "Abanyamaguru n'ibinyabiziga by'ibiziga 2 gusa",
          "Abanyonzi b'amagare na velomoteri",
          "Ntagisubizo cy’ukuri kirimo",
        ],
        ans: 1,
        hint: "no hint",
      },
      {
        question: "Ikinyabiziga ntigishobora kugira amatara arenze 2 keretse:",
        options: [
          "Ndanga cyerekezo",
          "Ndanga",
          "Ndangamubyimba",
          "A na C ni ibisubizo by’ukuri",
        ],
        ans: 3,
        hint: "no hint",
      },
    ],
  },
];
//ended on 51-60
