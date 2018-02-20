
import testImg from './images/success.png';

export default class App {

  constructor() {

    document.write(`

      <h2>Webpack Starter</h2>
      <p>Great job! Page rendered.</p>

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

    `);

  }

}
