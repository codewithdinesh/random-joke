let btn = document.getElementById("get_joke");
        let joke = document.getElementById('joke');
        let loading;
        let loading_animation = document.getElementById('loading')

        window.addEventListener('load', () => {
            loading = true;
            checkloading();
            getjoke();
        })
        btn.addEventListener('click', () => {
            loading = true;
            checkloading()
            getjoke();

        })

        function getjoke() {
            let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single"

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    loading = false;
                    loading_animation.style.display = 'none'
                    console.log(data.joke);
                    joke.innerHTML = data.joke;
                    joke.style.textAlign = 'left';


                });
            // .catch(console.log('Something Error'))

        }
        checkloading = () => {
            if (loading = true) {
                console.log("loading")
                loading_animation.style.visibility = 'visible'
                loading_animation.style.display = 'block'
                joke.innerHTML = "Loading";
                joke.style.textAlign = 'center';

            }

        }
