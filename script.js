
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
    n1: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICMxIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTQzLjIzMCIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n2: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICMyIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTM4LjEzNSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n3: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICMzIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjEwNC4yNi4zLjE4OSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n4: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICM0IFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTM4LjIyMSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n5: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICM1IFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTQyLjE2MyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n6: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtICM2IFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTQzLjE3NCIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n7: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@141.101.122.188:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%237%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP",
    n8: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@188.114.97.132:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%238%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP",
    n9: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@108.162.195.167:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%239%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP",
    n10: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@141.101.114.201:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%2310%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP",
    n11: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@141.101.122.247:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%2311%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP",
    n12: "vless://a3f765ba-0af8-4c3d-b2cb-7a032fe1f66d@141.101.120.231:443?encryption=none&security=tls&allowInsecure=1&type=ws&host=transit2.vyantaosheweining.top&path=%2Fbbs#%E7%8E%8B%E6%9E%9C%E5%86%BB%20-%20%2312%20%E7%BE%8E%E5%9B%BD23%E6%B4%9B%E6%9D%89%E7%9F%B6VPS%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BC%80%E6%94%BE%E8%8A%82%E7%82%B9%20Vless%20%2BTLS%20%2BGCORE%20CDN%20%2B%E4%BC%98%E9%80%89IP"
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


btn.addEventListener('click',function(){
    copyToClipboard(nodeList.n);
});

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

clash_btn.addEventListener('click',function(){
    copyToClipboard(clashLinked.Linked_1)
});

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(function(){
        alert("信息已复制");
    }).catch(function(err){
        alert("无法复制结果");
    })
}



