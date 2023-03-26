(() => {
    const Index = {
        init: function() {
            this.events.setup();
            this.footer.init();
        },
        events: {
            setup: () => {
                document.querySelectorAll('.game-button').forEach(button => {
                    button.addEventListener('click', () => {
                        Index.run.games[button.getAttribute('data-game')]();
                    })
                })
            }
        },
        run: {
            games: {
                classic: function() {
                    alert("classic game")
                },
                quote: function() {
                    alert("Em breve")
                },
                ability: function() {
                    alert("Em breve")
                },
                emoji: function() {
                    alert("Em breve")
                },
                splash: function() {
                    alert("Em breve")
                }
            },
        },
        footer: {
            init: function() {
                const footer = document.querySelector('.footer');
                footer.innerHTML = footer.innerHTML.replace("{{ year }}", new Date().getFullYear())
            }
        }
    };

    Index.init();
})();