javascript:(async () => {    let n = document.createElement('iframe');    document.body.append(n);    window.alert = n.contentWindow.alert.bind(window);    window.prompt = n.contentWindow.prompt.bind(window);    window.confirm = n.contentWindow.confirm.bind(window);    n.remove();            function reactHandler() {                return Object.values(document.querySelector('#app%20%3E%20div%20%3E%20div'))[1].children[1]._owner;%20%20%20%20%20%20%20%20%20%20%20%20};%20%20%20%20%20%20%20%20%20%20%20%20if%20(window.location.pathname%20!=%20'/play/gold')%20{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('You%20must%20be%20in%20a%20gold%20quest%20game!');%20%20%20%20%20%20%20%20%20%20%20%20}%20else%20{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20gold%20=%20Number(parseFloat(prompt('How%20much%20gold%20do%20you%20want?')));%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reactHandler().stateNode.setState({%20gold2:%20gold,%20gold%20});%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert('Gold%20added!');%20%20%20%20%20%20%20%20%20%20%20%20};})();function%20footer()%20{%20%20%20%20let%20element%20=%20document.createElement('div');%20%20%20%20element.style%20=%20%60font-family:%20%22Nunito%22,%20sans-serif;%20font-size:%2014px;%20height:%2065px;%20width:%20175px;%20border:%204px%20solid%20rgb(15,%2015,%2015);%20background:%20rgb(240,%20240,%20240);%20position:%20absolute;%20top:%2020x;%20left:%2020px;%20border-radius:%2010px;%20color:%20rgb(0,%200,%200);%20text-align:%20center;%60;%20%20%20%20element.innerHTML%20=%20%60%3Cp%3EMade%20by%20gliz%20%3Cbr%3E%20My%20%3Ca%20style=%22color:%20#0000ff;%22%20href=%22https://twitter.com/glizuwu%22%20target=%22_blank%22%3Etwitter%3C/a%3E%3C/p%3E%60;%20%20%20%20document.body.appendChild(element);%20%20%20%20var%20pos1%20=%200,%20pos2%20=%200,%20pos3%20=%200,%20pos4%20=%200;%20%20%20%20element.onmousedown%20=%20((e%20=%20window.event)%20=%3E%20{%20%20%20%20%20%20%20%20e.preventDefault();%20%20%20%20%20%20%20%20pos3%20=%20e.clientX;%20%20%20%20%20%20%20%20pos4%20=%20e.clientY;%20%20%20%20%20%20%20%20document.onmouseup%20=%20(()%20=%3E%20{%20%20%20%20%20%20%20%20%20%20%20%20document.onmouseup%20=%20null;%20%20%20%20%20%20%20%20%20%20%20%20document.onmousemove%20=%20null;%20%20%20%20%20%20%20%20});%20%20%20%20%20%20%20%20document.onmousemove%20=%20((e)%20=%3E%20{%20%20%20%20%20%20%20%20%20%20%20%20e%20=%20e%20||%20window.event;%20%20%20%20%20%20%20%20%20%20%20%20e.preventDefault();%20%20%20%20%20%20%20%20%20%20%20%20pos1%20=%20pos3%20-%20e.clientX;%20%20%20%20%20%20%20%20%20%20%20%20pos2%20=%20pos4%20-%20e.clientY;%20%20%20%20%20%20%20%20%20%20%20%20pos3%20=%20e.clientX;%20%20%20%20%20%20%20%20%20%20%20%20pos4%20=%20e.clientY;%20%20%20%20%20%20%20%20%20%20%20%20let%20top%20=%20(element.offsetTop%20-%20pos2)%20%3E%200%20?%20(element.offsetTop%20-%20pos2)%20:%200;%20%20%20%20%20%20%20%20%20%20%20%20let%20left%20=%20(element.offsetLeft%20-%20pos1)%20%3E%200%20?%20(element.offsetLeft%20-%20pos1)%20:%200;%20%20%20%20%20%20%20%20%20%20%20%20element.style.top%20=%20top%20+%20%22px%22;%20%20%20%20%20%20%20%20%20%20%20%20element.style.left%20=%20left%20+%20%22px%22;%20%20%20%20%20%20%20%20});%20%20%20%20});};footer();
