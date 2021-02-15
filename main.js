function dogApi () {
    
    let dog = new XMLHttpRequest();
    dog.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            let doggy = JSON.parse(this.response);
            console.log(doggy.message);
            document.getElementById('dogPic1').src= doggy.message[0];
            document.getElementById('dogPic2').src= doggy.message[1];
            document.getElementById('dogPic3').src= doggy.message[2];
        }
          
    };
    dog.open('GET', 'https://dog.ceo/api/breeds/image/random/3', true);
    dog.send();
    }