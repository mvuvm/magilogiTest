const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const loading = document.querySelector('.loading_modal');
const endPoint = 15; // 여기 질문 총 갯수
let select = [0, 0, 0, 0, 0, 0];
let select02 = [0, 0, 0, 0, 0, 0];

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}
function calResult02() {
  var result = select02.indexOf(Math.max(...select02));
  return result;

}


function setResult() {
  let point = calResult();
  let point02 = calResult02();
  const resultName = document.querySelector('.resultName');
  resultName.innerHTML = infoList[point].name + '&nbsp;' + info02List[point02].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point02 + '.png';
  //resultImg.src = imgURL;
  //resultImg.alt = point;
  //resultImg.classList.add('img-fluid');
  //imgDiv.appendChild(resultImg);
  let imgList= [];

  imgList.push(`
    <img src="${imgURL}" class="img-fluid" alt="결과">
    <div class="lottie_box">
      <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_n0xnbjiz.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
  `);
  imgDiv.innerHTML = imgList.join('');


  const resultDesc = document.querySelector('.resultDesc'); //기존
  const resultName1 = document.querySelector('.resultName1');
  const resultName2 = document.querySelector('.resultName2');
  const resultDesc1 = document.querySelector('.resultDesc1');
  const resultDesc2 = document.querySelector('.resultDesc2');
  const resultDescCont1 = document.querySelector('.resultDescCont1');
  const resultDescCont2 = document.querySelector('.resultDescCont2');
  resultName1.innerHTML = infoList[point].name;
  resultName2.innerHTML = info02List[point02].name;
  resultDesc1.innerHTML = infoList[point].desc;
  resultDesc2.innerHTML = info02List[point02].desc;
  resultDescCont1.innerHTML = infoList[point].test;
  resultDescCont2.innerHTML = info02List[point02].test;

  console.log(select);
  console.log(select02);
}

function load(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    loading.style.WebkitAnimation = "fadeIn 1s";
    loading.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      loading.style.display = "block";
    }, 450)
  })
  setTimeout(() => {
    goResult()
  }, 4500)
}

function goResult() {
  loading.style.WebkitAnimation = "fadeOut 1s";
  loading.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      loading.style.display = "none";
      result.style.display = "block";
    }, 450)
  })
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button'); //여기서 버튼 만들고
  answer.classList.add('answerList');  //여기서 만들어진 버튼에 클래스 넣고
  answer.classList.add('fadeIn');

  a.appendChild(answer); //여기서 만들어진 버튼에 a태그 감싸주고
  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList'); //클래스명으로 선택
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s"; //단순 애니메이션 삽입
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type; //여기에 오브젝트 골라주면 될 것 같음
      var target02 = qnaList[qIdx].a[idx].content; //여기에 오브젝트 골라주면 될 것 같음
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
        select02[target02[i]] += 1;   //카운팅 여기 추가함
      }

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    load();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';

  var currentIndex = document.querySelector('.currentIndex');
  currentIndex.innerText = qIdx + 1;
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
      result.style.display = "none";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);

  var fullIndex = document.querySelector('.fullIndex');
  fullIndex.innerText = endPoint;

 select = [0, 0, 0, 0, 0, 0];
 select02 = [0, 0, 0, 0, 0, 0];
}