//Card

insertContainer()
//insertCard()
//insertCard()
insertLiveCard()


function insertCard(title, txt){
    //title es el titulo
    //txt es el contenido


    var link = document.createElement("a");
      //link.appendChild(document.createTextNode("Link"))
      link.href = "/";

      //Card
      var card = document.createElement("div");
      card.className = "col s12 m7"
        //header
        var header = document.createElement("h2");
        header.className = "header"
            //Header Text
            var headerText = document.createTextNode(title);
            header.appendChild(headerText);

        //horizontalCard
        var horizontalCard = document.createElement("div");
        horizontalCard.className = "card horizontal waves-effect waves-teal row"
            //cardImg
            var cardImg = document.createElement("div");
            cardImg.className = "card-image"
                var img = document.createElement("img");
                img.src = "../images/background1.jpg";
                img.href = "/nosotros"
                cardImg.appendChild(img);
            //cardContent
            var cardContent = document.createElement("div");
            cardContent.className = "card-content"
                //content
                var content = document.createElement("p");
                var contentText = document.createTextNode(txt);
                content.appendChild(contentText);
            cardContent.appendChild(content);
        horizontalCard.appendChild(cardImg);
        horizontalCard.appendChild(cardContent);
        link.appendChild(horizontalCard)
      card.appendChild(header);
      card.appendChild(link);

  return card;
}


function insertContainer(){
  //Container
  var container = document.createElement("div");
  container.className = "container ";
    //Section
    var section = document.createElement("div");
    section.className = "section";
    var row = document.createElement("div");
    row.className = "row"

  text = "This is a simple card that is a little bit longer than usual"  
  row.appendChild(insertCard("Nueva Card", text))  
  row.appendChild(insertCard("Otra Card", text)) 
  section.appendChild(row);  
  container.appendChild(section);
  
  var element = document.getElementById("newcard");
  element.appendChild(container);  
}

function insertLiveCard(){
  //Container
  var container = document.createElement("div");
  container.className = "container";
    //Section
    var section = document.createElement("div");
    section.className = "section";
      //Card
      var card = document.createElement("div");
      card.className = "card centered-text"
        //header
        var header = document.createElement("h2");
        header.className = "header centered-text"
            //Header Text
            var headerText = document.createTextNode("Another Card");
            header.appendChild(headerText);

        //Live Card

        //cardImg
            var cardImg = document.createElement("div");
            cardImg.className = "card-image waves-effect waves-block waves-light"
                var img = document.createElement("img");
                img.className = "activator"
                img.src = "https://lorempixel.com/100/190/nature/6";
                cardImg.appendChild(img);
        //cardContent
            var cardContent = document.createElement("div");
            cardContent.className = "card-content"
                //content
                var content = document.createElement("span");
                content.className = "card-title activator grey-text text-darken-4"
                //icono faltante
                //Link faltante
                var contentText = document.createTextNode("This is another card with different content");
                content.appendChild(contentText);
            cardContent.appendChild(content);   
         //Card Reveal
            var cardReveal = document.createElement("div");
            cardReveal.className = "card-reveal"
            cardReveal.href = "/"
              var revealContent = document.createElement("span");
              revealContent.className = "card-title grey-text text-darken-4 flow-text"

              var revealText = document.createTextNode("This is the indisde ausjdvasvdufyadsyvasvduvsaudgvusvaudguasvudgvahsvyd asdasdasdasdajhsd as dasgdyuasg duasu dguagsud ufaua <br> ashjdaysuduyasutdftuasfdtufastufdfastfdytasfd")
              revealContent.appendChild(revealText)
            cardReveal.appendChild(revealContent)  


        var horizontalCard = document.createElement("div");
        horizontalCard.className = "card horizontal"
            
        section.appendChild(header);
        //card.appendChild(cardImg);
        card.appendChild(cardContent);
        card.appendChild(cardReveal)
      
      card.appendChild(horizontalCard);
    section.appendChild(card);
  container.appendChild(section);


  var element = document.getElementById("newcard");
  element.appendChild(container);
}

/*
 <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  */
