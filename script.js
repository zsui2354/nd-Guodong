

const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');
const node3 = document.getElementById('node3');
const node4 = document.getElementById('node4');
const node5 = document.getElementById('node5');
const Clash_link = document.getElementById('Clash_link');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const clash_btn = document.getElementById('clash_btn');

const nodeList = {
    n1: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTQzLjIzMCIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n2: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTM4LjEzNSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n3: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjEwNC4yNi4zLjE4OSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n4: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTM4LjIyMSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==",
    n5: "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NzM4Qlx1Njc5Q1x1NTFCQiAtIFx1N0Y4RVx1NTZGRDIzXHU2RDFCXHU2NzQ5XHU3N0Y2VlBTXHU2NzBEXHU1MkExXHU1NjY4XHU1RjAwXHU2NTNFXHU4MjgyXHU3MEI5IHZtZXNzIFx1MDAyQlRMUyBcdTAwMkJHQ09SRSBDRE4gXHUwMDJCXHU0RjE4XHU5MDA5SVAiLA0KICAiYWRkIjogIjE2Mi4xNTkuMTQyLjE2MyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzMjVkYTBmZC1iNzhjLTRiZmUtZTI2Yi1mNTMxMGVhOTMyNDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRyYW5zaXQudnlhbnRhb3NoZXdlaW5pbmcudG9wIiwNCiAgInBhdGgiOiAiL2JicyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ=="
};

const clashLinked = {
    Linked_1: "https://github.com/zsui2354/nd-Guodong/blob/main/content.yaml"
};

node1.value = nodeList.n1;
node2.value = nodeList.n2;
node3.value = nodeList.n3;
node4.value = nodeList.n4;
node5.value = nodeList.n5;
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

