function check() {
  var fs = require('fs');
  var textboxValue = document.getElementById("textbox").value.toLowerCase();
  var weather = require('weather-js');
  if (textboxValue != ''){
    if (textboxValue.startsWith('say ')) {
      let text = textboxValue.slice(4);
      responsiveVoice.speak(text);
      document.getElementById("answer").innerHTML = text;
    } else if (textboxValue.includes('weather')) {
      let searched = textboxValue.split('weather ')[1];

      if (searched.startsWith('for')) {
        searched = searched.trim(4)
      }
      if (searched.startsWith('in')) {
        searched = searched.trim(3)
      }
      if (searched.startsWith('at')) {
        searched = searched.trim(3)
      }

      weather.find({search: searched, degreeType:'C'}, function(err, result) {
        if(result.length == 0) {
          responsiveVoice.speak('Sorry, I don\'t know that location.')
          document.getElementById("answer").innerHTML = 'Sorry, I don\'t know that location.';
          return;
        }
        var current  = result[0].current
        var forecast = current.forecast
        document.getElementById("answer").innerHTML = `${current.observationpoint}:<br>Temperature: ${current.temperature}°c.<br>Wind: ${current.winddisplay}.<br>Humidity: ${current.humidity}%<br>Feels like: ${current.feelslike}°c`;
        responsiveVoice.speak(`The current weather in ${current.observationpoint} is Temperature: ${current.temperature}°c. Wind: ${current.winddisplay}. Humidity: ${current.humidity}%. it feels like: ${current.feelslike}°c.`)
        lastcommand = `weather${searched}`;
      })
    }
    } else if ((textboxValue.includes('flip')) && (textboxValue.includes ('coin')) || (textboxValue.includes('heads')) && (textboxValue.includes('tails'))) {
      var tails = 0;
      x = (Math.floor(Math.random() * 2) == 0);
      function click() {
        if (x) {
          flip("heads.");
        } else {
          flip("tails.");
        }
      };
      click()
      function flip(coin) {
        x = Math.floor(Math.random() * 3);
        if (x == 0) {
          responsiveVoice.speak("Looks like the coin landed on " + coin);
          document.getElementById("answer").innerHTML = "Looks like the coin landed on " + coin;
        } else if (x == 1) {
          responsiveVoice.speak("The coin landed on " + coin);
          document.getElementById("answer").innerHTML = "The coin landed on " + coin;
        } else if (x == 2) {
          responsiveVoice.speak("Flipped a coin, it landed on " + coin);
          document.getElementById("answer").innerHTML = "I flipped a coin, it landed on " + coin;
        } else {
          responsiveVoice.speak("It landed on " + coin);
          document.getElementById("answer").innerHTML = "It landed on " + coin;
        }
      }
    } else if (textboxValue.includes('time')||textboxValue.includes('date')) {
      responsiveVoice.speak("The current date and time is " + Date())
      document.getElementById("answer").innerHTML = Date();
    } else if (textboxValue.includes('hello')||textboxValue.includes('hey')||textboxValue.includes('hi')) {
      responsiveVoice.speak("Hello, and welcome to Athena AI.")
      document.getElementById("answer").innerHTML = 'Hello, and welcome to Athena AI.';
    } else if (textboxValue.includes('bug')||textboxValue.includes('feedback')||textboxValue.includes('question')) {
      responsiveVoice.speak("If you have any questions, feedback or bugs email contactcroftofficial@gmail.com")
      document.getElementById("answer").innerHTML = "If you have any questions, feedback or bugs email contactcroftofficial@gmail.com";
    } else if (textboxValue.includes('goodbye')||textboxValue.includes('exit')||textboxValue.includes('leave')) {
      responsiveVoice.speak("Shutting down...")
      var window = remote.getCurrentWindow();
      window.close();
    } else if (textboxValue.includes('what')&&textboxValue.includes('you')&&textboxValue.includes('do'))  {
      responsiveVoice.speak("I can do all sorts of things, for example get the time or flip a coin.");
      document.getElementById("answer").innerHTML = "I can do all sorts of things, for example get the time or flip a coin.";

    } else if (textboxValue.includes('roll')||textboxValue.includes ('dice')) {
      function roll() {
        x = Math.floor(Math.random() * 3);
        result = Math.floor(Math.random() * 5) + 1

        if (x == 0) {
          responsiveVoice.speak("Looks like the dice stopped on " + result);
          document.getElementById("answer").innerHTML = "Looks like the dice stopped on " + result;
        } else if (x == 1) {
          responsiveVoice.speak("The dice stopped on " + dice);
          document.getElementById("answer").innerHTML = "The dice stopped on " + result;
        } else if (x == 2) {
          responsiveVoice.speak("Rolled a dice, it landed on " + result);
          document.getElementById("answer").innerHTML = "I rolled a dice, it landed on " + result;
        } else {
          responsiveVoice.speak("It landed on " + result);
          document.getElementById("answer").innerHTML = "It landed on " + result;
        }
      }
      roll()
    } else if ((textboxValue.includes('who')&&textboxValue.includes('you'))||(textboxValue.includes('what')&&textboxValue.includes('name'))) {
      responsiveVoice.speak("My name is Athena, and I was developed by CROFT & ION.");
      document.getElementById("answer").innerHTML = "My name is Athena, and I was developed by CROFT & ION.";
    } else if (textboxValue.includes('help')) {
      responsiveVoice.speak("Sure, what do you need?");
      document.getElementById("answer").innerHTML = 'Sure, what do you need?';
    } else if (textboxValue.includes('owo')) {
      responsiveVoice.speak("ooh woo");
      document.getElementById("answer").innerHTML = 'UwU';
    } else {
        responsiveVoice.speak('Sorry I don\'t know that.')
        document.getElementById("answer").innerHTML = 'Sorry I don\'t know that.';
      }
    document.getElementById("textbox").value = '';
    }
  var input = document.getElementById("textbox");
  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      check();
    }
  });
 
