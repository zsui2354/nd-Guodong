
const node = document.getElementById('node');
const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');
const node3 = document.getElementById('node3');
const node4 = document.getElementById('node4');
const node5 = document.getElementById('node5');
const node6 = document.getElementById('node6');
const node7 = document.getElementById('node7');
const node8 = document.getElementById('node8');
const node9 = document.getElementById('node9');
const node10 = document.getElementById('node10');
const node11 = document.getElementById('node11');
const node12 = document.getElementById('node12');
const Clash_link = document.getElementById('Clash_link');

const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const clash_btn = document.getElementById('clash_btn');

const nodeList = {

    n: "",
    n1: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@190.93.246.98:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%231%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n2: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@141.101.114.17:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%232%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n3: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@141.101.121.38:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%233%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n4: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@173.245.49.16:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%234%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n5: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@108.162.198.196:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%235%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n6: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@190.93.247.118:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%236%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n7: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@190.93.244.34:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%237%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n8: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@103.21.244.164:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%238%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n9: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@108.162.193.241:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%239%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n10: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@173.245.59.190:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%2310%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n11: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@188.114.96.62:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%2311%20%E5%AD%90%E8%8A%82%E7%82%B9",
    n12: "vless://ffc426d9-353c-4ea9-8b26-bf4c7e2740da@188.114.98.14:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=random&type=ws&host=transit5.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BBblog%20%20%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20%E5%9F%BA%E8%8A%82%E7%82%B9%20%2312%20%E5%AD%90%E8%8A%82%E7%82%B9"
};

const clashLinked = {
    Linked_1: "https://github.com/zsui2354/nd-Guodong/blob/main/content.yaml"
};



/* node.value  = nodeList.n; */
node1.value = nodeList.n1;
node2.value = nodeList.n2;
node3.value = nodeList.n3;
node4.value = nodeList.n4;
node5.value = nodeList.n5;
node6.value = nodeList.n6;
node7.value = nodeList.n7;
node8.value = nodeList.n8;
node9.value = nodeList.n9;
node10.value = nodeList.n10;
node11.value = nodeList.n11;
node12.value = nodeList.n12;
Clash_link.value = clashLinked.Linked_1;



btn1.addEventListener('click',function(){
    copyToClipboard(nodeList.n1);
});

btn2.addEventListener('click',function(){
    copyToClipboard(nodeList.n2);
});

btn3.addEventListener('click',function(){
    copyToClipboard(nodeList.n3);
});

btn4.addEventListener('click',function(){
    copyToClipboard(nodeList.n4);
});

btn5.addEventListener('click',function(){
    copyToClipboard(nodeList.n5);
});

btn6.addEventListener('click',function(){
    copyToClipboard(nodeList.n6);
});

btn7.addEventListener('click',function(){
    copyToClipboard(nodeList.n7);
});

btn8.addEventListener('click',function(){
    copyToClipboard(nodeList.n8);
});

btn9.addEventListener('click',function(){
    copyToClipboard(nodeList.n9);
});

btn10.addEventListener('click',function(){
    copyToClipboard(nodeList.n10);
});

btn11.addEventListener('click',function(){
    copyToClipboard(nodeList.n11);
});

btn12.addEventListener('click',function(){
    copyToClipboard(nodeList.n12);
});


function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(function(){
        alert("信息已复制");
    }).catch(function(err){
        alert("无法复制结果");
    })
}



