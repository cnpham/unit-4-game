        var num = function numberMaker() {
            var random = Math.floor(Math.random() * 100);
            return random;
        } 
        
        var rubyVal = function addRuby() {
            var random = Math.floor(Math.random() * 10);
            return random;
        }

        var sapphireVal = function addSapphire() {
            var random = Math.floor(Math.random() * 10);
            return random;
        }

        var emeraldVal = function addEmerald() {
            var random = Math.floor(Math.random() * 10);
            return random;
        }

        var amethystVal = function addAmethyst() {
            var random = Math.floor(Math.random() * 10);
            return random;
        }

        var winCount = 0;
        var target = num;
        var crystalCount = 0;
        var rubyValue = rubyVal;
        var sapphireValue = sapphireVal;
        var emeraldValue = emeraldVal;
        var amethystValue = amethystVal;

        $("#wins-text").text(winCount);
        $("#target-text").text(target);
        $("#crystal-text").text(crystalCount);
        var winsText = document.getElementById("wins-text");
        var targetText = document.getElementById("target-text");
        var crystalText = document.getElementById("crystal-text");

        var ruby = $("<img>");
        ruby.addClass("ruby-img");
        ruby.attr("src", "assets/images/Ruby@2x-939b4af5.png");
        ruby.attr("data-rubyvalue", rubyValue);
        $("#gems").append(ruby);

        var sapphire = $("<img>");
        sapphire.addClass("sapphire-img");
        sapphire.attr("src", "assets/images/Sapphire-PNG-Image-77809-300x300.png");
        sapphire.attr("data-sapphirevalue", sapphireValue);
        $("#gems").append(sapphire);

        var emerald = $("<img>");
        emerald.addClass("emerald-img");
        emerald.attr("src", "assets/images/emerald.png");
        emerald.attr("data-emeraldvalue", emeraldValue);
        $("#gems").append(emerald);

        var amethyst = $("<img>");
        amethyst.addClass("amethyst-img");
        amethyst.attr("src", "assets/images/amethyst_gem___icon_by_shinepawart-d8sp605.png");
        amethyst.attr("data-amethystvalue", amethystValue);
        $("#gems").append(amethyst);

        $(".ruby-img").on("click", function() {
            var gemValue = ($(this).attr("data-rubyvalue"));
            gemValue = parseInt(gemValue);
            crystalCount = crystalCount + gemValue;
        });

        $(".sapphire-img").on("click", function() {
            var gemValue = ($(this).attr("data-sapphirevalue"));
            gemValue = parseInt(gemValue);
            crystalCount = crystalCount + gemValue;
        });

        $(".emerald-img").on("click", function() {
            var gemValue = ($(this).attr("data-emeraldvalue"));
            gemValue = parseInt(gemValue);
            crystalCount = crystalCount + gemValue;
        });
        
        $(".amethyst-img").on("click", function() {
            var gemValue = ($(this).attr("data-amethystvalue"));
            gemValue = parseInt(gemValue);
            crystalCount = crystalCount + gemValue;
        });

        // win condition check
        if (crystalCount === game) {
            alert("You are a Crystal Conqueror!");
            alert("Resetting the game...");
            winCount++;
            game = numberMaker();
            crystalCount = 0;
            rubyValue = addRuby();
            sapphireValue = addSapphire();
            emeraldValue = addEmerald();
            amethystValue = addAmethyst();
        }
        
        // lose condition check
        if (crystalCount >= game) {
            alert("You need to work on your Crystal Collecting skills!");
            alert("Resetting the game...");
            game = numberMaker();
            crystalCount = 0;
            rubyValue = addRuby();
            sapphireValue = addSapphire();
            emeraldValue = addEmerald();
            amethystValue = addAmethyst();
        }