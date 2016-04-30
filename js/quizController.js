  app.controller('quizCtrl', function($scope) {
    $scope.items = [
    {
      "question" : "Să repari ceasuri şi bijuterii",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să numeri bani (persoana care primească şi să dea bani la o bancă)",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să intervievezi persoane în legătură cu problemele comunitare",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci experimente ştiinţifice",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să conduci un departament administrativ",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să cânţi pe o scenă",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să repari motoare de maşini",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să înregistrezi datele financiare ale unei companii",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să ajuţi persoanele cu handicap fizic să se pregătească pentru o meserie",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să foloseşti microscopul pentru a studia celulele şi bacteriile",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să cumperi marfă pentru un magazin mare",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii artist",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci mobilier",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să lucrezi cu maşini de calcul sau de copiat într-un birou",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii asistent social",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să citeşti cărţi, reviste ştiinţifice",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii manager de vânzare",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să scrii povestiri scurte",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să lucrezi pe o macara",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci rezervări pentru zboruri pe avioane, pentru hoteluri, într-un birou de voiaj",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii profesor sau învăţător",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci muncă de cercetare într-un laborator de fizică",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să intervievezi muncitori care au nemulţumiri la locul lor de muncă",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci desene animate",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii dulgher",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii expert contabil care stabileşte taxele returnate altora",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să studiezi sociologia, adică să studiezi cum trăiesc oamenii împreună",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci studii ştiinţifice despre Soare, Lună, planete, stele",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să faci bani prin comerţ sau bursa de valori",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să predai cursuri de muzică în şcoli",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să asamblezi componentele unui echipament stereo",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să examinezi bugetul unei companii",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să dai sfaturi privind legislaţia oamenilor săraci",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să studiezi cauzele bolilor de inimă",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să conduci un restaurant mare",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să scrii un roman",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii electrician",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să ţii evidenţa mărfurilor, a rechizitelor etc.",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să ai grijă de oameni bolnavi",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să utilizezi matematica pentru a rezolva problemele tehnice şi ştiinţifice",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să te ocupi de politica administrativă",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să regizezi piese de teatru",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să conduci un tractor cu remorcă",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să lucrezi cu cifre într-un birou de afaceri",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să ajuţi persoanele care au ieşit din închisoare să-şi găsească un loc de muncă",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii medic chirurg",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii vicepreşedinte de bancă",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii cântăreţ",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să refaci, repari, refinisezi mobilă",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să studiezi o companie şi să elaborezi un sistem contabil pentru nevoile sale financiare",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să înveţi şi să califici adulţi pentru o meserie",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii biolog marin",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să fii juristul unei companii",
      "type" : 5,
      "givenAnswer": 1
    },
    {
      "question" : "Să citeşti articole despre muzică şi artă",
      "type" : 3,
      "givenAnswer": 1
    },
    {
      "question" : "Să utilizezi şi să repari echipamente de radio, telefon",
      "type" : 1,
      "givenAnswer": 1
    },
    {
      "question" : "Să supervizezi personalul administrativ al unui oficiu",
      "type" : 6,
      "givenAnswer": 1
    },
    {
      "question" : "Să ajuţi oamenii în alegerea unei cariere",
      "type" : 4,
      "givenAnswer": 1
    },
    {
      "question" : "Să examinezi efectele aerului poluant asupra mediului",
      "type" : 2,
      "givenAnswer": 1
    },
    {
      "question" : "Să ocupi o poziţie de lider",
      "type" : 5,
      "givenAnswer": 1
    }
  ];


    $scope.currentItemIndex = 0;
    $scope.currentItem = $scope.items[0];

    $scope.currentAnswer = 0;


    $scope.results = [
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Realist",
          "jobs": "inginer, mecanic, şofer, maşinist etc.",
          "chars" : "conformist, sincer, onest, supus, materialist, natural, consecvent, practic, modest, timid, stabil, econom"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Investigativ",
          "jobs": "medic, chimist, matematician, biolog, alte ocupaţii care necesită abilităţi matematice şi ştiinţifice",
          "chars" : "analitic, precaut, critic, curios, independent, introvertit, metodic, modest, precis, raţional, rezervat"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Artistic",
          "jobs": "ocupaţiile se înscriu în domeniul artelor plastice, a decoraţiunilor de interior, a muzicii, scrisului",
          "chars" : "complex, dezordonat, emoţional, expresiv, idealist, imaginativ, lipsit de abilităţi practice, impulsiv, independent, original, nonconformist"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Social",
          "jobs": "învăţătoare, profesoară, consilier, asistent social, manager de resurse umane",
          "chars" : "cooperant, prietenos, generos, săritor, idealist, centrat pe probleme, amabil, responsabil, sociabil, înţelegător"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Întreprinzător",
          "jobs": "agent de vânzări, manager, politician",
          "chars" : "curajos, ambiţios, atrage atenţia, dominant, energic, impulsiv, optimist, popular, sociabil, vorbăreţ"
        },
        {
          "givenCount" : 0,
          "totalCount" : 0,
          "name": "Convențional",
          "jobs": "contabil, funcţionar, bibliotecar, secretar etc",
          "chars" : "conştiincios, atent, conservator, conformist, supus, ordonat, consecvent, eficient, practic, controlat, eficient"
        }
    ];
    $scope.showQuestions = true;
    $scope.showResults = false;
    $scope.showResult = false;
    $scope.shownResult = {};

    $scope.getResult = function() {
      for (var i = 0; i < $scope.items.length; i++) {
        $scope.results[$scope.items[i].type - 1].givenCount += $scope.items[i].givenAnswer;
        $scope.results[$scope.items[i].type - 1].totalCount++;
      }
      $scope.showResults = true;
      $scope.showQuestions = false;
    }

    $scope.nextItem = function() {
      if ($scope.currentItemIndex == $scope.items.length - 1) {
        $scope.getResult();
        return;
      }
      $scope.currentItemIndex = $scope.currentItemIndex + 1;
      $scope.currentItem = $scope.items[$scope.currentItemIndex];
    }

    $scope.showResultDetails = function(result) {
      $scope.shownResult = result;
      $scope.showResults = false;
      $scope.showResult = true;
    }

    $scope.goBack = function() {
      $scope.showResult = false;
      $scope.showResults = true;
    }

  });
