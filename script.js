document
    .getElementById("generateBtn")
    .addEventListener("click", generateComic);


function generateComic() {

    let title =
        document.getElementById("title").value.trim();

    let character =
        document.getElementById("character").value.trim();

    let idea =
        document.getElementById("idea").value.trim();


    /* CHECK INPUT */

    if (
        title === "" ||
        character === "" ||
        idea === ""
    ) {

        alert(
            "Please enter Comic Title, Character and Story Idea!"
        );

        return;
    }


    /* TITLE */

    document.getElementById("storyTitle")
        .innerText = title;


    /* STORY */

    let storyHTML = `

        <p class="story-paragraph">

            The city was peaceful, but the night was
            about to change.

            High above the busy streets,
            <b>${character}</b> was watching over
            the city.

            Everything seemed normal until a sudden
            problem appeared.

        </p>


        <div class="speech-bubble">

            🕷️ <b>${character}:</b><br>

            "Something doesn't feel right.
            I need to find out what is happening!"

        </div>


        <p class="story-paragraph">

            ${character} quickly moved across the city
            to investigate.

            The adventure was connected to the idea:

            <b>${idea}</b>.

            The situation was becoming more dangerous,
            but ${character} refused to give up.

        </p>


        <div class="action">

            🕸️ THWIP! THWIP! 🕸️

        </div>


        <p class="story-paragraph">

            Using incredible speed, courage and
            determination, ${character} reached the
            place where the trouble had started.

            People were frightened and needed help.

        </p>


        <div class="speech-bubble">

            🕷️ <b>${character}:</b><br>

            "Don't be afraid!
            I'll protect everyone!"

        </div>


        <p class="story-paragraph">

            The danger became stronger.

            ${character} used every skill available
            to overcome the challenge.

            The fight was difficult, but ${character}
            remembered why the journey had started.

        </p>


        <div class="action">

            💥 BOOM! 💥

        </div>


        <p class="story-paragraph">

            Finally, the danger was defeated.

            The people were safe and the city became
            peaceful again.

            Everyone looked at ${character} with
            happiness and gratitude.

        </p>


        <div class="speech-bubble">

            🕷️ <b>${character}:</b><br>

            "A true hero doesn't help others
            for fame. A true hero helps because
            someone needs them."

        </div>


        <p class="story-paragraph">

            As the sun began to rise,
            ${character} looked over the city.

            The adventure was over for now,
            but another adventure could begin
            at any moment.

        </p>


        <div class="speech-bubble">

            🕷️ <b>${character}:</b><br>

            "Until the next adventure!"

        </div>


        <div class="the-end">

            🕷️ THE END 🕷️

        </div>

    `;


    /* SHOW STORY */

    document.getElementById("storyContent")
        .innerHTML = storyHTML;


    document.getElementById("storySection")
        .classList.add("show");


    /* SCROLL TO STORY */

    document.getElementById("storySection")
        .scrollIntoView({
            behavior: "smooth"
        });

}