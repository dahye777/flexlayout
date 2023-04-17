// 1단계 : 변수에 js로 변화/동작시킬 요소를 담아야 합니다

let articles = document.querySelectorAll("article");
let aside = document.querySelector("aside");
let close = aside.querySelector("span");
console.log(articles);
//유사배열로 반환된 articles를 반복을 돌면서
//각각의 article 개별로 이벤트를 걸어주어야 합니다

//반복문을 쓰지 않는다면 인덱스별로 이벤트를 하나하나 붙여서 작업을 해야하기에 
//코드가 길어지고 불필요하게 반복적인 코드를 작성하게 됩니다
// articles[0].addEventListener("mouseenter", function (e) {
//     e.currentTarget.querySelector("video").play();
// });

for (let el of articles) {
    //마우스가 들어가면 비디오가 재생되는 이벤트
    // hover를 js로 하게되면 두가지 이벤트로 작성해야합니다
    //mouseenter, mouseleave이벤트 두가지를 다 걸어야
    //호버처럼 작동합니다
    el.addEventListener("mouseenter", function (e) {
        e.currentTarget.querySelector("video").play();
    });

    //마우스가 빠지면 비디오가 멈추는 이벤트
    el.addEventListener("mouseleave", function (e) {
        e.currentTarget.querySelector("video").pause();
    })

    /*
    currentTarget 은 이벤트 리스너가 붙어지는
    그 대상을 의미합니다
    지금 상황에서는 마우스를 엔터한 아티클을 의미하는것
    만약 3인덱스 아티클에 마우스를 올렸다면
    currentTarget은 3인덱스 아티클이 됩니다
    */
    /*
    이벤트객체 : js에서 이벤트가 발생시 이벤트객체에 해당정보가 발생합니다
         el.addEventListener("click", function (e) {
         (e) 의 e가 이벤트 객체를 매개변수로 가져온것으로 해당이벤트의 정보를
         함수안으로 값을 가져오게됩니다
     제어문들에서는 특정값을 정확히 참조하는것이 아닌 ~할 때, 이므로
     이벤트 객체를 참조해야만 정확하게 어떤 요소에서 이벤트가 일어나서 그 요소를
     참조해야하는지를 알 수 있습니다
    */




    //클릭하면 일어나는 이벤트
    el.addEventListener("click", function (e) {
        //클릭이벤트가 일어났을때 
        //1. aside에 on이라는 활성화클래스를 붙여주어
        //화면에 띄워주는 일이 있어야한다
        aside.classList.add("on");

        //2. 클릭한 아티클의 h2, p, video의 경로를
        //가지고 와서 aside에 교체해야 한다
        //2-1 클릭한 아티클안의 내용(h2,p,video)의
        //내용을 변수로 저장합니다
        let art_h2 =
            e.currentTarget.querySelector("h2").innerText;
        // e.currentTarget 이 코드로 인해
        //정확하게 몇번째 아티클을 선택하였고, 또 
        //가지고 올 아티클을 지정해서 올바른 정보를
        //변수에 담을 수 있게합니다
        let art_p =
            e.currentTarget.querySelector("p").innerText;
        let art_video_src
            = e.currentTarget.querySelector("video").getAttribute("src");
        //2-2 변수로 저장된 값을 aside에 교체합니다
        console.log(art_video_src);
        aside.querySelector("h2").innerText = art_h2;
        aside.querySelector("p").innerText = art_p;
        aside.querySelector("video").setAttribute("src", art_video_src);
        //3. 비디오가 플레이 되어야합니다
        aside.querySelector("video").play();
    })

}

//닫기버튼 
//닫기버튼은 정확하게 참조되기 때문에 이벤트객체를 참조하지 않습니다
close.addEventListener("click", function () {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
})
