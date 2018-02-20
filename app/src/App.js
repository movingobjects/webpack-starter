
import testImg from './assets/image.png';
import testAudio from './assets/audio.mp3';
import testVideo from './assets/video.mp4';

export default class App {

  constructor() {

    document.write(`

      <section>
        <h1>Webpack Starter</h1>
        <p>Great job!</p>
      </section>

      <section>

        <h2>Image asset tests</h2>

        <h4>ES6 import HTML image:</h4>
        <p>
          <img
            class="test-img"
            src='${testImg}'>
        </p>

        <h4>Inline CSS background-image:</h4>
        <div
          class="test-img test-bg-img"
          style="background-image: url('${testImg}');">
        </div>

        <h4>External Sass background-image:</h4>
        <div
          class="test-img test-bg-img test-external-bg-img">
        </div>

      </section>

      <section>

        <h2>Media asset tests</h2>

        <h4>Audio:</h4>
        <audio
          controls
          src="${testAudio}">
        </audio>

        <h4>Video:</h4>
        <video
          controls
          src="${testVideo}">
        </video>

      </section>

    `);

  }

}
