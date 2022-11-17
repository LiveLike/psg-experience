class CustomSlider extends LiveLikeEmojiSlider {
  render() {
    const initialMag = Math.round(this.widgetPayload.initial_magnitude * 100);
    const resultMark =
      this.phase !== "interactive" && (this.val || this.val === 0)
        ? html`
            <div
              class="result-mark"
              style="left: calc(${Math.round(this.average_magnitude * 100)}%)"
            ></div>
          `
        : null;

    return html`
      <template>
        <style>
        .slider-input::-webkit-slider-runnable-track {
          height: 8px;
          background: #1B3860;
          background-image: linear-gradient(
            90deg,
            #BD3039,
            #BD3039 var(--x),
            transparent 0
          );
        }
        .slider-input::-moz-range-track {
          height: 8px;
          background: #1B3860;
          background-image: linear-gradient(
            90deg,
            #BD3039,
            #BD3039 var(--x),
            transparent 0
          );
        }
        .slider-input::-ms-track {
          height: 8px;
          background: #1B3860;
          background-image: linear-gradient(
            90deg,
            #BD3039,
            #BD3039 var(--x),
            transparent 0
          );
        }
        </style>
        <livelike-widget-root class="custom-widget">
          <livelike-widget-header class="widget-header" slot="header">
            <livelike-timer class="custom-timer"></livelike-timer>
            <livelike-title class="custom-title"></livelike-title>
          </livelike-widget-header>
          <livelike-widget-body>
            <form style="--val: ${initialMag};" class="input-form">
              <div class="input-container">
                <input
                  type="range"
                  class="slider-input"
                  value="${initialMag}"
                />
                ${resultMark}
              </div>
              <output class="slider-thumb">
                <img class="slider-image" />
              </output>
            </form>
          </livelike-widget-body>
        </livelike-widget-root>
      </template>
    `;
  }
}
customElements.define("custom-slider", CustomSlider);
const customWidgetRendererTimeline = (args) => {
  let widgetPayload = args.widgetPayload;
  if( widgetPayload.kind === 'emoji-slider'){
    return document.createElement('custom-slider');
  }
}
let w = document.querySelector('livelike-widgets');
//w.customWidgetRenderer = customWidgetRendererTimeline;