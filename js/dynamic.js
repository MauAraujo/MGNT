//Card

insertCard()

function insertCard(){
  //Container
  var container = document.createElement("div");
  container.className = "container";
    //Section
    var section = document.createElement("div");
    section.className = "section";
      //Card
      var card = document.createElement("div");
      card.className = "col s12 m7"
        //header
        var header = document.createElement("h2");
        header.className = "header"
            //Header Text
            var headerText = document.createTextNode("Horizontal Card");
            header.appendChild(headerText);

        //horizontalCard
        var horizontalCard = document.createElement("div");
        horizontalCard.className = "card horizontal"
            //cardImg
            var cardImg = document.createElement("div");
            cardImg.className = "card-image"
                var img = document.createElement("img");
                img.src = "https://lorempixel.com/100/190/nature/6";
                cardImg.appendChild(img);
            //cardContent
            var cardContent = document.createElement("div");
            cardContent.className = "card-content"
                //content
                var content = document.createElement("p");
                var contentText = document.createTextNode("This is a simple card");
                content.appendChild(contentText);
            cardContent.appendChild(content);
        horizontalCard.appendChild(cardImg);
        horizontalCard.appendChild(cardContent);
      card.appendChild(header);
      card.appendChild(horizontalCard);
    section.appendChild(card);
  container.appendChild(section);


  var element = document.getElementById("newcard");
  element.appendChild(container);
}

//Card
/*
var card = document.createElement("div");
card.className = "col s12 m7"

  //header
  var header = var card = document.createElement("h2");
  header.className = "header"
  var headerText = document.createTextNode("Horizontal Card");
  header.appendChild(headerText);

  //horizontalCard
  var horizontalCard = document.createElement("div");
  horizontalCard.className = "card horizontal"
      //cardImg
      var cardImg = document.createElement("div");
      cardImg.className = "card-image"
          var img = document.createElement("img");
          img.src = "https://lorempixel.com/100/190/nature/6";
          cardImg.appendChild(img);
      //cardStacked
      var cardStacked = document.createElement("div");
      cardImg.className = "card-stacked"
          //card-content
          var cardContent = document.createElement("div");
          cardContent.className = "card-content"
              //content
              var content = document.createElement("p");
              var contentText = document.createTextNode("This is a simple card");
              content.appendChild(contentText);
          cardContent.appendChild(content);
      cardStacked.appendChild(cardContent);
  horizontalCard.appendChild(cardImg);
  horizontalCard.appendChild(cardStacked);
card.appendChild(header);
card.appendChild(horizontalCard)


var element = document.getElementById("newcard");
element.appendChild(card);
*/

/*  <div class="col s12 m7">
    <h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
*/
