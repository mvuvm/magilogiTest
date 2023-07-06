 //0부터 시작해서 내가 설정한 갯 수보다 1 적어야함 주의
/* 경력
'서경', 0 서경 엽귀
'사서', 1 사서 원탁
'서공', 2 서공 학원
'방문자', 3 방문자 학원
'이단자' 4 이단자 아방궁
'외전', 5 외전 아방궁
*/
/* 기관
'원탁', 0 사서 원탁
'학원', 1 사서 학원
'천애', 2 서경 천애
'엽귀', 3 서경 엽귀
'아방궁' 4 외전 아방궁
'문호', 5 서공 문호
*/


const qnaList = [
  {
    q: '어서오세요.<br/><br/>이곳은 신비한 힘이 가득한 도서관. 마법사의 자질을 가진 당신을 환영합니다.<br/><br/>어디한번 당신이 마법사로서 어떤 존재가 될지 알아볼까요?',
    a: [
      { answer: '숨겨진 서고에 입장한다', type: [0,1,2,3,4,5], content:[0,1,2,3,4,5]}
    ]
  },
  {
    q: '당신은 이제 막 마법의 힘에 눈을 떴습니다.<br>당신은 이제 부터 무얼 하고싶나요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>마법으로 나쁜 놈들을 때려잡기', type: [0,3], content:[0,3]},
      { answer: '<span class="answerType">✧ B ✧</span>마법의 가능성은 어디까지일까?<br>미지의 힘을 탐구하기', type: [1,2],content:[1,2,4]},
      { answer: '<span class="answerType">✧ C ✧</span>마법이 뭐 밥먹여준담?<br>평소와 같이 일상을 보내기', type: [4,5],content:[5]}
    ]
  },
  {
    q: '마법사가 된 당신은 다른 차원을 마음껏 여행할수 있게 되었습니다. 가장먼저 어디로 떠나보고 싶으신가요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>다양한 생물체들있는 동화 속 세계', type: [4,5], content:[2] },
      { answer: '<span class="answerType">✧ B ✧</span>히어로와 빌런이 있는 세계', type: [0,2], content:[0,3,5] },
      { answer: '<span class="answerType">✧ C ✧</span>광활한 대자연과 미개척지가 있는 세계', type: [1,3] , content:[4,1]}
    ]
  },
  {
    q: '또다른 세계에 도착한 당신. 이곳저곳을 둘러보며 구경하고 있자니, 누군가 다가와 말을 겁니다. 어떤 상대일까요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>큰 고깔모자를 쓰고있는 마법사', type: [2,3] , content:[1,2]},
      { answer: '<span class="answerType">✧ B ✧</span>훤칠한 인간', type: [0,1] , content:[0,3]},
      { answer: '<span class="answerType">✧ C ✧</span>말을 하는 드래곤', type: [4,5] , content:[4,5]}
    ]
  },
  {
    q: '"처음 보는 얼굴이네요 혹시 마법의 세계에 입문한지 얼마 안되신 분인가요?"라며 말을걸어오는 상대. 당신은 뭐라 답하나요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>누구세요, 저 아세요?<br> 무시하고 답변하지 않는다', type: [1,4] , content:[0,3,2]},
      { answer: '<span class="answerType">✧ B ✧</span>헉 어떻게 안거지?<br>상대방의 말이 맞다며 수긍한다', type: [2,3] , content:[1,5]},
      { answer: '<span class="answerType">✧ C ✧</span>친한척 말을 걸다니 수상해<br>대충 둘러댄다.', type: [0,5] , content:[4]}
    ]
  },
  {
    q: '"꺄아악 마법범죄다!" 수상한 자를 상대하고 있는 사이 어디선가 큰 소란이 났다는걸 알게 된 당신, 당신이 가장 먼저 할 일은?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>무슨일이지?<br>주변에서 정보 수집하기', type: [1,2] , content:[0,5]},
      { answer: '<span class="answerType">✧ B ✧</span>어디야!<br>일단 소리가 난곳으로 달려가기', type: [0,3] , content:[1,3]},
      { answer: '<span class="answerType">✧ C ✧</span>번거로운건 질색이야~<br>슬그머니 조용한곳으로 피신하기', type: [4,5] , content:[2,4]}
    ]
  },
  {
    q: '악당과의 대치 과정에서 치명상을 입은 당신, 지금 가장 먼저 떠오르는 생각은?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>이러다가 정말 죽겠는걸?! 살아남을 방법을 찾아야해!', type: [2,3] , content:[1,5]},
      { answer: '<span class="answerType">✧ B ✧</span>오 생각보다 강한 상대인걸? 그럼 나도 진심을 다 해볼까~', type: [0,4,5] , content:[4]},
      { answer: '<span class="answerType">✧ C ✧</span>이런 위기가 오게 되리라는걸 이미 예측하고 있었기 때문에 대비책도 마련해뒀지... 문제 없어!', type: [1] , content:[0,2,3]}
    ]
  },
  {
    q: '위기의 순간 당신의 마음속에서 무언가 피어오르는것이 느껴졌습니다. 이후 손을 들어보니 자기도 모르는 사이에 무언가를 들고있습니다. 당신이 들고있는 것은 무엇인가요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>무엇이든 꿰뚫을 수 있는 창', type: [0,3,4] , content:[3]},
      { answer: '<span class="answerType">✧ B ✧</span>모든것을 막아낼 수 있는 방패', type: [1] , content:[0,1]},
      { answer: '<span class="answerType">✧ C ✧</span>생명을 되살리는 비약', type: [2,5] , content:[2,4,5]}
    ]
  },
  {
    q: '&#39;내 소원을 들어줘!&#39; 마법의 힘으로 평소 친하게 지내던 친구의 간절한 마음속 소리를 들은 당신. 당신이 친구의 소원을 이루어주는 이유는 무엇인가요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>친구가 소중하기 때문에', type: [1,3] , content:[1,5]},
      { answer: '<span class="answerType">✧ B ✧</span>친구의 소원이 이루어지면<br>나에게도 득이기 때문에', type: [0,2] , content:[0,2,3]},
      { answer: '<span class="answerType">✧ C ✧</span>그냥 마음이 내켜서', type: [4,5] , content:[4]}
    ]
  },
  {
    q: '잡았다!! 마법범죄를 일으킨 악당을 잡는데에 성공한 당신. 당신은 그를 잡는데에 어느정도의 힘을 사용했나요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>전심전력.<br>모든 힘을 하얗게 불태웠다.', type: [1,2] , content:[1,5]},
      { answer: '<span class="answerType">✧ B ✧</span>뭐야 너무 쉽잖아~<br>몸풀기도 안됐다.', type: [4,5] , content:[4]},
      { answer: '<span class="answerType">✧ C ✧</span>철저한 계산하에 적을 제압하기에 적절한 정도의 힘만을 사용하였다.', type: [0,3] , content:[0,3,2]}
    ]
  },
  {
    q: '... 그런 일이 있었던거야. 악당의 기구한 성장배경을 알게된 당신, 그의 최종 처분은 당신의 손에 달려 있습니다.',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>판결의 책임을 지고 싶지 않아~<br>처분을 다른 사람에게 위임한다.', type: [0,3,4,5] , content:[1,2]},
      { answer: '<span class="answerType">✧ B ✧</span>사정을 듣고보니 딱한것 같아.<br>선처 해준다.', type: [3,5] , content:[4,5]},
      { answer: '<span class="answerType">✧ C ✧</span>그건 그거고 이건 이거지. 제대로 죄값을 치루게 한다.', type: [0,1,2] , content:[0,3]}
    ]
  },{
    q: '"놀라운 실력이군요! 저희와 함께하지 않으시겠습니까?" 옆에서 당신이 악당을 제압하는걸 보고있던 수상한 자는 사실 대법전이라는 마법사 협회 소속이라고 합니다.<br> 자신들은 마법으로 일어날 수 있는 다양한 사건 사고들을 해결하기 위해서 일하고 있다고 밝힌 상대는 당신을 대법전에 영입하고 싶다고합니다.<br> 당신이 이 제안을 수락한 이유는 뭔가요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>좋은 일을 하는 집단인것 같아서', type: [0,3] , content:[0,3,2]},
      { answer: '<span class="answerType">✧ B ✧</span>나의 실력을 보여주기에<br>제격인 조건이어서', type: [1,2,5] , content:[1,4]},
      { answer: '<span class="answerType">✧ C ✧</span>보수가 기대되서', type: [4] , content:[5]}
    ]
  },
  {
    q: '상대는 악당을 잡은 공로를 인정해서 당신을 가능한 성향이 맞는 기관으로 보내주겠다고 합니다. 당신은 마법으로 어떤 일을 하고싶나요?',
    a: [
      { answer: '<span class="answerType">✧ A ✧</span>무궁무진한 마법의 세계를 연구하는일', type: [1,2] , content:[0,1,4]},
      { answer: '<span class="answerType">✧ B ✧</span>마법으로 위험에 처한 세계와<br>사람들을 구하는일', type: [0,4], content:[2,3] },
      { answer: '<span class="answerType">✧ C ✧</span>마법을 활용한 기술로<br>윤택한 삶을 사는 일', type: [3,5] , content:[5]}
    ]
  },
  {
    q: '"호오... 그렇군요 참고하겠습니다. 자, 입회선물입니다. 이중에 가장 마음에 드는 걸 가져가세요."라며 여러개의 물건을 내미는 상대방.<br>당신은 무얼 챙기나요?',
    a: [
      { answer: '작은 운석파편', type: [0,1,2,3,4,5] , content:[5]},
      { answer: '오르골', type: [0,1,2,3,4,5], content:[1] },
      { answer: '만화경', type: [0,1,2,3,4,5], content:[3] },
      { answer: '야수의 발톱', type: [0,1,2,3,4,5], content:[4] },
      { answer: '드림캐쳐', type: [0,1,2,3,4,5], content:[2] },
      { answer: '단검', type: [0,1,2,3,4,5] , content:[0]}
    ]
  },
  {
    q: '"그럼 당신은 오늘부터 대법전 소속의 마법사입니다! 앞으로의 활약을 기대하겠습니다!"',
    a: [
      { answer: '숨겨진 서고를 나서기', type: [0,1,2,3,4,5] , content:[0,1,2,3,4,5]}
    ]
  }
]

const infoList = [
  {
    name: '서경',
    desc: '정의로운 당신은<br><em>서경</em>의 기질을 가지고 계시군요.',
    test: `
          <div class="tac"><span class="badge">정의감과 도덕성</span></div>
          당신은 공정함과 도덕적 가치를 중요하게 여기는 편입니다. 당신은 올바른 행동과 공평한 대우를 추구하며, 불공평하거나 부당한 상황에 반발하기도 합니다.

          <div class="tac"><span class="badge">사회적 책임감</span></div>
          당신은 자신의 행동이 다른 사람과 사회에 어떤 영향을 미치는지를 고려하고는 합니다. 당신은 때때로 사회적인 책임을 느끼며, 공공의 이익과 사회적 정의를 추구하는 경향이 있습니다.

          <div class="tac"><span class="badge">공정성과 관용성</span></div>
          당신은 주관적인 편견이나 편파적인 태도를 피하려고 노력합니다. 당신은 상황을 다각적으로 바라보고 공정한 판단을 내리려 노력합니다. 또한 다른 사람의 의견을 존중하고, 나와는 다른 그들의 관점에서 생각하거나 다른 가치를 가지는 것을 이해할 수 있습니다.

          <div class="tac"><span class="badge">용기와 행동</span></div>
          당신은 자신의 가치와 원칙을 위해 일어나 행동합니다. 당신은 부당한 상황이나 불의를 마주했을 때도 주저하지 않고 대화하고, 필요한 조치를 취합니다. 또한 통제력을 발휘하여 어려운 상황에서도 올바른 행동을 취할 수 있는 강인한 의지를 가지고 있습니다.

          <div class="tac"><span class="badge">인내와 희생</span></div>
          당신은 목표 달성을 위해 인내하고, 때로는 희생을 감수합니다. 어려움에 직면하더라도 굴하지 않고 올바른 길을 택할수 있는 능력을 지니고 있습니다.
    `
  },
  {
    name: '사서',
    desc: '현명한 당신은<br><em>사서</em>의 기질을 가지고 계시군요.',
    test: `
        <div class="tac"><span class="badge">지식과 통찰력</span></div>
        당신은 폭넓은 지식과 이해력을 가지고 있습니다. 당신은 다양한 주제에 대해 학습하고 탐구하는 것을 즐기며, 문제를 분석하고 해결하는 능력을 갖추고 있습니다.

        <div class="tac"><span class="badge">비판적 사고와 판단력</span></div>
        당신은 사고력과 판단력이 뛰어나며, 객관적이고 비판적으로 상황을 판단할 수 있습니다. 당신은 주관적인 편견을 피하고, 다양한 증거와 정보를 고려하여 합리적인 결정을 내릴 수 있습니다.

        <div class="tac"><span class="badge">인식과 관용성</span></div>
        당신은 주변의 상황과 사회적 맥락을 인식하고 이해합니다. 당신은 타인의 감정과 의견을 존중하며, 다양성을 받아들이고 존중하는 관용적인 태도를 지니고 있습니다.

        <div class="tac"><span class="badge">열린 태도</span></div>
        당신은 자신의 경험을 통해 배우고 성장합니다. 실패와 도전을 두려워하지 않으며, 실수로부터 교훈을 얻어낼 수 있는 능력을 가지고 있습니다. 당신은 지속적인 개인 발전을 추구하며, 자기 성장과 타인의 성장을 촉진합니다.

        <div class="tac"><span class="badge">유연성과 겸손함</span></div>
        당신은 자신의 잘못을 인정하고 필요한 경우 수정하려는 유연성과 겸손함을 갖추고 있습니다. 당신은 자신의 결점과 한계를 인식하며, 변화와 발전을 위해 자기 반성을 합니다.
    `
  },
  {
    name: '서공',
    desc: '꼼꼼하며 장인정신이 있는 당신은<br><em>서공</em>의 기질을 가지고 계시군요.',
    test: `
        <div class="tac"><span class="badge">세심함과 주의력</span></div>
        당신은 세부사항에 주의를 기울이고 세심하게 처리하려 합니다. 당신은 작은 오류나 부주의한 실수를 방지하기 위해 주의력을 집중시키며, 디테일을 놓치지 않습니다.

        <div class="tac"><span class="badge">철저함과 정확성</span></div>
        당신은 일을 철저히 검토하고 정확성을 중요시합니다. 당신은 작업이나 프로젝트를 완료하기 전에 세밀한 검토를 거치며, 오류나 불일치를 최소화하기 위해 노력합니다.

        <div class="tac"><span class="badge">계획성과 조직력</span></div>
        당신은 계획을 세우고 그에 따라 작업을 조직합니다. 당신은 일의 순서와 우선순위를 명확히 정하며, 일을 체계적으로 진행하는 편입니다.

        <div class="tac"><span class="badge">책임감과 성실성</span></div>
        당신은 자신의 업무나 의무에 대해 책임감을 가지며 성실하게 수행합니다. 당신은 약속을 잘 지키고 일정을 준수하며, 자신의 업무에 대해 최선을 다합니다.

        <div class="tac"><span class="badge">분석력과 문제해결 능력</span></div>
        당신은 문제를 분석하고 해결하기 위해 논리적인 사고를 사용합니다. 당신은 문제 상황을 정확히 이해하고, 합리적인 해결책을 찾기 위해 세부 사항을 면밀히 검토합니다.

        <div class="tac"><span class="badge">자기규제와 인내력</span></div>
        당신은 일을 완수하기 위해 자기규제와 인내력을 발휘합니다. 당신은 어려운 작업이나 장기적인 프로젝트에도 꾸준히 노력하며, 완료까지 인내심을 가지고 지속하고는 합니다.
    `
  },
  {
    name: '방문자',
    desc: '무한한 가능성이 흘러넘치는 당신은<br><em>방문자</em>의 기질을 가지고 계시군요.',
    test: `
        <div class="tac"><span class="badge">열린 마음과 호기심</span></div>
        당신은 새로운 아이디어와 경험에 대한 호기심을 가지고 있습니다. 당신은 열린 마음으로 새로운 지식과 관점을 수용하며, 지속적인 학습과 발전을 위해 노력합니다.

        <div class="tac"><span class="badge">긍정적인 태도와 낙관성</span></div>
        당신은 어려움을 긍정적으로 대처하고, 실패를 배움의 기회로 여깁니다. 당신은 때때로 낙관적인 태도를 가지며, 자신의 능력을 믿고 도전에 임합니다.

        <div class="tac"><span class="badge">자기인식과 자기반성</span></div>
        당신은 자기를 잘 이해하고, 강점과 약점을 인식하려 노력합니다. 당신이 자기반성을 통해 성장할 수 있는 부분을 파악하고, 개선할 수 있는 방향을 모색할수록 성장해 나아갈 것입니다.

        <div class="tac"><span class="badge">투자와 성장</span></div>
        당신이 더 큰 목표를 이루기 위해서는 자신의 성장이 필요하기 때문에 자기 계발을 위해 시간과 에너지를 투자해야합니다.

        <div class="tac"><span class="badge">유연성과 적응력</span></div>
        당신은 변화와 도전에 유연하게 대처하며, 높은 적응력을 갖추고 있습니다. 당신은 새로운 상황에 빠르게 적응하고, 변화를 기회로 여깁니다.
    `
  },
  {
    name: '이단자',
    desc: '남들과는 다른 당신은<br><em>이단자</em>의 기질을 가지고 계시군요.',
    test: `
        <div class="tac"><span class="badge">독립성과 자기식별</span></div>
        당신은 자신만의 독특한 아이디어, 가치관, 관심사를 가지고 있습니다. 당신은 자기 자신을 잘 알고, 타인과는 다른 개인적인 아이덴티티와 식별을 형성하려고 하곤 합니다.

        <div class="tac"><span class="badge">창의성과 독창성</span></div>
        당신은 창의성과 독창성을 갖추고 있습니다. 당신은 새로운 아이디어를 생각하고 독자적인 방식으로 문제를 해결합니다. 예술, 디자인, 문학 등 창의적인 분야에서 자신의 개성을 표현하는 경향이 있습니다.

        <div class="tac"><span class="badge">자유로움과 독립성</span></div>
        당신은 자유로운 사고와 행동을 추구합니다. 당신은 전통적인 규칙과 제약을 벗어나 자신의 이념과 가치에 따라 행동합니다. 독립적인 결정을 내리고, 자신만의 길을 선택하는 경향이 있습니다.

        <div class="tac"><span class="badge">자신감과 자기표현</span></div>
        당신은 자신감을 가지고 자기를 표현합니다. 당신은 자신의 의견을 솔직하게 표현하며, 자신의 창작물이나 특색 있는 스타일을 통해 자기를 표출합니다.

        <div class="tac"><span class="badge">적응력과 타협능력</span></div>
        당신은 자신의 개성을 지키면서도 다른 사람과 협력하고 조화롭게 지낼 수 있는 능력을 가지고 있습니다. 당신은 다른 사람의 의견을 존중하고 타협할 줄 아는 유연성을 가지며, 상황에 적응하는 능력을 갖추고 있습니다.
    `
  },
  {
    name: '외전',
    desc: '소신있는 당신은<br><em>외전</em>의 기질을 가지고 계시군요.',
    test: `
        <div class="tac"><span class="badge">자기 확신과 자기 신뢰</span></div>
        당신은 자기에 대한 확신과 신뢰를 갖고 있습니다. 자신의 가치와 능력을 자각하며, 자신의 선택과 결정에 대해 자신을 믿습니다.

        <div class="tac"><span class="badge">독립성과 자기주장</span></div>
        당신은 독립적이며 자기주장을 갖고 있습니다. 다른 사람들의 의견이나 사회적 압력에 구애받지 않고, 자신의 신념과 원칙에 따라 행동합니다.

        <div class="tac"><span class="badge">자유로운 사고와 창의성</span></div>
        당신은 자유로운 사고와 창의성을 가지고 있습니다. 다양한 관점과 아이디어를 탐구하며, 독자적인 사고와 접근법을 통해 문제를 해결하려고 합니다.

        <div class="tac"><span class="badge">자기표현</span></div>
        당신은 자기를 자유롭게 표현하고 자신의 주장을 펼치고는 합니다. 타인에게 자신의 의견과 감정을 솔직하게 표현하며, 자신의 목소리를 존중합니다.

        <div class="tac"><span class="badge">도덕적인 관점과 원칙</span></div>
        당신은 자신만의 도덕적인 관점과 원칙을 중요시합니다. 자신의 행동과 선택을 도덕적인 가치와 일치시키려고 노력하며, 자기의 정의와 윤리적인 원칙을 지킵니다.
    `
  }
]

const info02List = [
  {
    name: '원탁',
    desc: '토론을 즐기고 치밀한 당신은<br><em>원탁</em>과 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">리더십과 결단력</span></div>
        당신은 문제 상황에서 결단력을 갖추고, 다른 사람들을 이끌어 나갈 수 있는 리더십 특징을 가지고 있기 때문에 결정을 내리고 리더십을 행사하는 능력이 중요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">자기통제와 자기규제</span></div>
        당신은 자기통제와 자기규제를 능숙하게 해낼 수 있습니다. 또한 자신의 행동과 표현을 조절하고 규칙을 준수하는 능력이 있기 때문에 규율과 규정에 따라 운영되는 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">책임감과 성실성</span></div>
        당신은 자신의 업무나 의무를 성실히 수행하며, 주어진 책임을 완수하기 위해 노력합니다. 그렇기 때문에 책임감과 성실성이 중요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">협력과 조화</span></div>
        당신은 타인과의 협력을 중요시하며, 다양한 의견과 이해를 조화롭게 조율하는 능력을 갖추고 있습니다. 이에 따라 다양한 사람들과 협력하고 조화롭게 지내는 능력이 필요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">전문성과 지식</span></div>
        당신은 자신의 분야에 대한 깊은 지식과 경험을 갖추고, 전문적인 업무를 수행할 수 있는 능력을 지니고 있습니다. 전문성과 지식이 요구되는 기관에서 당신의 능력을 충분히 발휘 할 수 있을 것입니다.
    `
  },
  {
    name: '학원',
    desc: '끈기가 있고 계속해서 성장해 나아가는 당신은<br><em>학원</em>과 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">인내심과 꾸준함</span></div>
        당신은 인내심과 꾸준한 노력을 가지고 어려움을 극복할 수 있는 능력을 가지고 있기 때문에 시간과 노력이 많이 필요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">커뮤니케이션과 대인관계</span></div>
        당신은 원활한 커뮤니케이션과 대인관계 능력을 갖추고 있습니다. 당신은 타인과 소통을 적극적으로 추구하고, 타인의 의견과 관점을 수용하기 때문에, 소통이 필요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">자기주도성과 독립성</span></div>
        당신은 독립적으로 작업할 수 있는 능력과 자기주도성을 갖추고 있습니다. 자기 주도적으로 연구를 수행하고, 새로운 아이디어를 개발하고 구현해야하는 기관과 잘 맞습니다.

        <div class="tac"><span class="badge">지식과 전문성</span></div>
        당신은 자신의 전공 분야에 대한 깊은 이해와 지식을 가지고 있으며, 최신 교육 동향과 연구를 지속적으로 학습하고 적용합니다. 지식과 전문성이 요구되는 기관에서 당신의 능력을 충분히 발휘 할 수 있을 것입니다.

        <div class="tac"><span class="badge">책임감과 성실성</span></div>
        당신은 자신의 업무에 대한 책임감과 성실성을 갖추며, 성과에 대한 책임을 지고 최선을 다합니다. 그렇기 때문에 책임감과 성실성이 중요한 기관에 소속 되면 좋습니다.
    `
  },
  {
    name: '천애',
    desc: '침착하고 만사에 초연한 면이 있는 당신은<br><em>천애</em>와 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">분석력과 비판적 사고</span></div>
        당신은 뛰어난 분석력과 비판적 사고를 가지고 있어 정보를 정확하게 해석하고 판단할 수 있기 때문에 현재의 동향과 데이터를 분석하고 비판적으로 평가해야하는 기관에 소속되면 좋습니다.

        <div class="tac"><span class="badge">시각적 상상력과 창의성</span></div>
        당신은 다양한 가능성과 시나리오를 상상하며, 새로운 아이디어와 접근법을 제시할 수 있습니다. 이 능력은 시각적 상상력과 창의성이 필요한 작업에 큰 도움이 될 것 입니다.

        <div class="tac"><span class="badge">통찰력과 직관력</span></div>
        당신은 데이터와 패턴을 분석하며 향후 동향을 예측하는 능력과 직관을 가지고 있습니다. 그렇기 때문에 통찰력과 직관력이 중요시 여겨지는 작업을 능숙히 수행할 수 있습니다.

        <div class="tac"><span class="badge">민첩성과 적응력</span></div>
        당신은 유연하게 변화에 대응하고, 새로운 정보와 상황에 적응할 수 있는 능력을 가지고 있습니다. 빠른 변화에 대처할 수 있는 민첩성과 적응력이 필요한 기관에서 당신의 능력을 충분히 발휘 할 수 있을 것입니다.

        <div class="tac"><span class="badge">커뮤니케이션과 설득력</span></div>
        당신은 복잡한 정보를 이해하기 쉽게 전달하고, 자신의 예측과 관련된 이유와 근거를 설명할 수 있습니다. 결과를 다른 사람들과 공유하고 설득할 수 있는 커뮤니케이션과 설득력이 필요한 상황에서 당신의 능력은 빛을 발할 것 입니다.
    `
  },
  {
    name: '엽귀',
    desc: '이성적이고 결단력있는 당신은<br><em>엽귀</em>와 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">규율과 질서</span></div>
        당신은 규정과 규칙을 준수하며, 체계적으로 일할 수 있는 능력을 갖추고 있습니다. 규율에 따라 행동하고, 일상적인 업무와 임무를 체계적으로 수행합니다. 때문에 규율과 질서를 중시되는 기관에 소속되면 좋습니다.

        <div class="tac"><span class="badge">신체적인 건강과 체력</span></div>
        당신은 건강하고 강건한 체력을 유지하며, 체력적으로 요구되는 업무와 군사 훈련을 수행할 수 있기 때문에, 무력이 필요한 기관에 소속되면 좋은 평가를 받을 수 있습니다.

        <div class="tac"><span class="badge">의사 소통과 협업능력</span></div>
        당신은 명확하고 효과적으로 의사소통할 수 있으며, 팀원들과 협력하여 공동의 목표를 달성할 수 있습니다. 의사 소통과 협업이 필요한 상황에서 이 능력은 빛을 발휘할 것 입니다.

        <div class="tac"><span class="badge">정확성과 신뢰성</span></div>
        당신은 자신의 임무를 정확하게 수행하며, 신뢰할 수 있는 정보와 결과물을 제공할 수 있는 능력이 있기 때문에 정확성과 신뢰성이 요구되는 기관에 소속되면 좋습니다.

        <div class="tac"><span class="badge">결단력과 적응력</span></div>
        당신은 어려운 상황에서도 결정을 내리고, 변화에 빠르게 대응할 수 있습니다. 빠른 결단력과 적응력이 필요로하는 기관에 잘 맞는 인재상입니다.
    `
  },
  {
    name: '아방궁',
    desc: '호기심 넘치고 탐구심이 많은 당신은<br><em>아방궁</em>과 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">호기심과 탐구심</span></div>
        당신은 지속적인 호기심과 탐구심을 갖고 있습니다. 새로운 지식과 발견에 대한 열망이 있으며, 문제 해결과 혁신적인 아이디어를 탐구하고자 합니다.

        <div class="tac"><span class="badge">분석력과 논리적 사고</span></div>
        당신은 논리적인 사고력과 분석력을 갖추어 문제를 체계적으로 분석하고 과학적인 방법으로 접근합니다. 이 능력은 복잡한 문제를 분석하고 해결해야 하는 상황에 꼭 필요한 능력입니다.

        <div class="tac"><span class="badge">창의성과 창조적 사고</span></div>
        당신은 새로운 아이디어와 접근법을 발견하고, 문제를 다양한 관점에서 생각할 수 있는 창조적인 사고를 가지고 있기 때문에 창의성과 창조적인 사고가 필요한 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">비판적 사고와 검증 가능성</span></div>
        당신은 자신의 연구를 비판적으로 분석하고, 결과를 검증 가능한 방식으로 제시할 수 있습니다. 비판적인 사고와 검증 가능성을 요구하는 기관에 잘 맞는 인재상 입니다.

        <div class="tac"><span class="badge">학습과 지식 습득</span></div>
        당신은 새로운 연구 분야나 방법에 대해 열려있으며, 지식을 지속적으로 확장하고 발전시키기 위해 학습에 몰두합니다. 그렇기 때문에 지속적인 학습과 지식 습득이 중요시여겨지는 기관에 소속되면 좋습니다.
    `
  },
  {
    name: '문호',
    desc: '사회적이고 언변이 좋은 당신은<br><em>문호</em>와 잘 맞습니다.',
    test: `
        <div class="tac"><span class="badge">객관적인 분석과 이해</span></div>
        당신은 복잡한 사회문제를 분석하고 이해할 수 있는 능력을 가지고 있으며, 다양한 이해 관계자들의 의견과 관점을 이해할 수 있습니다. 때문에 객관적인 분석과 이해가 필요한 상황에 강합니다.

        <div class="tac"><span class="badge">대화와 협상 능력</span></div>
        당신은 다른 이해 관계자들과 개방적인 대화를 할 수 있으며, 상호간의 이익을 고려한 협상을 수행할 수 있습니다. 대화와 협상 능력을 필요로 하는 기관에 잘 맞는 인재상 입니다.

        <div class="tac"><span class="badge">공정성과 중립성</span></div>
        당신은 공정하고 중립적인 입장을 유지할 수 있으며, 주어진 상황에서 이를 실천할 수 있기 때문에 공정성과 중립성을 요하는 기관에 소속 되면 좋습니다.

        <div class="tac"><span class="badge">인간 관계와 이해</span></div>
        당신은 인간 관계를 존중하고 이해하며, 사회적으로 다양한 배경을 가진 사람들과 소통할 수 있습니다. 사람들 간의 관계가 중요시되는 상황에 강한 타입입니다.

        <div class="tac"><span class="badge">타협과 타인의 이익 고려</span></div>
        당신은 상호간의 이익을 고려하며, 사회적으로 공헌적인 결정과 솔루션을 찾는 데 주력합니다. 타협과 타인의 이익을 고려하는 능력을 필요로하는 기관에 소속되면 좋은 평가를 받을 수 있습니다.
    `
  }
]
