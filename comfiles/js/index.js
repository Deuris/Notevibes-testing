/* Dropdown Menu*/

const dropdowns = document.getElementsByClassName('dropdown');
for (let index = 0; index < dropdowns.length; index++) {
  const dropdown = dropdowns[index];
  dropdown.addEventListener('click', function () {
    if ($(dropdown).hasClass('show')) {
      $(dropdown).find('.dropdown-menu').slideUp(200);
    } else {
      $(dropdown).focus();
      $(dropdown).find('.dropdown-menu').slideToggle(200);
    }
  }, true);
}

document.body.addEventListener('click', function (e) {
  const dropdowns = document.getElementsByClassName('dropdown');
  for (let index = 0; index < dropdowns.length; index++) {
    const dropdown = dropdowns[index];
    if (!dropdown.contains(e.target) && dropdown.classList.contains('show')) {
      $('.dropdown-menu').slideUp(260);
    }
  }
}, true);


$('.dropdown-menu .dropdown-item').on('click', function (e) {
  $(this).parent().slideUp(200);
});
/* Dropdown Menu*/

const plusVoices = {
  "English (US)": [
    {
      "languageName": "English (US)",
      "name": "Davis",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Davis.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Jane",
      "language": "en-US",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Jane.jpg"
    },
    {
      "name": "Tony",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Tony.jpg"
    },
    {
      "name": "Sara",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Sara.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Eric",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Eric.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Nancy",
      "language": "en-US",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Nancy.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Steffan",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Steffan.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Jason",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Jason.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Ana (Child)",
      "language": "en-US",
      "gender": "kid",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Ana (Child).jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Brandon",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Brandon.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Elizabeth",
      "language": "en-US",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Elizabeth.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Guy",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Guy.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Michelle",
      "language": "en-US",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Michelle.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Liam",
      "language": "en-US",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Liam.jpg"
    },
    {
      "languageName": "English (US)",
      "name": "Salli",
      "language": "en-US",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Mary (US English).jpg"
    },
    {
      "name": "Matthew",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Matthew.jpg"
    },
    {
      "name": "Joanna",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Jennifer.jpg"
    },
    {
      "name": "Jessa",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Jessa.jpg"
    },
    {
      "name": "Joey",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/James.jpg"
    },
    {
      "name": "Kimberly",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Kathy (US English).jpg"
    },
    {
      "name": "Kendra",
      "language": "en-US",
      "languageName": "English (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Linda (US English).jpg"
    }
  ],
  "English (UK)": [
    {
      "name": "Sonia",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Sonia.jpg"
    },
    {
      "name": "Ryan",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Ryan.jpg"
    },
    {
      "name": "Libby",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Libby.jpg"
    },
    {
      "name": "Bella",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Bella.jpg"
    },
    {
      "name": "Oliver",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Oliver.jpg"
    },
    {
      "name": "Maisie (Child)",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Maisie (Child).jpg"
    },
    {
      "name": "Brian",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/John.jpg"
    },
    {
      "name": "Emma",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Emily.jpg"
    },
    {
      "name": "Amy",
      "language": "en-GB",
      "languageName": "English (UK)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Charlotte.jpg"
    }
  ],
  "English (Australia)": [
    {
      "name": "William",
      "language": "en-AU",
      "languageName": "English (Australia)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/William.jpg"
    },
    {
      "name": "Natasha",
      "language": "en-AU",
      "languageName": "English (Australia)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Natasha (Australia).jpg"
    },
    {
      "name": "Russell",
      "language": "en-AU",
      "languageName": "English (Australia)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Noah (Australia).jpg"
    },
    {
      "name": "Nicole",
      "language": "en-AU",
      "languageName": "English (Australia)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Olivia (Australia).jpg"
    }
  ],
  "English (India)": [
    {
      "name": "Neerja",
      "language": "en-IN",
      "languageName": "English (India)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Neerja.jpg"
    },
    {
      "name": "Prabhat",
      "language": "en-IN",
      "languageName": "English (India)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Prabhat.jpg"
    },
    {
      "name": "Raveena",
      "language": "en-IN",
      "languageName": "English (India)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Padma (India).jpg"
    },
    {
      "name": "Aditi",
      "language": "en-IN",
      "languageName": "English (India)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Aditi (India).jpg"
    }
  ],
  "English (Wales)": [
    {
      "name": "Geraint",
      "language": "en-CY",
      "languageName": "English (Wales)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/english/Gareth (Wales).jpg"
    }
  ],
  "Spanish (Spain)": [
    {
      "name": "Alvaro",
      "language": "es-ES",
      "languageName": "Spanish (Spain)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Alvaro.jpg"
    },
    {
      "name": "Elvira",
      "language": "es-ES",
      "languageName": "Spanish (Spain)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Elvira.jpg"
    },
    {
      "name": "Enrique",
      "language": "es-CA",
      "languageName": "Spanish (Spain)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Alejandro.jpg"
    },
    {
      "name": "Conchita",
      "language": "es-CA",
      "languageName": "Spanish (Spain)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Lucia.jpg"
    }
  ],
  "Spanish (US)": [
    {
      "name": "Alonso",
      "language": "es-US",
      "languageName": "Spanish (US)",
      "gender": "famale",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Alonso.jpg"
    },
    {
      "name": "Paloma",
      "language": "es-US",
      "languageName": "Spanish (US)",
      "gender": "famale",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Paloma.jpg"
    },
    {
      "name": "Miguel",
      "language": "es-US",
      "languageName": "Spanish (US)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Matías.jpg"
    },
    {
      "name": "Penélope",
      "language": "es-US",
      "languageName": "Spanish (US)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/spanish/Isabella.jpg"
    }
  ],
  "French": [
    {
      "name": "Henri",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Henri.jpg"
    },
    {
      "name": "Denise",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Denise.jpg"
    },
    {
      "name": "Mathieu",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Gabriel.jpg"
    },
    {
      "name": "Céline",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Chloé.jpg"
    },
    {
      "name": "Eloise (Child)",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Eloise.jpg"
    },
    {
      "name": "Brigitte",
      "language": "fr-FR",
      "languageName": "French",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Brigitte.jpg"
    }
  ],
  "French (Canada)": [
    {
      "name": "Antoine",
      "language": "fr-CA",
      "languageName": "French (Canada)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Antoine.jpg"
    },
    {
      "name": "Sylvie",
      "language": "fr-CA",
      "languageName": "French (Canada)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Sylvie.jpg"
    },
    {
      "name": "Jean",
      "language": "fr-CA",
      "languageName": "French (Canada)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Jean.jpg"
    },
    {
      "name": "Chantal",
      "language": "fr-CA",
      "languageName": "French (Canada)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/french/Adèle.jpg"
    }
  ],
  "Portuguese (Portugal)": [
    {
      "name": "Duarte",
      "language": "pt-PT",
      "languageName": "Portuguese (Portugal)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Duarte.jpg"
    },
    {
      "name": "Fernanda",
      "language": "pt-PT",
      "languageName": "Portuguese (Portugal)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Fernanda.jpg"
    },
    {
      "name": "Raquel",
      "language": "pt-PT",
      "languageName": "Portuguese (Portugal)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Raquel.jpg"
    },
    {
      "name": "Cristiano",
      "language": "pt-PT",
      "languageName": "Portuguese (Portugal)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/João.jpg"
    },
    {
      "name": "Inês",
      "language": "pt-PT",
      "languageName": "Portuguese (Portugal)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Mariana.jpg"
    }
  ],
  "Portuguese (Brazil)": [
    {
      "name": "Antonio",
      "language": "pt-BR",
      "languageName": "Portuguese (Brazil)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Antonio.jpg"
    },
    {
      "name": "Francisca",
      "language": "pt-BR",
      "languageName": "Portuguese (Brazil)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Francisca.jpg"
    },
    {
      "name": "Ricardo",
      "language": "pt-BR",
      "languageName": "Portuguese (Brazil)",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Miguel.jpg"
    },
    {
      "name": "Vitória",
      "language": "pt-BR",
      "languageName": "Portuguese (Brazil)",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/portuguese/Manuela.jpg"
    }
  ],
  "German": [
    {
      "name": "Conrad",
      "language": "de-DE",
      "languageName": "German",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/german/Conrad.jpg"
    },
    {
      "name": "Katja",
      "language": "de-DE",
      "languageName": "German",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/german/Katja.jpg"
    },
    {
      "name": "Hans",
      "language": "de-DE",
      "languageName": "German",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/german/Johann.jpg"
    },
    {
      "name": "Vicki",
      "language": "de-DE",
      "languageName": "German",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/german/Vicki.jpg"
    },
    {
      "name": "Marlene",
      "language": "de-DE",
      "languageName": "German",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/german/Ida.jpg"
    }
  ],
  "Italian": [
    {
      "name": "Diego",
      "language": "it-IT",
      "languageName": "Italian",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/italian/Diego.jpg"
    },
    {
      "name": "Isabella",
      "language": "it-IT",
      "languageName": "Italian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/italian/Isabella.jpg"
    },
    {
      "name": "Elsa",
      "language": "it-IT",
      "languageName": "Italian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/italian/Elsa.jpg"
    },
    {
      "name": "Giorgio",
      "language": "it-IT",
      "languageName": "Italian",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/italian/Francesco.jpg"
    },
    {
      "name": "Carla",
      "language": "it-IT",
      "languageName": "Italian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/italian/Giulia.jpg"
    }
  ],
  "Dutch": [
    {
      "name": "Colette",
      "language": "nl-NL",
      "languageName": "Dutch",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/dutch/Colette.jpg"
    },
    {
      "name": "Maarten",
      "language": "nl-NL",
      "languageName": "Dutch",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/dutch/Maarten.jpg"
    },
    {
      "name": "Fenna",
      "language": "nl-NL",
      "languageName": "Dutch",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/dutch/Fenna.jpg"
    },
    {
      "name": "Ruben",
      "language": "nl-NL",
      "languageName": "Dutch",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/dutch/Daan.jpg"
    },
    {
      "name": "Lotte",
      "language": "nl-NL",
      "languageName": "Dutch",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/dutch/Roos.jpg"
    }
  ],
  "Swedish": [
    {
      "name": "Mattias",
      "language": "sv-SE",
      "languageName": "Swedish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/swedish/Mattias.jpg"
    },
    {
      "name": "Sofie",
      "language": "sv-SE",
      "languageName": "Swedish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/swedish/Sofie.jpg"
    },
    {
      "name": "Hillevi",
      "language": "sv-SE",
      "languageName": "Swedish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/swedish/Hillevi.jpg"
    },
    {
      "name": "Astrid",
      "language": "sv-SE",
      "languageName": "Swedish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/swedish/Elsa.jpg"
    }
  ],
  "Danish": [
    {
      "name": "Christel",
      "language": "da-DK",
      "languageName": "Danish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/danish/Christel.jpg"
    },
    {
      "name": "Jeppe",
      "language": "da-DK",
      "languageName": "Danish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/danish/Jeppe.jpg"
    },
    {
      "name": "Naja",
      "language": "da-DK",
      "languageName": "Danish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/danish/Line.jpg"
    },
    {
      "name": "Mads",
      "language": "da-DK",
      "languageName": "Danish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/danish/Mikkel.jpg"
    }
  ],
  "Icelandic": [
    {
      "name": "Karl",
      "language": "is-IS",
      "languageName": "Icelandic",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/icelandic/Gunnar.jpg"
    },
    {
      "name": "Dóra",
      "language": "is-IS",
      "languageName": "Icelandic",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/icelandic/Helga.jpg"
    }
  ],
  "Polish": [
    {
      "name": "Marek",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Marek.jpg"
    },
    {
      "name": "Agnieszka",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Agnieszka.jpg"
    },
    {
      "name": "Zofia",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Zofia.jpg"
    },
    {
      "name": "Maja",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Lena.jpg"
    },
    {
      "name": "Jan",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Jakub.jpg"
    },
    {
      "name": "Jacek",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Kacper.jpg"
    },
    {
      "name": "Ewa",
      "language": "pl-PL",
      "languageName": "Polish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/polish/Zofia.jpg"
    }
  ],
  "Romanian": [
    {
      "name": "Emil",
      "language": "ro-RO",
      "languageName": "Romanian",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/romanian/Emil.jpg"
    },
    {
      "name": "Alina",
      "language": "ro-RO",
      "languageName": "Romanian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/romanian/Alina.jpg"
    },
    {
      "name": "Carmen",
      "language": "ro-RO",
      "languageName": "Romanian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/romanian/Elena.jpg"
    }
  ],
  "Turkish": [
    {
      "name": "Ahmet",
      "language": "tr-TR",
      "languageName": "Turkish",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/turkish/Ahmet.jpg"
    },
    {
      "name": "Emel",
      "language": "tr-TR",
      "languageName": "Turkish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/turkish/Emel.jpg"
    },
    {
      "name": "Filiz",
      "language": "tr-TR",
      "languageName": "Turkish",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/turkish/Esma.jpg"
    }
  ],
  "Welsh": [
    {
      "name": "Aled",
      "language": "cy-GB",
      "languageName": "Welsh",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/welsh/Aled.jpg"
    },
    {
      "name": "Nia",
      "language": "cy-GB",
      "languageName": "Welsh",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/welsh/Nia.jpg"
    },
    {
      "name": "Gwyneth",
      "language": "cy-GB",
      "languageName": "Welsh",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/welsh/Seren.jpg"
    }
  ],
  "Russian": [
    {
      "name": "Maxim",
      "language": "ru-RU",
      "languageName": "Russian",
      "gender": "male",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/russian/Sergei.jpg"
    },
    {
      "name": "Tatyana",
      "language": "ru-RU",
      "languageName": "Russian",
      "gender": "female",
      "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022-portraits/russian/Olga.jpg"
    }
  ]
};
const a_voice = [
  {
    "languageName": "English (US)",
    "voiceName": "Aria",
    "voiceOriginName": "en-US-AriaNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-AriaNeural",
    "gender": "female",
    "type": "sm",
    "styles": "friendly",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Friendly.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Davis",
    "voiceOriginName": "en-US-DavisNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-DavisNeural",
    "gender": "male",
    "type": "sm",
    "styles": "chat",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Chat.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Davis",
    "voiceOriginName": "en-US-DavisNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-DavisNeural",
    "gender": "male",
    "type": "sm",
    "styles": "terrified",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Terrified.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Guy",
    "voiceOriginName": "en-US-GuyNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-GuyNeural",
    "gender": "male",
    "type": "sm",
    "styles": "sad",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Sad.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Jane",
    "voiceOriginName": "en-US-JaneNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-JaneNeural",
    "gender": "female",
    "type": "sm",
    "styles": "shouting",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Shout.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Jason",
    "voiceOriginName": "en-US-JasonNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-JasonNeural",
    "gender": "male",
    "type": "sm",
    "styles": "whispering",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Whisper.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Nancy",
    "voiceOriginName": "en-US-NancyNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-NancyNeural",
    "gender": "female",
    "type": "sm",
    "styles": "cheerful",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Cheerful.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Nancy",
    "voiceOriginName": "en-US-NancyNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-NancyNeural",
    "gender": "female",
    "type": "sm",
    "styles": "unfriendly",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Unfriendly.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Sara",
    "voiceOriginName": "en-US-SaraNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-SaraNeural",
    "gender": "female",
    "type": "sm",
    "styles": "angry",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Angry.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Sara",
    "voiceOriginName": "en-US-SaraNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-SaraNeural",
    "gender": "female",
    "type": "sm",
    "styles": "excited",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Excited.jpg"
  },
  {
    "languageName": "English (US)",
    "voiceName": "Tony",
    "voiceOriginName": "en-US-TonyNeural",
    "languageCode": "en-US",
    "key": "en-US en-US-TonyNeural",
    "gender": "male",
    "type": "sm",
    "styles": "hopeful",
    "icon": "https://wwwnaturalreaderscom.s3.amazonaws.com/images/voicestyle/Hopeful.jpg"
  },
];

var preVideo = null;
var preOverlay = null;
function setUpVideo() {

  $('.com-video-card .com-video-status').click(function () {
    const id_s = $(this).attr("data-target");
    const id_p = $(this).attr("data-parent");
    const init_s = $(this).attr("data-init");

    const myOverlay = $(id_p);
    const myVideo = document.getElementById(id_s);

    if (!init_s) {
      myVideo.addEventListener("pause", function () {
        myOverlay.removeClass('playing');
      });
      myVideo.addEventListener("ended", function () {
        myOverlay.removeClass('playing');
      });
      $(this).attr("data-init", true);
    }


    if (preVideo != null) {
      if (preVideo == myVideo) {
        var isPlaying = myVideo.currentTime > 0 && !myVideo.paused && !myVideo.ended
          && myVideo.readyState > myVideo.HAVE_CURRENT_DATA;
        if (!isPlaying) {
          myVideo.play();
          myOverlay.addClass('playing');
        } else {
          preVideo.pause();
          preOverlay.removeClass('playing');
        }
      } else {
        preVideo.pause();
        preOverlay.removeClass('playing');

        myVideo.play();
        myOverlay.addClass('playing');

        preVideo = myVideo;
        preOverlay = myOverlay;
      }
    } else {
      myVideo.play();
      myOverlay.addClass('playing');

      preVideo = myVideo;
      preOverlay = myOverlay;
    }
  });

}


var creading = false;
var coldxobject = '';
var currentLanguage = "English (US)";

var currentVoiceName = plusVoices["English (US)"][0]["name"];
var currentVoice = plusVoices["English (US)"][0];
var loadIndex = 0;

const pathPre = "https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022/"

function createDropdown() {
  const languageMenu = document.getElementById("language-menu");
  const languages = Object.keys(plusVoices);
  for (let index = 0; index < languages.length; index++) {
    const lanBtn = document.createElement("BUTTON");
    lanBtn.classList.add("dropdown-item");
    lanBtn.innerText = languages[index];
    lanBtn.addEventListener("click", chooseLanguage, true);
    languageMenu.appendChild(lanBtn);
  }
}

function chooseLanguage(e) {
  $("#language-menu .dropdown-item").removeClass("active");
  $(this).addClass("active");
  $("#language-text").text(this.innerText);

  if (currentLanguage != this.innerText) {
    currentLanguage = this.innerText;
    loadIndex = 0;
    createPlayList(currentLanguage);
  }
}

function createPlayList(language) {
  const voiceobjs = plusVoices[language];
  const voiceMenu = document.getElementById("voice-menu");
  const eleLength = voiceMenu.childElementCount;
  if (eleLength != 0) {
    voiceMenu.innerHTML = "";
  }

  const realLength = voiceobjs.length;
  var limitLength = realLength > 3 ? 3 : realLength;
  if (realLength <= 3) {
    $("#com-load-more").hide();
  } else {
    $("#com-load-more").show();
  }
  addVoiceCell(0, limitLength, voiceobjs);
}

$("#com-load-more").click(function () {
  const voiceobjs = plusVoices[currentLanguage];
  const realLength = voiceobjs.length;
  if (loadIndex < realLength) {
    var max = realLength > (loadIndex + 3) ? (loadIndex + 3) : realLength;
    addVoiceCell(loadIndex, max, voiceobjs);
  } else {
    loadIndex = 0;
    var max = realLength > (loadIndex + 3) ? (loadIndex + 3) : realLength;
    addVoiceCell(loadIndex, max, voiceobjs);
  }
});

function addVoiceCell(min, max, voiceobjs) {
  const voiceMenu = document.getElementById("voice-menu");
  voiceMenu.innerHTML = '';
  for (let index = min; index < max; index++) {
    const voiceDiv = document.createElement("BUTTON");
    voiceDiv.classList.add("voice-item");

    const icon = document.createElement("IMG");
    icon.classList.add("voice-icon");
    icon.src = voiceobjs[index]['icon'];
    voiceDiv.appendChild(icon);

    const infoDiv = document.createElement("DIV");
    infoDiv.classList.add("voice-text");

    const nameDiv = document.createElement("DIV");
    nameDiv.classList.add("voice-name");
    nameDiv.innerText = voiceobjs[index]['name'];
    infoDiv.appendChild(nameDiv);

    const waveDiv = document.createElement("DIV");
    waveDiv.classList.add("voice-wave");
    infoDiv.appendChild(waveDiv);

    voiceDiv.appendChild(infoDiv);

    $(voiceDiv).click(function () {
      $('#com-voice-styles .voice-styles-item').removeClass('playing');
      if ($(voiceDiv).hasClass('playing')) {
        $(voiceDiv).removeClass('playing');
        playComm(voiceDiv);
      } else {
        $('#voice-menu .voice-item').removeClass('playing');
        currentVoiceName = voiceobjs[index]['name'];
        currentVoice = plusVoices[currentLanguage][index];
        $(voiceDiv).addClass('playing');
        playComm(voiceDiv);
      }
    });

    voiceMenu.appendChild(voiceDiv);
  }
  loadIndex = max;
}

function getLanguageName(lang, withLocation = true) {
  switch (lang) {
    case 'en':
      return 'English';
    case 'en-scotland':
    case 'en_scotland':
      return withLocation ? 'English (Scotland)' : 'English';
    case 'en-US':
    case 'en_US':
      return withLocation ? 'English (US)' : 'English';
    case 'en-GB':
    case 'en_GB':
    case 'en-UK':
    case 'en_UK':
      return withLocation ? 'English (UK)' : 'English';
    case 'British':
      return withLocation ? 'English (UK)' : 'English';
    case 'en-CY':
    case 'en_CY':
      return withLocation ? 'English (Wales)' : 'English';
    case 'en-AU':
    case 'en_AU':
      return withLocation ? 'English (Australia)' : 'English';
    case 'en-IN':
    case 'en_IN':
      return withLocation ? 'English (India)' : 'English';
    case 'en-ZA':
    case 'en_ZA':
      return withLocation ? 'English (South Africa)' : 'English';
    case 'en-IE':
    case 'en_IE':
      return withLocation ? 'English (Ireland)' : 'English';
    case 'es-ES':
    case 'es_ES':
      return withLocation ? 'Spanish (Spain)' : 'Spanish';
    case 'es-MX':
    case 'es_MX':
      return withLocation ? 'Spanish (Mexico)' : 'Spanish';
    case 'es-CA':
    case 'es_CA':
      return withLocation ? 'Spanish (Spain)' : 'Spanish';
    case 'es-AR':
    case 'es_AR':
      return withLocation ? 'Spanish (Argentina)' : 'Spanish';
    case 'de-DE':
    case 'de_DE':
      return 'German';
    case 'fr-FR':
    case 'fr_FR':
      return 'French';
    case 'es-US':
    case 'es_US':
      return withLocation ? 'Spanish (US)' : 'Spanish';
    case 'it-IT':
    case 'it_IT':
      return 'Italian';
    case 'pl-PL':
    case 'pl_PL':
      return 'Polish';
    case 'nl-NL':
    case 'nl_NL':
      return 'Dutch';
    case 'tr-TR':
    case 'tr_TR':
      return 'Turkish';
    case 'no-NO':
    case 'no_NO':
    case 'nb-NO':
      return 'Norwegian';
    case 'is-IS':
    case 'is_IS':
      return 'Icelandic';
    case 'da-DK':
    case 'da_DK':
      return 'Danish';
    case 'cy-GB':
    case 'cy_GB':
      return 'Welsh';
    case 'zh-CN':
    case 'zh_CN':
      return 'Chinese';
    case 'zh-TW':
    case 'zh_TW':
      return withLocation ? 'Chinese Taiwan' : 'Chinese';
    case 'zh-HK':
    case 'zh_HK':
      return withLocation ? 'Chinese Hong Kong' : 'Chinese';
    case 'ja-JP':
    case 'ja_JP':
      return 'Japanese';
    case 'ko-KR':
    case 'ko_KR':
      return 'Korean';
    case 'hi-HI':
    case 'hi_HI':
      return 'Hindi';
    case 'id-ID':
    case 'id_ID':
      return 'Indonesian';
    case 'ro-RO':
    case 'ro_RO':
      return 'Romanian'
    case 'ru-RU':
    case 'ru_RU':
      return 'Russian';
    case 'pt-BR':
    case 'pt_BR':
      return withLocation ? 'Portuguese (Brazil)' : 'Portuguese';
    case 'pt-PT':
    case 'pt_PT':
      return withLocation ? 'Portuguese (Portugal)' : 'Portuguese';
    case 'fr-CA':
    case 'fr_CA':
      return withLocation ? 'French (Canada)' : 'French';
    case 'sv-SE':
    case 'sv_SE':
      return 'Swedish';
    case 'ar-SA':
    case 'ar_SA':
      return withLocation ? 'Arabic (Saudi Arabia)' : 'Arabic';
    case 'cs-CZ':
    case 'cs_CZ':
      return withLocation ? 'Czech (Czech Republic)' : 'Czech';
    case 'el-GR':
    case 'el_GR':
      return withLocation ? 'Greek (Greece)' : 'Greek';
    case 'fi-FI':
    case 'fi_FI':
      return withLocation ? 'Finnish (Finland)' : 'Finnish';
    case 'he-IL':
    case 'he_IL':
      return withLocation ? 'Hebrew (Israel)' : 'Hebrew';
    case 'hi-IN':
    case 'hi_IN':
      return withLocation ? 'Hindi (India)' : 'Hindi';
    case 'hu-HU':
    case 'hu_HU':
      return withLocation ? 'Hungarian (Hungary)' : 'Hungarian';
    case 'nb-NO':
    case 'nb_NO':
      return withLocation ? 'Norwegian (Bokm?l) (Norway)' : 'Norwegian';
    case 'nl-BE':
    case 'nl_BE':
      return withLocation ? 'Dutch (Belgium)' : 'Dutch';
    case 'sk-SK':
    case 'sk_SK':
      return withLocation ? 'Slovak (Slovakia)' : 'Slovak';
    case 'th-TH':
    case 'th_TH':
      return withLocation ? 'Thai (Thailand)' : 'Thai';
    case 'km-KH':
    case 'km_KH':
      return withLocation ? 'Khmer (Cambodia)' : 'Khmer';
    case 'in-ID':
    case 'in_ID':
      return withLocation ? 'Indonesian (Indonesia)' : 'Indonesian';
    case 'ne-NP':
    case 'ne_NP':
      return withLocation ? 'Nepali (Nepal)' : 'Nepali';
    case 'vi-VN':
    case 'vi_VN':
      return withLocation ? 'Vietnamese (Vietnam)' : 'Vietnamese';
    case 'si-LK':
    case 'si_LK':
      return withLocation ? 'Sinhala (Sri Lanka)' : 'Sinhala';
    case 'bn-BD':
    case 'bn_BD':
      return withLocation ? 'Bengali (Bangladesh)' : 'Bengali';
    case 'yue-HK':
    case 'yue_HK':
      return withLocation ? 'Cantonese (Hong Kong)' : 'Cantonese';
    case 'bn-IN':
    case 'bn_IN':
      return withLocation ? 'Bengali (India)' : 'Bengali';
    case 'uk-UA':
    case 'uk_UA':
      return withLocation ? 'Ukrainian (Ukraine)' : 'Ukrainian';
    case 'fil-PH':
    case 'fil_PH':
      return withLocation ? 'Filipino (Philippines)' : 'Filipino';
    case 'gu-IN':
    case 'gu_IN':
      return withLocation ? 'Gujarati (India)' : 'Gujarati';
    case 'te-IN':
    case 'te_IN':
      return withLocation ? 'Telugu (India)' : 'Telugu';
    case 'kn-IN':
    case 'kn_IN':
      return withLocation ? 'Kannada (India)' : 'Kannada';
    case 'ta-IN':
    case 'ta_IN':
      return withLocation ? 'Tamil (India)' : 'Tamil';
    case 'en-NG':
    case 'en_NG':
      return withLocation ? 'English (Nigeria)' : 'English';
    case 'ar':
      return 'Arabic';
    case 'ml-IN':
    case 'ml_IN':
      return withLocation ? 'Malayalam (India)' : 'Malayalam';
    case 'ur-PK':
    case 'ur_PK':
      return withLocation ? 'Urdu (Pakistan)' : 'Malayalam';
    case 'su-ID':
    case 'su_ID':
      return withLocation ? 'Sundanese (Indonesia)' : 'Sundanese';
    case 'et-EE':
    case 'et_EE':
      return withLocation ? 'Estonian (Estonia)' : 'Estonian';
    case 'jv-ID':
    case 'jv_ID':
      return withLocation ? 'Javanese (Indonesia)' : 'Javanese';
    case 'mr-IN':
    case 'mr_IN':
      return withLocation ? 'Marathi (India)' : 'Marathi';
  }
  return lang;
}

function getLocationAndLangName(lang) {
  switch (lang) {
    case 'fr-FR':
      return 'FrenchFrance';
    case 'fr-CA':
      return 'FrenchCanada';
    case 'en-AU':
      return 'EnglishAustralia';
    case 'en-IN':
      return 'EnglishIndia';
    case 'en-GB':
      return 'EnglishUk';
    case 'en-US':
      return 'EnglishUs';
    case 'en-CY':
      return 'EnglishWales';
    case 'pt-PT':
      return 'PortuguesePortugal';
    case 'pt-BR':
      return 'PortugueseBrazil';
    case 'es-ES':
    case 'es-CA':
      return 'SpanishSpain';
    case 'es-US':
      return 'SpanishUs';
  }
  return this.getLanguageName(lang, false);
}

function playComm(voiceDiv, style = '') {
  var voiceUrl = '';
  var pathStr = '';
  var id = '';
  if (style == '') {
    const urlPrefix = 'https://wwwnaturalreaderscom.s3.amazonaws.com/plus2022/';
    if (!currentVoice || !currentVoice.language || !currentVoice.name)
      return '';
    var languageName = getLanguageName(currentVoice.language, false);
    const locationAndLangName = getLocationAndLangName(currentVoice.language)

    var voiceName = !currentVoice.name.includes('(Child)') ? currentVoice.name : currentVoice.name.slice(0, -8);
    voiceName = encodeURIComponent(voiceName.normalize('NFD'));
    var urlSuffix = `${languageName}Voices/${locationAndLangName}${voiceName}.mp3`;
    voiceUrl = urlPrefix + urlSuffix;

    pathStr = voiceUrl;
    id = urlSuffix;
  } else {
    const urlPrefix = 'https://wwwnaturalreaderscom.s3.amazonaws.com/comm2022/';
    var voiceUrl = '';
    const languageName = getLanguageName(currentVoice.languageCode, false);
    const locationAndLangName = getLocationAndLangName(currentVoice.languageCode)
    var voiceName = currentVoice.voiceName.split(" (")[0];
    voiceName = voiceName.replace(' *', '');
    voiceName = encodeURIComponent(voiceName.normalize('NFD'));
    var urlSuffix = `${languageName}Voices/${locationAndLangName}${voiceName}${style}.mp3`;
    voiceUrl = urlPrefix + urlSuffix;

    pathStr = voiceUrl;
    id = urlSuffix;
  }


  if (creading == true && id == coldxobject) {
    // console.error('jPlayer return');
    $("#jquery_jplayer_1").jPlayer("stop");
    creading = false;
    return;
  };
  coldxobject = id;
  $("#jquery_jplayer_1").jPlayer("stop");
  $("#jquery_jplayer_1").jPlayer("destroy");
  $("#jquery_jplayer_1").jPlayer({
    ready: function () { // The $.jPlayer.event.ready event
      $(this).jPlayer("setMedia", { // Set the media
        mp3: pathStr
      }).jPlayer("play"); // Attempt to auto play the media
      // console.error('jPlayer play');
    },
    play: function () { // The $.jPlayer.event.play event
      creading = true;
    },
    ended: function () { // The $.jPlayer.event.ended event
      // console.error('jPlayer ended');
      creading = false;
      $(voiceDiv).removeClass('playing');
    },
    supplied: "mp3"
  });
}

function setupVoices() {
  createDropdown();
  const defaultLan = $("#language-menu .dropdown-item").eq(0);
  defaultLan.addClass("active");
  $("#language-text").text(defaultLan.text());
  currentLanguage = defaultLan.text();
  createPlayList(currentLanguage);
}

function createStyles() {
  const voiceobjs = a_voice;
  const voiceMenu = document.getElementById("com-voice-styles");
  const eleLength = voiceMenu.childElementCount;
  if (eleLength != 0) {
    voiceMenu.innerHTML = "";
  }

  for (let index = 0; index < voiceobjs.length; index++) {
    const voiceDiv = document.createElement("BUTTON");
    voiceDiv.classList.add("nr-btn", "voice-styles-item");

    const icon = document.createElement("IMG");
    icon.classList.add("nr-voice-img");
    icon.src = voiceobjs[index]['icon'];
    voiceDiv.appendChild(icon);

    const nameDiv = document.createElement("SPAN");
    nameDiv.classList.add("voice-name");
    const o_style = voiceobjs[index]["styles"]
    const t_style = getVoiceStyleName(o_style);
    nameDiv.innerText = t_style;
    voiceDiv.appendChild(nameDiv);

    const playBtn = `<svg class="nr-icon-play">
                      <use xlink:href="#nr_volume"></use>
                  </svg>
                  <svg class="nr-icon-pause">
                      <use xlink:href="#pause_icon"></use>
                  </svg>`;
    $(voiceDiv).append(playBtn);

    $(voiceDiv).click(function () {
      $('#voice-menu .voice-item').removeClass('playing');
      currentVoiceName = voiceobjs[index]['voiceName'];
      currentVoice = a_voice[index];
      const v_style = a_voice[index]["styles"]
      const style = getVoiceStyleName(v_style);
      if ($(voiceDiv).hasClass('playing')) {
        $(voiceDiv).removeClass('playing');
        playComm(voiceDiv, style);
      } else {
        $('#com-voice-styles .voice-styles-item').removeClass('playing');
        $(voiceDiv).addClass('playing');
        playComm(voiceDiv, style);
      }
    });

    voiceMenu.appendChild(voiceDiv);
  }
}
function getVoiceStyleName(style) {
  switch (style) {
    case "chat":
      return "Chat";
    case "customerservice":
      return "CustomerService";
    case "narration-professional":
      return "Narration";
    case "newscast-casual":
      return "NewscastCasual"
    case "newscast-formal":
      return "NewscastFormal";
    case "cheerful":
      return "Cheerful";
    case "empathetic":
      return "Empathetic";
    case "angry":
      return "Angry";
    case "sad":
      return "Sad";
    case "excited":
      return "Excited";
    case "empathetic":
      return "Empathetic";
    case "friendly":
      return "Friendly";
    case "terrified":
      return "Terrified";
    case "shouting":
      return "Shouting"
    case "unfriendly":
      return "Unfriendly"
    case "whispering":
      return "Whispering"
    case "hopeful":
      return "Hopeful"
    default:
      return "";
  }
}


$(document).ready(function () {
  setUpVideo();

  setupVoices();

  createStyles();
});


