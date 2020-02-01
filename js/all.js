var btn = document.querySelector(".btn");
btn.addEventListener("click", benEvent, "false");

var information = [];

function benEvent(e) {
    let height = document.querySelector(".heightInput").value;
    let weight = document.querySelector(".weightInput").value;
    let BMI = weight / Math.pow((height / 100), 2);
    if (isNaN(BMI)) {
        alert("請輸入正確資料");
    } else {
        resultChange(BMI.toFixed(2), height, weight);
    }

}

function resultChange(BMI, height, weight) {
    let remarkText = '';
    let color = '#86D73F';
    if (BMI <= 18.5) {
        remarkText = '過輕';
        color = '#31BAF9';
    } else if (BMI >= 18.5 && BMI < 25) {
        remarkText = '理想';
        color = '#86D73F';
    } else if (BMI >= 25 && BMI < 30) {
        remarkText = '過重';
        color = '#FF982D';
    } else if (BMI >= 30 && BMI < 35) {
        remarkText = '輕度肥胖';
        color = '#FF6C03';
    } else if (BMI >= 35 && BMI < 40) {
        remarkText = '中度肥胖';
        color = '#FF6C03';
    } else if (BMI >= 40) {
        remarkText = '重度肥胖';
        color = '#FF1200';
    }

    let data = [];
    data.remarkText = remarkText;
    data.bmi = BMI;
    data.height = height;
    data.weight = weight;
    data.date = new Date();
    data.color = color;
    information.push(data);
    upDataList();

    let result = document.querySelector(".result");
    result.innerHTML = '';
    let BMIBtn = document.createElement('div');
    BMIBtn.setAttribute('class', 'BMIBtn');
    BMIBtn.style.border = '6px solid ' + color;
    BMIBtn.style.color = color;
    result.appendChild(BMIBtn);
    let bmiValue = document.createElement('p');
    bmiValue.setAttribute('class', 'bmiValue');
    bmiValue.textContent = BMI;
    BMIBtn.appendChild(bmiValue);

    let bmiP = document.createElement('p');
    bmiP.setAttribute('class', 'bmi');
    bmiP.textContent = 'BMI';
    BMIBtn.appendChild(bmiP);

    let loopBtn = document.createElement('input');
    loopBtn.setAttribute('type', 'button');
    loopBtn.setAttribute('class', 'loopBtn');
    loopBtn.style.backgroundColor = color;
    loopBtn.addEventListener("click", function(e) {
        result.innerHTML = '<input type="button" id="btn" class="btn" value="看結果">';
        btn = document.querySelector(".btn");
        btn.addEventListener("click", benEvent, "false");
    }, "false");
    BMIBtn.appendChild(loopBtn);

    let remark = document.createElement('div');
    remark.setAttribute('class', 'remark');
    remark.textContent = remarkText;
    remark.style.color = color;
    result.appendChild(remark);
}

function upDataList() {
    let BMIlist = document.querySelector(".BMIlist");
    BMIlist.innerHTML = '';

    for (let i = 0; i < information.length; i++) {
        let data = document.createElement("div");
        data.setAttribute('class', 'data');
        BMIlist.appendChild(data);

        let tag = document.createElement('div');
        tag.setAttribute('class', 'tag');
        tag.style.backgroundColor = information[i].color;
        data.appendChild(tag);

        let remind = document.createElement('p');
        remind.setAttribute('class', 'remind');
        remind.textContent = information[i].remarkText;
        data.appendChild(remind);

        let materialBMI = document.createElement('div');
        materialBMI.setAttribute('class', 'material');
        data.appendChild(materialBMI);
        let titBMI = document.createElement('p');
        titBMI.setAttribute('class', 'tit');
        titBMI.textContent = "BMI";
        materialBMI.appendChild(titBMI);
        let vluBMI = document.createElement('p');
        vluBMI.setAttribute('class', 'vlu');
        vluBMI.textContent = information[i].bmi;
        materialBMI.appendChild(vluBMI);


        let materialWeight = document.createElement('div');
        materialWeight.setAttribute('class', 'material');
        data.appendChild(materialWeight);
        let titWeight = document.createElement('p');
        titWeight.setAttribute('class', 'tit');
        titWeight.textContent = "weight";
        materialWeight.appendChild(titWeight);
        let vluWeight = document.createElement('p');
        vluWeight.setAttribute('class', 'vlu');
        vluWeight.textContent = information[i].weight;
        materialWeight.appendChild(vluWeight);

        let materialHeight = document.createElement('div');
        materialHeight.setAttribute('class', 'material');
        data.appendChild(materialHeight);
        let titHeight = document.createElement('p');
        titHeight.setAttribute('class', 'tit');
        titHeight.textContent = "height";
        materialHeight.appendChild(titHeight);
        let vluHeight = document.createElement('p');
        vluHeight.setAttribute('class', 'vlu');
        vluHeight.textContent = information[i].height;
        materialHeight.appendChild(vluHeight);

        let materialDate = document.createElement('div');
        materialDate.setAttribute('class', 'material');
        data.appendChild(materialDate);
        let vluDate = document.createElement('p');
        vluDate.setAttribute('class', 'vlu');
        let date = information[i].date;
        vluDate.textContent = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
        materialDate.appendChild(vluDate);

    }



}